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

const CS112 = () => {
  return (
    <section id="CS112">
      <div className="text-white min-h-screen px-6 md:px-20 py-10">
        {/* Subject Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-6xl">OBJECT ORIENTED PROGRAMMING</h1>
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
                  text: "CS112 - SPRING - 2024",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/CS112/Outline-CS112%20Object-Oriented%20Programming%20and%20Design.pdf",
                },
              ]}
            />
            <Section
              title="Past Papers"
              data={[
                {
                  text: "CS112 - THEORY - MIDS - 2022 ",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/CS112/CS-112_MIDS%202022.pdf",
                },
                {
                  text: "CS112 - THEORY - MIDS - 2023 ",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/CS112/CS-112_MIDS_2023.pdf",
                },
                {
                  text: "CS112 - THEORY - MIDS - 2024 ",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/CS112_Mids_Theory.pdf",
                },
                {
                  text: "CS112 - LAB - MIDS - 2024",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/CS112_Mids_Lab.pdf",
                },
                {
                  text: "CS112 - THEORY - FINALS - 2024",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/CS112_Finals_Theory.pdf",
                },
                {
                  text: "CS112 - LAB OEL - FINALS - 2024",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/CS112_OEL.pdf",
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
                  text: "Pre-MIDs",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/CS112_Pre_Mids.pdf",
                },
                {
                  text: "Post-MIDs",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/CS112_Post_Mids.pdf",
                },
              ]}
            />
            <Section
              title=" Assignments & Projects"
              data={[
                {
                  text: "Assignments",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/CS112_Assignment_Pack.pdf",
                },
                {
                  text: "Project - Problem Statement/Report",
                  link: "https://github.com/Harris-giki/VisualBasics_Cpp/blob/main/CS_PROJ.pdf",
                },
                {
                  text: "Project - Complete Code Repository",
                  link: "https://github.com/Harris-giki/VisualBasics_Cpp",
                },
              ]}
            />
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <Section
            title="Others"
            data={[
              {
                text: "Practice questions for Week 1",
                link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/CS112/Practice%20questions%20for%20Week%201.pdf",
              },
              {
                text: "Practice questions for Week 2 + 3",
                link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/CS112/Practice%20questions%20for%20Weeks%202%20%2B%203.pdf",
              },
              {
                text: "Practice questions for Week 4",
                link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/CS112/Practice%20questions%20for%20week%204.pdf",
              },
              {
                text: "Practice questions for Week 5",
                link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/CS112/Practice%20questions%20for%20week%205.pdf",
              },
              {
                text: "Practice questions for Week 6",
                link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/CS112/Practice%20questions%20for%20week%206.pdf",
              },
              {
                text: "Practice questions for Week 7",
                link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/CS112/Practice%20questions%20for%20week%207.pdf",
              },
            ]}
          />
          <Section
            title="Books"
            data={[
              {
                text: "Deitel P. C++ 20 for Programmers. An Objects-Natural Appr. 2022",
                link: "https://ptgmedia.pearsoncmg.com/images/9780136905691/samplepages/9780136905691_Sample.pdf",
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
            LinkedIn
          </button>
        </div>
      </div>
      <Gradient />
    </section>
  );
};

export default CS112;
