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

const Stats = () => {
  return (
    <section id="es111">
      <div className="text-white min-h-screen px-6 md:px-20 py-10">
        {/* Subject Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-6xl">PROBABILITY AND STATISTICS</h1>
          <p className="mt-2 text-lg md:text-xl text-gray-400 max-w-2xl">
            Faculty of Engineering Sciences - FES
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
                  text: "ES111 - SPRING - 2024",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/ES111/Course%20Outline%20-%20ES%20111%20Spring%202024.pdf",
                },
              ]}
            />
            <Section
              title="Past Papers"
              data={[
                {
                  text: "ES111 - MIDS - 2023 ",
                  link: "https://drive.google.com/file/d/1hIbMkVhLao2jcJWVzVq1l1AgtlKK4fjH/view?usp=sharing",
                },
                {
                  text: "ES111 - FINALS - 2022",
                  link: "https://drive.google.com/file/d/1HtnNTvQGXk3NuA8ZE9K7mJTh4MqlORJl/view?usp=sharing",
                },
                {
                  text: "ES111 - FINALS - 2024",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/ES111_Question_Paper_Finals.pdf",
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
                  text: "Pre-MID",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/ES111_Pre_Mids.pdf",
                },
                {
                  text: "Post-MID",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/ES111_Post_Mids.pdf",
                },
              ]}
            />
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <Section title="Assignments" data={[]} />
          <Section
            title="Books"
            data={[
              {
                text: "Jay L. Devore - Probability and Statistics for Engineering and the Sciences, 8th Edition  -Cengage Learning (2011)",
                link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/ES111/Jay%20L.%20Devore%20-%20Probability%20and%20Statistics%20for%20Engineering%20and%20the%20Sciences%2C%208th%20Edition%20%20-Cengage%20Learning%20(2011).pdf",
              },
              {
                text: "Jay L. Devore - Solutions Manual (2007)",
                link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/ES111/Jay%20L.%20Devore%20-%20Solutions%20Manual%20(2007).pdf",
              },
              {
                text: "Probability & Statistics For Engg & Scientistics By Walpole 9th Edition",
                link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/ES111/Probability%26Statistics-For-Engg%26Scientistics-By-Walpole-9thEd.pdf",
              },
              {
                text: "Probability & Statistics For Engg & Scientistics By Walpole 9thEd - Solution Manual",
                link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/ES111/SolutionManual-Probability%26Statistics-For-Engg%26Scientistics-By-Walpole-9thEd.pdf",
              },
            ]}
          />
          <Section title="Others" data={[]} />
        </div>

        {/* Not Enough Footer */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-2">Not Enough?</h2>
          <p className="text-gray-400 max-w-xl">
            If you have material for this subject that isn't here, please email
            the document with its details to{" "}
            <strong>Harris.giki@gmail.com</strong> to list it here.
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

export default Stats;
