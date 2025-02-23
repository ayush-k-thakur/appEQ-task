# MERN Stack Project Setup

## Prerequisites
- Node.js and npm installed
- MongoDB Atlas account with a valid connection URI

## 📁 Clone the Repository
```bash
git clone <repository_url>
cd <project_directory>
```

## 🚀 Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend root and add:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://ayush524425:7O0PnoQbyWJ1RhRS@cluster0.78iyh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   ```

4. Start the backend server:
   ```bash
   npm run start
   ```

## 💻 Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend server:
   ```bash
   npm run dev
   ```

## 🌐 Access the Application
- Backend runs on: `http://localhost:5000`
- Frontend runs on: `http://localhost:5173`

## 🛠️ Troubleshooting
- ✅ Ensure MongoDB URI is correct and the network access in MongoDB Atlas allows connections.
- ✅ Verify that both servers are running without errors.

---

The project should now be up and running with the backend on port 5000 and the frontend on port 3000.

---

# 📄 README

## 📌 Project Overview
This MERN stack project is built with MongoDB, Express.js, React.js, and Node.js to provide a full-stack web application.

## ⚙️ Getting Started
Follow the steps in this README to set up both backend and frontend servers.

## 🧾 Available Scripts
### Backend
- `npm install` → Install dependencies
- `npm run start` → Start backend server on port 5000

### Frontend
- `npm install` → Install dependencies
- `npm run dev` → Start frontend server on port 3000

## 📊 Technologies Used
- **MongoDB** → NoSQL Database
- **Express.js** → Backend Framework
- **React.js** → Frontend Library
- **Node.js** → Backend Runtime

## 🧑‍💻 Contributing
1. Fork the repo
2. Create your branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 🛡️ License
This project is licensed under the MIT License.

