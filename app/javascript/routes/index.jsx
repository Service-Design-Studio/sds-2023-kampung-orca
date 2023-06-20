import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import LessonView from "../components/LessonView";
import Chat from "../components/Chatbox/Chat";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<LessonView />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </Router>
);
