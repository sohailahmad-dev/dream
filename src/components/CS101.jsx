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

const CS101 = () => {
  return (
    <section id="CS101">
      <div className="text-white min-h-screen px-6 md:px-20 py-10">
        {/* Subject Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-6xl">
            COMPUTING AND ARTIFICIAL INTELLIGENCE
          </h1>
          <p className="mt-2 text-lg md:text-xl text-gray-400 max-w-2xl">
            Faculty of Computer Sciences - FCS
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
                  text: "CS101 - SPRING - 2023",
                  link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/CS101/Books/Course%20Outline.pdf",
                },
              ]}
            />
            <Section
              title="Past Papers"
              data={[
                {
                  text: "CS101 - MIDS - 2014 ",
                  link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/CS101/Past%20Papers/Fall2014_CS101L_Mid_-_with_solution.pdf",
                },
                {
                  text: "CS101 - MIDS - 2016",
                  link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/CS101/Past%20Papers/CS101-Midterm-2016.pdf",
                },
                {
                  text: "CS101 - MIDS - 2023 ",
                  link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/CS101/Past%20Papers/CS101-%20Midterm-2023.docx",
                },
                {
                  text: "CS101 - FINALS - 2016",
                  link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/CS101/Past%20Papers/CS101_Final_Exam_2016.docx",
                },
              ]}
            />
          </div>

          {/* Right Column */}
          <div>
            <Section
              title="Detailed Hand Written Notes"
              data={[
                {
                  text: "Pre-MIDs Part 1",
                  link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/CS101/Notes/CS101_Pre%20Mids_1.pdf",
                },
                {
                  text: "Pre-MIDs Part 2",
                  link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/CS101/Notes/CS101_Pre%20Mids_2.pdf",
                },
                {
                  text: "Post-MIDs Part 1",
                  link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/CS101/Notes/CS101_Post%20Mid_1.pdf",
                },
                {
                  text: "Post-MIDs Part 2",
                  link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/CS101/Notes/CS101_Post%20Mids_2.pdf",
                },
              ]}
            />
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <Section
            title="QUIZES"
            data={[
              {
                text: " CS101 - QUIZ 1 - 2021",
                link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/CS101/Quizzes/Quiz%201.pdf",
              },
              {
                text: "CS101 - QUIZ 2 - 2021",
                link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/CS101/Quizzes/Quiz%202.pdf",
              },
              {
                text: "CS101 - QUIZ 3 - 2021",
                link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/CS101/Quizzes/Quiz%203.pdf",
              },
              {
                text: "CS101 - QUIZ 4 - 2021",
                link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/CS101/Quizzes/Quiz%204.pdf",
              },
              {
                text: "CS101 - QUIZ 5 - 2021",
                link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/CS101/Quizzes/Quiz%205%20-%20Solution.pdf",
              },
              {
                text: "CS101 - QUIZ 6 - 2021",
                link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/CS101/Quizzes/Quiz%206%20-%20Solution.pdf",
              },
              {
                text: "CS101 - QUIZ 7 - 2021",
                link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/CS101/Quizzes/Quiz%207%20-%20Solution.pdf",
              },
            ]}
          />
          <Section
            title="Books"
            data={[
              {
                text: "Starting Out With C++ 8th Edition - Gaddis",
                link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/CS101/Books/Starting%20Out%20With%20C%2B%2B%208th%20Edition%20-%20Gaddis.pdf",
              },
              {
                text: "New Perspectives on Computer Concepts 2016",
                link: "https://archive.org/details/newperspectivesc0000pars_a3b0/page/n5/mode/1up",
              },
              {
                text: "P. Deitel, H. Deitel - C++20 for Programmers (2021)",
                link: "https://dl.ebooksworld.ir/books/C.How.to.Program.9th.Edition.Paul.Deitel.Pearson.9780137398393.EBooksWorld.ir.pdf",
              },
            ]}
          />
          <Section
            title=" Assignments & Projects"
            data={[
              {
                text: "Assignments 1 - 6",
                link: "https://github.com/Harris-giki/Semester1_GIKI/tree/main/CS101/Assignments",
              },
              {
                text: "Project Hangman - Problem Statement",
                link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/CS101/Project/CS101%20Project%20F2023%202.pdf",
              },
              {
                text: "Project Hangman - Complete Code Repository",
                link: "https://github.com/Harris-giki/ConsoleGames_Cpp",
              },
            ]}
          />
          <Section
            title="Others"
            data={[
              {
                text: "Important Practice Coding Questions",
                link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/CS101/Past%20Papers/Important_Coding_Questions_CS101.pdf",
              },
              {
                text: "Important Practice Coding Questions 2",
                link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/CS101/Past%20Papers/Important_Coding_Questions_2_CS101.pdf",
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

export default CS101;
