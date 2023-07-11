import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LessonView from "../components/Lessons/LessonView";
import { LessonCompletion } from "../components/Lessons/LessonCompletion";
import { LessonNodes } from "../components/Lessons/LessonNodes";
import { ErrorPage } from "../components/Misc/Error"
import { LoginError } from "../components/Misc/LoginError"

import LoginPage from "../components/Logins/LoginPage";
import CoverLogin from "../components/Logins/CoverLogin";
import HomePage from "../components/Logins/HomePage";
import LearnMore from "../components/Logins/LearnMore";
import { ForumMain } from "../components/Forum/ForumMain";
import { ForumPost } from "../components/Forum/ForumPost";
import { ForumView } from "../components/Forum/ForumView";
import { DiscussionView } from "../components/Forum/DiscussionView";


export default (
  <Router>
    <Routes>
      <Route path="/" element={<LessonNodes />} />
      <Route path="/lesson-view/:lessonId" element={<LessonView/>} />
      <Route path="/lesson-view" element={<LessonView/>} />
      <Route path="/lesson-complete" element={<LessonCompletion/>}/>

      <Route path="/error" element={<ErrorPage />} />
      <Route path="/loginerror" element={<LoginError />} />

      <Route path="/cover" element={<CoverLogin />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/learnmore" element={<LearnMore />} />

      <Route path="/forum" element={<ForumMain />} />
      <Route path="/new" element={<ForumPost />} />
      <Route path="/posts/1" element={<ForumView />} />
      <Route path="/posts/2" element={<DiscussionView />} />
      
    </Routes>
  </Router>

  
);
