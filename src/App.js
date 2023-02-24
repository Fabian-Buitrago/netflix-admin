import { useContext } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ProductList from "./pages/productList/ProductList";
import { AuthContext } from "./context/authContext/AuthContext";
import "./App.css";
import Product from "./pages/product/Product";

const AppLayout = ({ admin }) =>
  admin ? (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </>
  ) : (
    <Navigate to="/login" replace />
  );

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace /> : <Login />}
      />
      <Route element={<AppLayout admin={user} />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<ProductList />} />
        <Route path="/product/:productId" element={<Product />} />
      </Route>
    </Routes>
  );
}

export default App;
