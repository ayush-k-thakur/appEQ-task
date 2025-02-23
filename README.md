## Prerequisites
- Node.js and npm installed
- MongoDB Atlas account with a valid connection URI

## 📁 Clone the Repository
```bash
git clone:- "gh repo clone ayush-k-thakur/appEQ-task"
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


