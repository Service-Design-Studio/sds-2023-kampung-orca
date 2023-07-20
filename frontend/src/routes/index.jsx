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

import GoogleCallback from "../components/Logins/GoogleCallback";
import LoginPage from "../components/Logins/LoginPage";
import CoverLogin from "../components/Logins/CoverLogin";
import HomePage from "../components/Logins/HomePage";
import TopicPage from "../components/Logins/TopicPage";
import LearnMore from "../components/Logins/LearnMore";

import useCookie from "../hooks/useCookie";

const AuthWrapper = () => {
  const [cookie] = useCookie("token");
  return cookie ? <Outlet /> : <Navigate to="/loginerror" replace />;
};

export default (
  <Router>
    <Routes>
      {/* TODO: Tidy up forum routes */}
      <Route element={<AuthWrapper />}>
        <Route path="/curriculum/topic/:topic_id" element={<LessonNodes />} />
        <Route path="/curriculum/lesson/:lesson_id" element={<LessonView />} />
        <Route
          path="/curriculum/lesson/:lesson_id/lesson_completed"
          element={<LessonCompletion />}
        />
        <Route path="/curriculum/topic" element={<TopicPage />} />
        <Route
          path="/curriculum/lesson/:lesson_id/error"
          element={<CurriculumErrorPage />}
        />
      </Route>

      <Route path="/error" element={<ErrorPage />} />
      <Route path="/loginerror" element={<LoginErrorPage />} />
      <Route path="/oauth/google" element={<GoogleCallback />} />
      <Route path="/" element={<CoverLogin />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/learnmore" element={<LearnMore />} />
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  </Router>
);
