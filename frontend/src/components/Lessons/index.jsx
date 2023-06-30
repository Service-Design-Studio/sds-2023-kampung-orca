import React from "react";

const LessonView = ({ lessonId }) => {
  const placeholderVideoUrl = "https://youtube.com/embed/C3irQ7wp9Mw";
  const placeholderNotes =
    "The Importance of Diversity and Harmony in Any Country \nDiversity and harmony are essential components of any country's social fabric. They play a critical role in promoting peace, stability, and economic growth while also fostering a sense of belonging and unity among citizens. In this article, we will explore why diversity and harmony are so important and how they can benefit society as a whole. \n\nPromoting Understanding and Tolerance\nOne of the most significant benefits of diversity and harmony is that they promote understanding and tolerance between people of different backgrounds, cultures, and beliefs. When people come together and learn about each other's traditions, customs, and perspectives, they are more likely to develop empathy and respect for one another. This can help reduce stereotypes, prejudices, and discrimination, creating a more inclusive and welcoming society.\n\n Encouraging Innovation and Creativity \n Another benefit of diversity and harmony is that they encourage innovation and creativity. When people of different backgrounds come together, they bring with them unique perspectives and experiences that can help generate new ideas and solutions. This diversity of thought can help drive innovation in various industries, including technology, science, and the arts.\n\n Boosting Economic Growth \n Diversity and harmony can also play a crucial role in boosting economic growth. When people of different backgrounds work together towards common goals, they can achieve more significant results than when working alone. A diverse workforce can also help companies expand into new markets and attract a broader customer base, leading to increased revenues and profits.";
  const placeholderLessonDuration = "11 min";

  return (
    <div className="lesson-view-container">
      <div className="notes">
        <div className="notes-content">{placeholderNotes}</div>
      </div>
      <div className="video">
        {/* Uncomment the following line once you have the actual video */}
        {/* <iframe src={videoUrl} width="560" height="315" title="Lesson Video" frameborder="0" allowfullscreen></iframe> */}
        <iframe
          src={placeholderVideoUrl}
          width="560"
          height="315"
          title="Lesson Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default LessonView;
