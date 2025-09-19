import { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  Hash,
  Globe,
  AlertCircle
} from "lucide-react";
import {
  getAdminConfiguration,
  updateAdminConfiguration,
} from "../../services/api";

const AdminConfiguration = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    timezone: "",
    currency: "",
    showCompanyName: false,
  });

  const [logoFile, setLogoFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [configId, setConfigId] = useState(null); // To store the ID of the config 

  // Fetch config dynamically
  useEffect(() => {
    const fetchConfig = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getAdminConfiguration();
        const configsArray = response.data || [];

        // find config with id=2
        const targetConfig = configsArray.find(cfg => cfg.id === 2);

        if (!targetConfig) {
          throw new Error("Configuration with id=2 not found");
        }

        console.log("Config with id=2:", targetConfig); // only id=2

        setConfigId(targetConfig.id);

        // Parse safely
        let parsedValue = {};
        try {
          if (typeof targetConfig.value === "string") {
            const trimmed = targetConfig.value.trim();
            if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
              parsedValue = JSON.parse(targetConfig.value);
            } else {
              parsedValue = { companyName: targetConfig.value };
            }
          } else {
            parsedValue = targetConfig.value || {};
          }
        } catch {
          parsedValue = { companyName: targetConfig.value };
        }

        // Put parsed values into your form fields
        setFormData({
          companyName: parsedValue.isp_name || "",
          email: parsedValue.isp_email || "",
          phone: parsedValue.isp_phone || "",
          address: parsedValue.isp_address || "",
          city: parsedValue.isp_city || "",
          zipCode: parsedValue.isp_zip || "",
          country: parsedValue.isp_country || "",
          timezone: parsedValue.isp_timezone || "Asia/Kolkata",
          currency: parsedValue.isp_currency || "INR(₹)",
          showCompanyName: parsedValue.isp_name_show ?? false,
        });

      } catch (err) {
        console.error("Error fetching admin config:", err);
        setError(`Failed to load configuration: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle logo upload
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setLogoFile(URL.createObjectURL(file));
  };

  const clearLogo = () => {
    setLogoFile(null);
    document.getElementById("logoInput").value = "";
  };

  // Submit updates to backend
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    setError(null);
    setSuccess(null);

    if (!configId) {
      throw new Error("No configuration ID available for update");
    }

    // Map frontend formData to backend schema
    const payload = {
      isp_name: formData.companyName,
      isp_email: formData.email,
      isp_phone: formData.phone,
      isp_address: formData.address,
      isp_city: formData.city,
      isp_zip: formData.zipCode,
      isp_country: formData.country,
      isp_timezone: formData.timezone,
      isp_currency: formData.currency,
      isp_name_show: formData.showCompanyName,
    };

    // Send to backend (store value as JSON string in DB)
    await updateAdminConfiguration(configId, {
      value: JSON.stringify(payload),
    });

    setSuccess("Configuration updated successfully!");
  } catch (err) {
    console.error("Error updating configuration:", err);
    setError(`Failed to update configuration: ${err.message}`);
  }
};


  if (loading) return (
    <div className="p-6 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
      <span className="ml-3">Loading configuration...</span>
    </div>
  );

  if (error) return (
    <div className="p-6">
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded flex items-start">
        <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
        <div>
          <p className="font-medium">Error</p>
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 text-sm underline"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 p-0 pt-0">
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded flex items-start">
          <span className="mr-2">✓</span>
          <div>{success}</div>
        </div>
      )}

      {/* Admin Form */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Admin</h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Company Name */}
          <div className="flex items-center border border-gray-400 rounded px-3 py-2">
            <User className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Company Name"
              className="w-full outline-none"
            />
          </div>

          {/* Address */}
          <div className="flex items-center border border-gray-400 rounded px-3 py-2">
            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address" 
              className="w-full outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border border-gray-400 rounded px-3 py-2">
            <Mail className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full outline-none"
            />
          </div>

          {/* City */}
          <div className="flex items-center border border-gray-400 rounded px-3 py-2">
            <Building className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="City"
              className="w-full outline-none"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center border border-gray-400 rounded px-3 py-2">
            <Phone className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone" 
              className="w-full outline-none"
            />
          </div>

          {/* Zip Code */}
          <div className="flex items-center border border-gray-400 rounded px-3 py-2">
            <Hash className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              placeholder="Zip Code"
              className="w-full outline-none"
            />
          </div>

          {/* Time Zone */}
          <div className="flex items-center border border-gray-400 rounded px-3 py-2">
            <Globe className="w-4 h-4 mr-2 text-gray-500" />
            <select
              name="timezone"
              value={formData.timezone}
              onChange={handleInputChange}
              className="w-full outline-none"
            >
              <option value="Asia/Kolkata">Asia/Kolkata</option>
              <option value="UTC">UTC</option>
            </select>
          </div>

          {/* Country */}
          <div className="flex items-center border border-gray-400 rounded px-3 py-2">
            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Country"
              className="w-full outline-none"
            />
          </div>

          {/* Currency */}
          <div className="flex items-center border border-gray-400 rounded px-3 py-2">
            <Globe className="w-4 h-4 mr-2 text-gray-500" />
            <select
              name="currency"
              value={formData.currency}
              onChange={handleInputChange}
              className="w-full outline-none"
            >
              <option value="INR(₹)">INR(₹)</option>
              <option value="USD($)">USD($)</option>
            </select>
          </div>

          {/* Checkbox */}
          <div className="flex items-center col-span-1 md:col-span-2 mt-2">
            <input
              type="checkbox"
              id="showCompanyName"
              name="showCompanyName"
              checked={formData.showCompanyName}
              onChange={handleInputChange}
              className="h-4 w-4 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500" 
            />
            <label
              htmlFor="showCompanyName"
              className="ml-2 text-gray-700 cursor-pointer"
            >
              Company name show in login page
            </label>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2">
            <button 
              type="submit"
              className="bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600"
            >
              APPLY
            </button>
          </div>
        </form>
      </div>

      {/* Logo Setup */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Logo Setup</h2>

        <div className="flex items-center space-x-4">
          <input
            id="logoInput"
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="border border-gray-300 rounded px-3 py-2"
          />
          {logoFile && (
            <img
              src={logoFile}
              alt="Logo Preview"
              className="h-12 object-contain"
            />
          )}
        </div>

        <div className="mt-4 flex space-x-3">
          <button
            onClick={() => alert("Logo Uploaded")}
            className="bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600"
          >
            UPLOAD
          </button>
          <button
            onClick={clearLogo}
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500"
          >
            CLEAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminConfiguration;