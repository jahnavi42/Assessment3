import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import AppRoutes from "./routes";
import { NavBar } from "./components";


function App() {
 
  
  return (
    <div>
      <NavBar />
      <Routes>
        {AppRoutes.map((appRoute) => (
          <Route path={appRoute.path} element={appRoute.comp} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
