import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DeletePolicy from "./Component/DeletePolicy";
import Privacy from "./Component/Privacy";
import Landing from "./Landing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy-policy" element={<Privacy/>} />
        <Route path="/delete-policy" element={<DeletePolicy/>} />
      </Routes>
    </>
  );
}

export default App;
