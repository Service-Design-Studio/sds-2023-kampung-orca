import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import {
  LessonNodes,
  LessonView,
  LessonCompletion,
} from "../components/Lessons";

import {
  CurriculumErrorPage,
  ErrorPage,
  LoginErrorPage,
} from "../components/Misc";

import LoginPage from "../components/Logins/LoginPage";
import CoverLogin from "../components/Logins/CoverLogin";
import HomePage from "../components/Logins/HomePage";
import TopicPage from "../components/Logins/TopicPage";
import LearnMore from "../components/Logins/LearnMore";
import { ForumMain } from "../components/Forum/ForumMain";
import { ForumPost } from "../components/Forum/ForumPost";
import { ForumView } from "../components/Forum/ForumView";
import { DiscussionView } from "../components/Forum/DiscussionView";

import useCookie from "../hooks/useCookie";

const AuthWrapper = () => {
  const [cookie] = useCookie("token");
  return cookie ? <Outlet /> : <Navigate to="/loginerror" replace />;
};

export default (
  <Router>
    <Routes>
      <Route element={<AuthWrapper />}>
        <Route
          path="/curriculum/topic/:topic_id/view"
          element={<LessonNodes />}
        />
        <Route
          path="/curriculum/topic/:topic_id/lesson/:lesson_id/view"
          element={<LessonView />}
        />
        <Route
          path="/curriculum/topic/:topic_id/lesson/:lesson_id/lesson_completed"
          element={<LessonCompletion />}
        />
        <Route path="/curriculum/topics/view" element={<TopicPage />} />
        <Route path="/forum" element={<ForumMain />} />
        <Route path="/new" element={<ForumPost />} />
        <Route path="/posts/1" element={<ForumView />} />
        <Route path="/posts/2" element={<DiscussionView />} />
        <Route
          path="/curriculum/topic/:topic_id/lesson/:lesson_id/error"
          element={<CurriculumErrorPage />}
        />
      </Route>

      <Route path="/error" element={<ErrorPage />} />
      <Route path="/loginerror" element={<LoginErrorPage />} />

      <Route path="/cover" element={<CoverLogin />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/learnmore" element={<LearnMore />} />
    </Routes>
  </Router>
);
