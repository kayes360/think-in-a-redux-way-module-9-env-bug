import React from "react"; 
import Conversation from "./pages/Conversation"
import Inbox from "./pages/Inbox"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/inbox" element={<Conversation />}></Route>
        <Route path="/inbox/:id" element={<Inbox />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
