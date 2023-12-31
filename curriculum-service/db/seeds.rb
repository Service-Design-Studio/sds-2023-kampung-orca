# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Topic.destroy_all
Lesson.destroy_all
Page.destroy_all
Exercise.destroy_all
User.destroy_all

User.create(user_id: "admin", lessons_access: ["00001"], exercises_access:[])
Topic.create!(topic_id: "00001", title: "Sample Topic 1")
Topic.create!(topic_id: "00002", title: "Sample Topic 2")
Topic.create!(topic_id: "00003", title: "Sample Topic 2")
Topic.create!(topic_id: "00004", title: "Sample Topic 4")
Topic.create!(topic_id: "00005", title: "Sample Topic 5")
Topic.create!(topic_id: "00006", title: "Sample Topic 6")
Topic.create!(topic_id: "00007", title: "Sample Topic 7")

# Topic 1 Seeding
Lesson.create!(lesson_id: "00001", topic_id: "00001", order_index: 0, title: "Introduction to Interfaith", message: "Explore the rich tapestry of diverse religious traditions and foster a deeper understanding of interfaith dialogue and cooperation. Discover the commonalities and unique aspects of various faiths, promoting unity and respect.")
Lesson.create!(lesson_id: "00002", topic_id: "00001", order_index: 1, title: "Interfaith Ethics and Values", message: "Delve into the ethical principles and moral values shared across different religious traditions. Learn how these teachings can guide individuals and communities towards compassionate action, social justice, and interfaith harmony.")
Lesson.create!(lesson_id: "00003", topic_id: "00001", order_index: 2, title: "Interfaith Dialogue Techniques", message: "Learn effective communication strategies and dialogue techniques for engaging in meaningful interfaith conversations. Develop skills to foster mutual understanding, empathy, and constructive discussions among people of different faiths.")
Lesson.create!(lesson_id: "00004", topic_id: "00001", order_index: 3, title: "Interfaith Festivals and Celebrations", message: "Discover the vibrant tapestry of interfaith festivals and celebrations from around the world. Explore the cultural expressions, rituals, and symbolism that promote interfaith unity, inclusivity, and shared joy.")
Lesson.create!(lesson_id: "00005", topic_id: "00001", order_index: 4, title: "Interfaith Peacebuilding and Reconciliation", message: "Examine the role of interfaith efforts in promoting peace, conflict resolution, and reconciliation. Learn about inspiring examples of interfaith initiatives fostering harmony in diverse and divided societies.")

exercise1 = ["Define interfaith dialogue and explain its significance as a means to promote religious tolerance and understanding."]
exercise2 = ["How can interfaith dialogue contribute to promoting religious tolerance and understanding within a community?"]
exercise3 = ["Discuss the various benefits and positive outcomes that result from engaging in interfaith dialogue. Explore how it can challenge stereotypes, dispel misconceptions, and encourage empathy among individuals from different faith backgrounds."]
exercise4 = ["Identify and analyze the challenges and obstacles that might arise during interfaith dialogue. Consider historical tensions, deeply ingrained biases, and potential misunderstandings, and discuss strategies to address and overcome these hurdles."]
exercise5 = ["Reflect on the potential long-term impact of sustained interfaith dialogue on a community's social fabric and harmony. How can consistent dialogue contribute to the prevention of conflicts and the building of resilient, inclusive societies?"]
Exercise.create!(exercise_id: "00001", topic_id: "00001", lesson_id: "00001", title: "Lesson 1 Exercises", qns: exercise1)
Exercise.create!(exercise_id: "00002", topic_id: "00001", lesson_id: "00002", title: "Lesson 2 Exercises", qns: exercise2)
Exercise.create!(exercise_id: "00003", topic_id: "00001", lesson_id: "00003", title: "Lesson 3 Exercises", qns: exercise3)
Exercise.create!(exercise_id: "00004", topic_id: "00001", lesson_id: "00004", title: "Lesson 4 Exercises", qns: exercise4)
Exercise.create!(exercise_id: "00005", topic_id: "00001", lesson_id: "00005", title: "Lesson 5 Exercises", qns: exercise5)
#ExerciseContent.create!(exercise_id: "00002", title: "help", qns: str.to_s)
#ExerciseList.create!(exercise_id: "00002", topic_id: "00001", lesson_id: "00001")

Page.create!(
  page_id: "00001",
  lesson_id: "00001",
  order_index: 0,
  video: "https://www.youtube.com/embed/QWTv8NbItt0",
  sections: [
    { content:["This is page 1 of lesson 1."]},
    { title: "The Importance of Interfaith Dialogue", content: ["In today's globalized world, where people from different cultural and religious backgrounds interact more than ever, fostering interfaith dialogue has become essential. The introduction to interfaith studies provides a solid foundation for understanding the importance of engaging in conversations across various faith traditions. By exploring the rich tapestry of diverse religious traditions, individuals can develop a deeper understanding of their own beliefs and those of others. Through dialogue and cooperation, interfaith interactions promote unity and respect, laying the groundwork for peaceful coexistence in our pluralistic society."]},
    { title: "Exploring Religious Traditions", content: ["Interfaith studies offer a unique opportunity to delve into the vast array of religious traditions that exist worldwide. By learning about different faiths, individuals can discover both the commonalities and unique aspects that shape each belief system. Through an exploration of rituals, practices, scriptures, and core principles, participants gain a broader perspective and develop empathy for the beliefs and values held by others. This knowledge creates a foundation for respectful dialogue and encourages the celebration of diversity."]},
    { title: "Building Bridges of Understanding", content: ["In an increasingly interconnected world, building bridges of understanding between religious communities is crucial. Interfaith dialogue provides a platform for individuals to engage in meaningful conversations, where they can share their experiences, challenges, and hopes. By listening to diverse perspectives, participants can challenge stereotypes, dismantle misconceptions, and build mutual respect. Through these interactions, trust and understanding can flourish, contributing to a more harmonious society where cooperation and collaboration thrive."]}
  ]
)

Page.create!(
  page_id: "00002",
  lesson_id: "00001",
  order_index: 1,
  video: "https://www.youtube.com/embed/_vtuEcwLgTU",
  sections: [
    { content:["This is page 2 of lesson 1."]},
    { title: "Common Themes and Shared Values", content: ["One of the fascinating aspects of interfaith studies is the discovery of common themes and shared values that transcend religious boundaries. Despite the differences in rituals and practices, many faith traditions emphasize similar principles such as compassion, justice, love, and the pursuit of peace. Exploring these commonalities allows participants to recognize the interconnectedness of humanity and fosters a sense of unity among diverse religious communities. By acknowledging shared values, interfaith dialogue becomes a powerful tool for collaboration and social change."]},
    { title: "Interfaith Cooperation in Action", content: ["Interfaith cooperation extends beyond theoretical discussions and encompasses practical initiatives that address societal challenges. By working together, individuals from different faith traditions can combine their strengths, resources, and knowledge to tackle issues such as poverty, environmental degradation, and conflict resolution. Through joint efforts, interfaith communities can make a significant impact, promoting social justice and advocating for the well-being of all people. Interfaith cooperation serves as a testament to the transformative power of understanding and collaboration across religious boundaries."]},
    { title: "Interfaith Dialogue: Nurturing Relationships", content: ["Interfaith dialogue is not just about exchanging ideas; it is about fostering meaningful relationships between individuals from different faith communities. By engaging in dialogue, participants build connections, develop friendships, and cultivate a sense of belonging within the interfaith context. These relationships create opportunities for interfaith celebrations, shared meals, and joint projects, further strengthening the bonds of unity and respect. Interfaith dialogue thus becomes a source of personal growth, enriching individuals' lives and expanding their worldview."]}
  ]
)

Page.create!(
  page_id: "00003",
  lesson_id: "00001",
  order_index: 2,
  video: "https://www.youtube.com/embed/P_uKbiHBUHo",
  sections: [
    { content:["This is page 3 of lesson 1."]},
    { title: "Overcoming Challenges in Interfaith Dialogue", content: ["While interfaith dialogue offers immense potential for harmony and understanding, it is not without its challenges. Misunderstandings, preconceptions, and deep-seated biases can hinder effective communication and create barriers between individuals of different faiths. Recognizing these challenges is the first step toward overcoming them. Through active listening, empathy, and a willingness to engage in self-reflection, participants can transcend these obstacles and foster an environment of trust and openness. By acknowledging and addressing these challenges, interfaith dialogue becomes a transformative process that bridges divides and promotes reconciliation."]},
    { title: "The Role of Education in Interfaith Dialogue", content: ["Education plays a vital role in nurturing interfaith dialogue and cooperation. By incorporating interfaith studies into academic curricula, educational institutions provide students with the opportunity to develop a comprehensive understanding of religious diversity. Through exposure to different faith traditions, students learn to critically analyze and appreciate various belief systems, fostering a culture of tolerance and respect. Additionally, educational initiatives can promote interfaith dialogue through workshops, seminars, and community engagement, empowering individuals to become advocates for interreligious harmony."]},
    { title: "Interfaith Dialogue: A Path to Global Peace", content: ["Interfaith dialogue holds the promise of contributing to global peace by addressing the root causes of conflict and division. By fostering understanding, empathy, and mutual respect, individuals from diverse religious backgrounds can transcend religious differences and work together toward shared goals. The principles of interfaith dialogue, such as inclusivity, justice, and cooperation, provide a framework for resolving conflicts and promoting social harmony. Through interfaith dialogue, we can envision a future where people of all faiths collaborate to create a more peaceful and just world for all."]}
  ]
)

Page.create!(
  page_id: "00004",
  lesson_id: "00002",
  order_index: 0,
  video: "https://www.youtube.com/embed/P_uKbiHBUHo",
  sections: [
    { content: ["This is page 1 of lesson 2."]},
    { title: "Overcoming Challenges in Interfaith Dialogue", content: ["While interfaith dialogue offers immense potential for harmony and understanding, it is not without its challenges. Misunderstandings, preconceptions, and deep-seated biases can hinder effective communication and create barriers between individuals of different faiths. Recognizing these challenges is the first step toward overcoming them. Through active listening, empathy, and a willingness to engage in self-reflection, participants can transcend these obstacles and foster an environment of trust and openness. By acknowledging and addressing these challenges, interfaith dialogue becomes a transformative process that bridges divides and promotes reconciliation."]},
    { title: "The Role of Education in Interfaith Dialogue", content: ["Education plays a vital role in nurturing interfaith dialogue and cooperation. By incorporating interfaith studies into academic curricula, educational institutions provide students with the opportunity to develop a comprehensive understanding of religious diversity. Through exposure to different faith traditions, students learn to critically analyze and appreciate various belief systems, fostering a culture of tolerance and respect. Additionally, educational initiatives can promote interfaith dialogue through workshops, seminars, and community engagement, empowering individuals to become advocates for interreligious harmony."]},
    { title: "Interfaith Dialogue: A Path to Global Peace", content: ["Interfaith dialogue holds the promise of contributing to global peace by addressing the root causes of conflict and division. By fostering understanding, empathy, and mutual respect, individuals from diverse religious backgrounds can transcend religious differences and work together toward shared goals. The principles of interfaith dialogue, such as inclusivity, justice, and cooperation, provide a framework for resolving conflicts and promoting social harmony. Through interfaith dialogue, we can envision a future where people of all faiths collaborate to create a more peaceful and just world for all."]}
  ]
)

Page.create!(
  page_id: "00005",
  lesson_id: "00003",
  order_index: 0,
  video: "https://www.youtube.com/embed/P_uKbiHBUHo",
  sections: [
    { content: ["This is page 1 of lesson 3."]},
    { title: "Overcoming Challenges in Interfaith Dialogue", content: ["While interfaith dialogue offers immense potential for harmony and understanding, it is not without its challenges. Misunderstandings, preconceptions, and deep-seated biases can hinder effective communication and create barriers between individuals of different faiths. Recognizing these challenges is the first step toward overcoming them. Through active listening, empathy, and a willingness to engage in self-reflection, participants can transcend these obstacles and foster an environment of trust and openness. By acknowledging and addressing these challenges, interfaith dialogue becomes a transformative process that bridges divides and promotes reconciliation."]},
    { title: "The Role of Education in Interfaith Dialogue", content: ["Education plays a vital role in nurturing interfaith dialogue and cooperation. By incorporating interfaith studies into academic curricula, educational institutions provide students with the opportunity to develop a comprehensive understanding of religious diversity. Through exposure to different faith traditions, students learn to critically analyze and appreciate various belief systems, fostering a culture of tolerance and respect. Additionally, educational initiatives can promote interfaith dialogue through workshops, seminars, and community engagement, empowering individuals to become advocates for interreligious harmony."]},
    { title: "Interfaith Dialogue: A Path to Global Peace", content: ["Interfaith dialogue holds the promise of contributing to global peace by addressing the root causes of conflict and division. By fostering understanding, empathy, and mutual respect, individuals from diverse religious backgrounds can transcend religious differences and work together toward shared goals. The principles of interfaith dialogue, such as inclusivity, justice, and cooperation, provide a framework for resolving conflicts and promoting social harmony. Through interfaith dialogue, we can envision a future where people of all faiths collaborate to create a more peaceful and just world for all."]}
  ]
)

Page.create!(
  page_id: "00006",
  lesson_id: "00004",
  order_index: 0,
  video: "https://www.youtube.com/embed/P_uKbiHBUHo",
  sections: [
    { content: ["This is page 1 of lesson 4."]},
    { title: "Overcoming Challenges in Interfaith Dialogue", content: ["While interfaith dialogue offers immense potential for harmony and understanding, it is not without its challenges. Misunderstandings, preconceptions, and deep-seated biases can hinder effective communication and create barriers between individuals of different faiths. Recognizing these challenges is the first step toward overcoming them. Through active listening, empathy, and a willingness to engage in self-reflection, participants can transcend these obstacles and foster an environment of trust and openness. By acknowledging and addressing these challenges, interfaith dialogue becomes a transformative process that bridges divides and promotes reconciliation."]},
    { title: "The Role of Education in Interfaith Dialogue", content: ["Education plays a vital role in nurturing interfaith dialogue and cooperation. By incorporating interfaith studies into academic curricula, educational institutions provide students with the opportunity to develop a comprehensive understanding of religious diversity. Through exposure to different faith traditions, students learn to critically analyze and appreciate various belief systems, fostering a culture of tolerance and respect. Additionally, educational initiatives can promote interfaith dialogue through workshops, seminars, and community engagement, empowering individuals to become advocates for interreligious harmony."]},
    { title: "Interfaith Dialogue: A Path to Global Peace", content: ["Interfaith dialogue holds the promise of contributing to global peace by addressing the root causes of conflict and division. By fostering understanding, empathy, and mutual respect, individuals from diverse religious backgrounds can transcend religious differences and work together toward shared goals. The principles of interfaith dialogue, such as inclusivity, justice, and cooperation, provide a framework for resolving conflicts and promoting social harmony. Through interfaith dialogue, we can envision a future where people of all faiths collaborate to create a more peaceful and just world for all."]}
  ]
)

Page.create!(
  page_id: "00007",
  lesson_id: "00005",
  order_index: 0,
  video: "https://www.youtube.com/embed/P_uKbiHBUHo",
  sections: [
    { content: ["This is page 1 of lesson 5."]},
    { title: "Overcoming", content: ["While interfaith dialogue offers immense potential for harmony and understanding, it is not without its challenges. Misunderstandings, preconceptions, and deep-seated biases can hinder effective communication and create barriers between individuals of different faiths. Recognizing these challenges is the first step toward overcoming them. Through active listening, empathy, and a willingness to engage in self-reflection, participants can transcend these obstacles and foster an environment of trust and openness. By acknowledging and addressing these challenges, interfaith dialogue becomes a transformative process that bridges divides and promotes reconciliation."]},
    { title: "The Role of Education in Interfaith Dialogue", content: ["Education plays a vital role in nurturing interfaith dialogue and cooperation. By incorporating interfaith studies into academic curricula, educational institutions provide students with the opportunity to develop a comprehensive understanding of religious diversity. Through exposure to different faith traditions, students learn to critically analyze and appreciate various belief systems, fostering a culture of tolerance and respect. Additionally, educational initiatives can promote interfaith dialogue through workshops, seminars, and community engagement, empowering individuals to become advocates for interreligious harmony."]},
    { title: "Interfaith Dialogue: A Path to Global Peace", content: ["Interfaith dialogue holds the promise of contributing to global peace by addressing the root causes of conflict and division. By fostering understanding, empathy, and mutual respect, individuals from diverse religious backgrounds can transcend religious differences and work together toward shared goals. The principles of interfaith dialogue, such as inclusivity, justice, and cooperation, provide a framework for resolving conflicts and promoting social harmony. Through interfaith dialogue, we can envision a future where people of all faiths collaborate to create a more peaceful and just world for all."]}
  ]
)
p "Created #{Page.count} pages"


# Topic 2 Seeding
# Lesson.create!(lesson_id: "00005", topic_id: "00001", order_index: 4, title: "Interfaith Peacebuilding and Reconciliation", message: "Examine the role of interfaith efforts in promoting peace, conflict resolution, and reconciliation. Learn about inspiring examples of interfaith initiatives fostering harmony in diverse and divided societies.")
# Lesson title for history of religions
Lesson.create!(lesson_id: "00006", topic_id: "00002", order_index: 0, title: "Introduction to History of Religions", message: "Explore the history of the world’s major religions and their contributions to human civilization. Learn about the origins of Hinduism, Buddhism, Judaism, Christianity, and Islam.")
Lesson.create!(lesson_id: "00007", topic_id: "00002", order_index: 1, title: "Hinduism", message: "Learn about the origins and development of Hinduism, the world’s oldest religion. Explore the Hindu concept of God and the major Hindu scriptures.")

Page.create!(
  page_id: "00008",
  lesson_id: "00006",
  order_index: 0,
  video: "https://www.youtube.com/embed/P_uKbiHBUHo",
  sections: [
    { content: ["This is page 1 of lesson 6."]},
    { title: "About Histories of Religion", content: ["The study of the history of religions is a field of academic inquiry that examines the origins and development of the world’s major religions. Scholars of religion analyze the historical context in which religious traditions emerged, as well as their impact on human civilization. By studying the history of religions, we can gain a deeper understanding of the beliefs, practices, and values that shape the lives of billions of people around the world."]},
    { title: "Why Study the History of Religions?", content: ["The study of the history of religions is a field of academic inquiry that examines the origins and development of the world’s major religions. Scholars of religion analyze the historical context in which religious traditions emerged, as well as their impact on human civilization. By studying the history of religions, we can gain a deeper understanding of the beliefs, practices, and values that shape the lives of billions of people around the world."]},
]
)

Page.create!(
  page_id: "00009",
  lesson_id: "00007",
  order_index: 0,
  video: "https://www.youtube.com/embed/P_uKbiHBUHo",
  sections: [
    { content: ["This is page 1 of lesson 7."]},
    { title: "About Hinduism", content: ["Hinduism is the world’s oldest religion, with roots dating back to the Indus Valley civilization of the third millennium BCE. It is the third largest religion in the world, with over one billion adherents. Hinduism is a diverse tradition, encompassing a wide range of beliefs and practices. Hindus believe in one supreme God, Brahman, who manifests in many forms. The Vedas, the Upanishads, and the Bhagavad Gita are the most important Hindu scriptures. Hindus believe in reincarnation, the cycle of birth and death, and the law of karma, which states that one’s actions in this life determine one’s destiny in the next."]},
    { title: "Hindu Beliefs", content: ["Hinduism is the world’s oldest religion, with roots dating back to the Indus Valley civilization of the third millennium BCE. It is the third largest religion in the world, with over one billion adherents. Hinduism is a diverse tradition, encompassing a wide range of beliefs and practices. Hindus believe in one supreme God, Brahman, who manifests in many forms. The Vedas, the Upanishads, and the Bhagavad Gita are the most important Hindu scriptures. Hindus believe in reincarnation, the cycle of birth and death, and the law of karma, which states that one’s actions in this life determine one’s destiny in the next."]},
]
)


exercise6 = ["Why is it important to know about the history of religions?"]
exercise7 = ["What are the major Hindu scriptures?"]

Exercise.create!(exercise_id: "00006", topic_id: "00002", lesson_id: "00006", title: "The Importance of Histories of Religions", qns: exercise6)
Exercise.create!(exercise_id: "00007", topic_id: "00002", lesson_id: "00007", title: "Hinduism", qns: exercise7)

## Topic 3 Seeding: Do the same as topic 2 but for topic 3: Ethics and morals
Lesson.create!(lesson_id: "00008", topic_id: "00003", order_index: 0, title: "Introduction to Ethics and Morals", message: "Learn about why ehics and morals are important in interfaith dialogues.")
Lesson.create!(lesson_id: "00009", topic_id: "00003", order_index: 1, title: "More about Ethics and Morals", message: "Learn more about ethics and morals during interfaith dialogues.")

Page.create!(
  page_id: "00010",
  lesson_id: "00008",
  order_index: 0,
  video: "https://www.youtube.com/embed/P_uKbiHBUHo",
  sections: [
    { content: ["This is page 1 of lesson 8."]},
    { title: "About Ethics and Morals", content: ["The study of the history of religions is a field of academic inquiry that examines the origins and development of the world’s major religions. Scholars of religion analyze the historical context in which religious traditions emerged, as well as their impact on human civilization. By studying the history of religions, we can gain a deeper understanding of the beliefs, practices, and values that shape the lives of billions of people around the world."]},
    { title: "Are Ethics and Morals Important?", content: ["The study of the history of religions is a field of academic inquiry that examines the origins and development of the world’s major religions. Scholars of religion analyze the historical context in which religious traditions emerged, as well as their impact on human civilization. By studying the history of religions, we can gain a deeper understanding of the beliefs, practices, and values that shape the lives of billions of people around the world."]},
]
)

Page.create!(
  page_id: "00011",
  lesson_id: "00009",
  order_index: 0,
  video: "https://www.youtube.com/embed/P_uKbiHBUHo",
  sections: [
    { content: ["This is page 1 of lesson 9."]},
    { title: "About Ethics and Morals", content: ["The study of the history of religions is a field of academic inquiry that examines the origins and development of the world’s major religions. Scholars of religion analyze the historical context in which religious traditions emerged, as well as their impact on human civilization. By studying the history of religions, we can gain a deeper understanding of the beliefs, practices, and values that shape the lives of billions of people around the world."]},
    { title: "Why Study Ethics and Morals?", content: ["The study of the history of religions is a field of academic inquiry that examines the origins and development of the world’s major religions. Scholars of religion analyze the historical context in which religious traditions emerged, as well as their impact on human civilization. By studying the history of religions, we can gain a deeper understanding of the beliefs, practices, and values that shape the lives of billions of people around the world."]},
]
)

exercise8 = ["Why is it important to know about ethics and morals?"]
exercise9 = ["Do you need to study ethics and morals?"]

Exercise.create!(exercise_id: "00008", topic_id: "00003", lesson_id: "00008", title: "The Importance of Ethics and Morals", qns: exercise8)
Exercise.create!(exercise_id: "00009", topic_id: "00003", lesson_id: "00009", title: "More About Ethics and Morals", qns: exercise9)






