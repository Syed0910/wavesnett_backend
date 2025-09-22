const express = require('express');
const router = express.Router();

const configsController = require('../controllers/configs.controller');


router.get('/', configsController.getAll);
router.get('/:id', configsController.getById);
router.post('/', configsController.create);
router.put('/:id', configsController.update);

router.delete('/:id', configsController.remove);

// Specific configs

router.get('/tax/config', configsController.getTaxConfig);
router.put('/tax/config', configsController.updateTaxConfig);
router.get('/kyc/config', configsController.getKycConfig);
router.put('/kyc/config', configsController.updateKycConfig);


router.get('/theme/config', configsController.getThemeConfig);
router.put('/theme/config', configsController.updateThemeConfig);

router.get('/extra/config', configsController.getExtraConfig);
router.put('/extra/config', configsController.updateExtraConfig);

router.get('/portal/config', configsController.getPortalConfig);
router.put('/portal/config', configsController.updatePortalConfig);

router.get('/hotspot/config', configsController.getHotspotConfig);
router.put('/hotspot/config', configsController.updateHotspotConfig);

router.get('/permissions/config', configsController.getPermissionsConfig);
router.put('/permissions/config', configsController.updatePermissionsConfig);

module.exports = router;

