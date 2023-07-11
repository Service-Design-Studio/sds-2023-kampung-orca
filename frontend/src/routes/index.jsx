import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LessonView from "../components/Lessons/LessonView";
import { LessonCompletion } from "../components/Lessons/LessonCompletion";
import { LessonNodes } from "../components/Lessons/LessonNodes";
import { ErrorPage } from "../components/Error"
import LoginPage from "../components/Logins/LoginPage";
import CoverLogin from "../components/Logins/CoverLogin";
import { ForumMain } from "../components/Forum/ForumMain";
import { ForumPost } from "../components/Forum/ForumPost";
import { ForumView } from "../components/Forum/ForumView";
import { DiscussionView } from "../components/Forum/DiscussionView";



export default(
    <Router>
      <Routes>
        <Route path="/curriculum/topic/:topic_id/view" element={<LessonNodes />} />
        <Route path="/curriculum/topic/:topic_id/lesson/:lesson_id/view" element={<LessonView />} />
        <Route path="/curriculum/topic/:topic_id/lesson/:lesson_id/lesson_completed" element={<LessonCompletion />} />
        <Route path="/error" element={<ErrorPage />} />

        <Route path="/cover" element={<CoverLogin />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/forum" element={<ForumMain />} />
        <Route path="/new" element={<ForumPost />} />
        <Route path="/posts/1" element={<ForumView />} />
        <Route path="/posts/2" element={<DiscussionView />} />
      </Routes>
    </Router>
  );
