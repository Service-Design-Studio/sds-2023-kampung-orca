import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import LessonView from "../components/LessonView";
import Pages from "../components/Page";
import { LessonCompletion } from "../components/LessonCompletion";
import { LessonPathway } from "../components/LessonPathway";
import Chat from "../components/Chatbox/Chat";

export default (
  <Router>
    <Routes>
<<<<<<< HEAD
      <Route path="/lesson-view/:lesson_id" element={<LessonView />} />
      <Route path="/page" element={<Pages />} />
      <Route path="/lesson-complete/:lesson_id" element ={<LessonCompletion/>} />
      <Route path="/" element = {<LessonPathway/>} />
=======
      <Route path="/" element={<LessonView />} />
      <Route path="/lesson-complete" element ={<LessonCompletion/>} />
      <Route path="/lesson-pathway" element = {<LessonPathway/>} />
      <Route path="/chat" element={<Chat />} />
>>>>>>> refs/remotes/origin/lesson-complete
    </Routes>
  </Router>
);
