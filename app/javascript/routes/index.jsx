import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import LessonView from "../components/LessonView";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<LessonView />} />
    </Routes>
  </Router>
);
