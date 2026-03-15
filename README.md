# ShopEZ E-commerce Website

ShopEZ is a full-stack e-commerce web application built using the MERN stack.
It allows users to browse products, register/login, add items to cart, and place orders.

## Tech Stack

Frontend:
- React
- Vite
- CSS

Backend:
- Node.js
- Express.js

Database:
- MongoDB Atlas

Authentication:
- JWT (JSON Web Token)



## Features

- User Registration and Login
- JWT Authentication
- Product Listing
- Product Details Page
- Add to Cart
- Checkout System
- Order Storage in MongoDB
- Responsive UI
- Modern Navbar with Search



## Project Structure
client/ → React frontend

server/ → Node + Express backend



## Run Project Locally

### 1️⃣ Clone Repository

bash
git clone https://github.com/yourusername/shopez-ecommerce.git
cd shopez-ecommerce

<br>

### 2️⃣ Install Dependencies

Frontend

cd client
npm install


Backend
cd server
npm install

<br>

### 3️⃣ Environment Variables

Create a .env file inside the server folder

Example:

PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

<br>

### 5️⃣ Start Frontend

cd client
npm run dev


<br>

### 🗄Database

Database is hosted using MongoDB Atlas.

Collections used:
users
products
orders
carts


