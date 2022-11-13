import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./clients/pages/home/Home";
import LogIn from "./components/LogIn";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import CheckOut from "./components/checkOut/CheckOut";
import Register from "./components/register/Register";
import Dashboard from "./components/dashboard/Dashboard";
import AddProduct from "./admin/add-product/AddProduct";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
