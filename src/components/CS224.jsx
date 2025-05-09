import React from "react";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
const Section = ({ title, data }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {data.length > 0 ? (
      <ul className="space-y-3">
        {data.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            <span>🔗</span>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {item.text}
              </a>
            ) : (
              <span className="text-gray-400">{item.text}</span>
            )}
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-400">No links in {title}</p>
    )}
  </div>
);

const CS224 = () => {
  return (
    <section id="cs224">
      <div className="text-white min-h-screen px-6 md:px-20 py-10">
        {/* Subject Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-6xl">
            THEORY OF AUTOMATA & FORMAL LANGUAGES
          </h1>
          <p className="mt-2 text-lg md:text-xl text-gray-400 max-w-2xl">
            Faculty of Computer Science - FCS
          </p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div>
            <Section
              title="Course Outline"
              data={[
                {
                  text: "CS224 - FALL - 2024",
                  link: "https://github.com/Harris-giki/Semester4_GIKI/blob/main/CS224/Course%20Outline%20%20CS224.ppt",
                },
              ]}
            />
            <Section title="Past Papers" data={[]} />
          </div>

          {/* Right Column */}
          <div>
            <Section
              title="Detailed Hand Written Notes"
              data={[
                {
                  text: "Transition Graphs",
                  link: "https://drive.google.com/file/d/1jyh66cb4r-KxZZOLYXlny4oAIcsn7fYA/view?usp=sharing",
                },
                {
                  text: "Klenee Theorem 1",
                  link: "https://drive.google.com/file/d/1mMmZboewrXjHdG5j9faaet4BzgizXsKa/view?usp=sharing",
                },
                {
                  text: "Klenee Theorem 2",
                  link: "https://drive.google.com/file/d/1_RlJOnYsI8hz7vH9YGYGwq_B-Y3k1rjF/view?usp=sharing",
                },
              ]}
            />
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <Section
            title="Assignments & Project"
            data={[
              {
                text: "Assignment no. 1",
                link: "https://github.com/Harris-giki/Semester4_GIKI/blob/main/CS224/Assignments/Assignment%201.pdf",
              },
              {
                text: "Assignment no. 2",
                link: "https://github.com/Harris-giki/Semester4_GIKI/blob/main/CS224/Assignments/Assignment%202.pdf",
              },
              {
                text: "Warmup Project Assignment",
                link: "https://github.com/Harris-giki/Semester4_GIKI/blob/main/CS224/Assignments/Warmup%20Project%20Assignment.pdf",
              },
              {
                text: "Project Assignment",
                link: "https://github.com/Harris-giki/Semester4_GIKI/blob/main/CS224/Assignments/Core%20Project.pdf",
              },
            ]}
          />
          <Section
            title="Books"
            data={[
              {
                text: "Introduction to Computer Theory By Daniel.I.A Cohen",
                link: "https://github.com/Harris-giki/Semester4_GIKI/blob/main/CS224/Introduction%20to%20Computer%20Theory%20By%20Daniel.I.A%20Cohen.pdf",
              },
            ]}
          />
          <Section
            title="Quizzes"
            data={[
              {
                text: "CS224 - QUIZ 1 - 2023",
                link: "https://drive.google.com/file/d/1Gf-3w3yLILtK_xJe7LXtEVy_M1KK0XFr/view?usp=sharing",
              },
              {
                text: "CS224 - QUIZ 2 - 2023",
                link: "https://drive.google.com/file/d/1tmSeHEFaO29-o-IrOZMR6JrDcyHlHK9e/view?usp=sharing",
              },
              {
                text: "CS224 - QUIZ 3 - 2023",
                link: "https://drive.google.com/file/d/1aQnsUQuEWb_tLLWwCn3eQ5BI4PcqvjxR/view?usp=sharing",
              },
              {
                text: "CS224 - QUIZ 4 - 2023",
                link: "https://drive.google.com/file/d/1aQnsUQuEWb_tLLWwCn3eQ5BI4PcqvjxR/view?usp=sharing",
              },
            ]}
          />
        </div>

        {/* Not Enough Footer */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-2">Not Enough?</h2>
          <p className="text-gray-400 max-w-xl">
            If you have material for this subject that isn't here, please email
            the document with its details to{" "}
            <strong>Dreamsite.GIKI@gmail.com</strong> to list it here.
            <br />
            Thank you!
          </p>
          <button
            className="mt-4 px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
            onClick={() =>
              window.open("https://www.linkedin.com/in/harris-giki/", "_blank")
            }
          >
            Connect @ LinkedIn
          </button>
        </div>
      </div>
      <Gradient />
    </section>
  );
};

export default CS224;
