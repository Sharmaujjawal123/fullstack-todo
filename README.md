# 📝 Full-Stack Todo App  

A simple **Full-Stack Todo Application** using **React (Frontend)**, **Node.js & Express (Backend)**, and **MongoDB (Database)**.  

## 🚀 Features  
- ✅ Add, Edit, and Delete Todos  
- ✅ Mark Todos as Completed  
- ✅ Persistent Storage with MongoDB  
- ✅ REST API with Express.js  

---

## 🛠️ Tech Stack  
### **Frontend (React)**
- React.js  
- Fetch API  
- useState, useEffect for state management  

### **Backend (Node.js & Express)**
- Express.js (REST API)  
- MongoDB & Mongoose (Database)  

### **Database (MongoDB)**
- Hosted on **MongoDB Atlas** or **Local MongoDB**  

---

## 📂 Project Structure  




## 🎯 Installation & Setup  

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/full-stack-todo-app.git
cd full-stack-todo-app

Setup Backend
cd backend
npm install    # Install dependencies
npm start      # Start Express Server
🔹 Runs on: http://localhost:4000/

3️⃣ Setup Frontend
cd frontend
npm install    # Install dependencies
npm start      # Start React App
🔹 Runs on: http://localhost:3000/

📌 API Endpoints
🔹 1. Create a Todo
POST /todos

{
  "title": "Learn React",
  "description": "Build a Full-Stack App",
  "completed": false
}
✅ Response

{
  "message": "Todo added",
  "todo": { "id": "12345", "title": "Learn React", "description": "Build a Full-Stack App", "completed": false }
}
🔹 2. Get All Todos
GET /todos ✅ Response

[
  { "id": "123", "title": "Learn React", "description": "Build a Full-Stack App", "completed": false }
]
