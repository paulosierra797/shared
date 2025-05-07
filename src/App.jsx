import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import HomePage from "./HomePage";
import Registration from "./Registration";
import Cart from "./CartPage";
import AddProductPage from "./AddProductPage";
import NavigationBar from "./components/NavigationBar";
import PurchaseHistory from "./PurchaseHistory";
import Reports from "./Reports";
import Checkout from "./CheckOut";
import OrderPage from "./OrderPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Get the role from localStorage
    const storedRole = localStorage.getItem("userRole");
    setUserRole(storedRole);
  }, []);

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<OrderPage />} />
        {/* Conditionally render PurchaseHistory based on user role */}
        <Route path="/history" element={<PurchaseHistory />} />
        {/* Conditionally render AddProductPage only if the user is a seller */}
        {userRole === "Seller" && <Route path="/add-product" element={<AddProductPage />} />}
        {userRole === "Seller" && <Route path="/reports" element={<Reports />} />}
      </Routes>
    </Router>
  );
}

export default App;
