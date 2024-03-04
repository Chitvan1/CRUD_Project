import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Users";
import AddUser from "./AddUser";
import ModifyUser from "./ModifyUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/create" element={<AddUser />}></Route>
          <Route path="/update/:id" element={<ModifyUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
