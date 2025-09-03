# AANIRIDS Server API

Backend API for AANIRIDS project.

## Setup

```bash
# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your database credentials

# Start server
npm start
```

## Environment Variables

Required variables in `.env`:

```
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=your_database
DB_PORT=5432
PORT=3000
```

## API Endpoints

- GET `/api/users` - Retrieve all users
