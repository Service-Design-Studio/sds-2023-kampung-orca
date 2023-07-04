import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LessonView from "../components/Lessons/LessonView";
import { LessonCompletion } from "../components/Lessons/LessonCompletion";
import { LessonNodes } from "../components/Lessons/LessonNodes";
import { ErrorPage } from "../components/Error"
import Chat from "../components/Chatbox/Chat";
import LoginPage from "../components/Logins/LoginPage";
import CoverLogin from "../components/Logins/CoverLogin";


export default (
  <Router>
    <Routes>
      <Route path="/" element={<LessonNodes />} />
      <Route path="/lesson-complete/:lesson_id" element ={<LessonCompletion/>} />
      <Route path="/lesson-view/:lesson_id" element={<LessonView/>} />
      <Route path="/nodes" element={<LessonNodes/>} />
      <Route
        path="/lesson-complete/:lesson_id"
        element={<LessonCompletion />}
      />
      <Route path="/chat" element={<Chat />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/cover" element={<CoverLogin />} />
      <Route path="/login" element={<LoginPage />} />
      
    </Routes>
  </Router>
);
