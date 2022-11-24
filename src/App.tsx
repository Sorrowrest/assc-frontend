import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "./ui/pages/SignIn";
import { initAxiosInstance } from "./core/services/api";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const isAuthorized = initAxiosInstance();

    if (!isAuthorized) {
      navigate("/sign");
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/sign" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
