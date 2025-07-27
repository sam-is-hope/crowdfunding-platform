# CrowdFundIt 🪙

A full-stack crowdfunding platform built with:
- **React** (frontend)
- **Node.js + Express** (backend)
- **MongoDB** (database)
- **Stripe** (donation processing)
- **JWT** (authentication)

---

## 🚀 Getting Started

### 1. Clone the Repo

bash
cd crowdfundit
# 🎯 CrowdFundIt — Full-Stack Crowdfunding Platform

CrowdFundIt is a full-featured, modern crowdfunding web application that allows users to create, explore, and support fundraising campaigns. Built with the MERN stack (MongoDB, Express, React, Node.js), it includes secure authentication, Stripe payments, campaign analytics, and more.

---

## 🛠️ Tech Stack

**Frontend:**
- React (with React Router)
- Axios for API calls
- Tailwind CSS (or your chosen styling)
- Stripe.js for payment UI

**Backend:**
- Node.js + Express
- MongoDB (Mongoose ODM)
- JWT Authentication
- Stripe API for secure donations

**Others:**
- dotenv for environment config
- bcrypt for password hashing
- MongoDB Atlas or local database
- Postman for API testing

---

## 🚀 Features

- ✅ User registration and login (JWT-based)
- ✅ Create, read, update, delete (CRUD) campaigns
- ✅ Secure Stripe integration for donations
- ✅ View donation progress and analytics per campaign
- ✅ Role-based permissions (Admin, Donor, Creator)
- ✅ Dashboard for campaign performance
- ✅ Mobile-responsive UI

---

## 📁 Project Structure
├── client/ # React frontend
│ ├── src/
│ │ ├── components/ # Reusable components
│ │ ├── pages/ # Route-level views
│ │ ├── App.js # Main App file
│ │ └── index.js # ReactDOM entry point
│ └── .env
│ └── .gitignore
│
├── server/ # Node.js + Express backend
│ ├── controllers/ # Route controllers
│ ├── models/ # Mongoose models
│ ├── routes/ # Route definitions
│ ├── middleware/ # Auth, error handling
│ ├── config/ # DB config
│ ├── utils/ # Helper logic (e.g., analytics)
│ ├── server.js # App entry point
│ └── .env
│ └── .gitignore
│
├── README.md
├── .gitignore
└── package.json

yaml
Copy
Edit

