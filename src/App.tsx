import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import StoresPage from "./pages/StorePage/StoresPage";
import PlanningPage from "./pages/Planning/PlanningPage";
import "./App.css";
import ChartPage from "./pages/Chart/ChartPage";
import SKUsPage from "./pages/SKU/SKUsPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ marginLeft: "20px", flex: 1 }}>
          <Routes>
            <Route path="/stores" element={<StoresPage />} />
            <Route path="/planning" element={<PlanningPage />} />
            <Route path="/chart" element={<ChartPage />} />
            <Route path="/skus" element={<SKUsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
