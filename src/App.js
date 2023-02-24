import { Routes, Route, Outlet } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

import Home from "./pages/home/Home";
import "./App.css";

const AppLayout = () => (
  <>
    <Topbar />
    <div className="container">
      <Sidebar />
      <Outlet />
    </div>
  </>
);

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
