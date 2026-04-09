# 🛒 React CRUD Product Management App

A simple and responsive **CRUD (Create, Read, Update, Delete)** application built using **React.js**, **Axios**, and **JSON Server**.
This project demonstrates full frontend-backend interaction with real-time data updates.

---

## 🚀 Features

* ➕ Add new products
* 📋 View all products in a table
* ✏️ Edit existing products
* ❌ Delete products
* 🔄 Real-time UI updates
* 🌐 API integration using Axios

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Bootstrap
* **Backend:** JSON Server (Fake REST API)
* **HTTP Client:** Axios
* **Version Control:** Git & GitHub

---

## 📂 Project Structure

```
src/
│── App.js        # Main component (logic & state)
│── Form.js       # Add/Edit form
│── Table.js      # Display data
│── api.js        # API calls (GET, POST, PUT, DELETE)
│── index.js      # Entry point
│── index.css     # Styling
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/react-crud-product-app.git
cd react-crud-product-app
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Start React App

```
npm start
```

---

## 🔌 Run JSON Server (Backend)

Make sure JSON Server is installed:

```
npm install -g json-server
```

Create a `db.json` file:

```
{
  "products": []
}
```

Run server:

```
json-server --watch db.json --port 2003
```

---

## 🌐 API Endpoint

```
http://localhost:2003/products
```
----

## 🎯 Learning Outcomes

* Understanding of CRUD operations
* React state management using `useState`
* Side effects handling with `useEffect`
* API integration using Axios
* Component-based architecture

---

## 🚀 Future Enhancements

* 🔍 Search & filter functionality
* ✅ Form validation
* 🔐 Authentication system
* 🌍 Deployment (Netlify / Vercel)

---

## 👨‍💻 Author

**Rakesh Kondu**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
