import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LessonView from "../components/Lessons/LessonView";
import { LessonCompletion } from "../components/Lessons/LessonCompletion";
import { LessonPathway } from "../components/Lessons/LessonPathway";
import { LessonNodes } from "../components/Lessons/LessonNodes";
import Chat from "../components/Chatbox/Chat";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<LessonPathway />} />
      <Route path="/lesson-view/:lesson_id" element={<LessonView />} />
      <Route path="/nodes" element={<LessonNodes />} />
      <Route
        path="/lesson-complete/:lesson_id"
        element={<LessonCompletion />}
      />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </Router>
);
