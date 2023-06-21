import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import LessonView from "../components/LessonView";
import { LessonCompletion } from "../components/LessonCompletion";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<LessonView />} />
      <Route path="/lesson-complete" element ={<LessonCompletion/>} /> 
    </Routes>
  </Router>
);
