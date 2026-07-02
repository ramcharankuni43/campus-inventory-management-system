# Campus Inventory Management System

A production-ready web application for managing campus inventory, built with React, Django REST Framework, and PostgreSQL.

## Tech Stack

- **Frontend:** React 18 + Vite + Tailwind CSS + Axios
- **Backend:** Django 4 + Django REST Framework + SimpleJWT
- **Database:** PostgreSQL
- **Authentication:** JWT (JSON Web Tokens)

## Features

- Login with role-based access (Admin / Staff / Viewer)
- Dashboard with inventory overview
- Add, edit, and delete inventory items
- Issue and return inventory items
- Transaction history
- Low stock alerts
- Search and filter inventory
- Export inventory data

## Project Structure

```
campus_inventory_management_system/
├── backend/
├── frontend/
├── .gitignore
└── README.md
```

## Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

## Environment Variables

Create a `.env` file inside the `backend` folder.

Example:

```env
SECRET_KEY=your-secret-key
DB_NAME=campus_inventory
DB_USER=postgres
DB_PASSWORD=your-password
DB_HOST=localhost
DB_PORT=5432
DEBUG=True
```

## Author

Developed by **Ramcharan Kuni**