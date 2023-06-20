import React, { useEffect, useState } from "react";
import Lesson from "./Lessons";

export default LessonView = (props) => {
  const [lessonId, setLessonId] = useState(null);

  const handleLessonClick = (id) => {
    setLessonId(id);
  };

  const lessonIds = [123, 456, 789]; // Static array of lesson IDs

  return (
    <div className="app">
      <h1>Lesson View</h1>
      {lessonIds.map((id) => (
        <button key={id} onClick={() => handleLessonClick(id)}>
          Lesson {id}
        </button>
      ))}
      {lessonId && (
        <>
          <p>Lesson duration: 11min</p>
          <Lesson lessonId={lessonId} />
        </>
      )}
    </div>
  );
};
