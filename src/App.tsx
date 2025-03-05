import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StoresPage from "./pages/StoresPage";
import PlanningPage from "./pages/PlanningPage";

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
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
