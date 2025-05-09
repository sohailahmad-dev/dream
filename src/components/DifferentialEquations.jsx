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

const DifferentialEquations = () => {
  return (
    <section id="mt102">
      <div className="text-white min-h-screen px-6 md:px-20 py-10">
        {/* Subject Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-6xl">
            DIFFERENTIAL EQUS & LINEAR ALGEBRA
          </h1>
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
                  text: "MT 102/201 - FALL- 2022",
                  link: "https://drive.google.com/file/d/1ITTf_HYPonQu_BuKlohESUSC4cgcGN3E/view?usp=sharing",
                },
              ]}
            />
            <Section
              title="Past Papers"
              data={[
                {
                  text: "MT102 - MIDS - 2024 ",
                  link: "https://drive.google.com/file/d/1319oXNYylZsTYcSlh7YjligD-ysWTUOk/view?usp=sharing",
                },
                {
                  text: "MT102 - MIDS - 2023",
                  link: "https://drive.google.com/file/d/1zCWtuLRK486T1-fUpDxnBK5Gc6DS28YC/view?usp=sharing",
                },
                {
                  text: "MT102 - FINALS - 2020",
                  link: "https://drive.google.com/file/d/1Nyj_iGQ4OjriBjFNwIHNnBUHwokzzR_D/view?usp=sharing",
                },
                {
                  text: "MT102 - FINALS - 2024",
                  link: "https://drive.google.com/file/d/19LeCrl1Qirrqmh7bwLjuLjrI3kJh3e2d/view?usp=sharing",
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
                  text: "Chapter no. 2",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/MT102_Chapter-2.pdf",
                },
                {
                  text: "Chapter no. 3",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/MT102_Chapter-3.pdf",
                },
                {
                  text: "Chapter no. 4",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/MT102_Chapter-4.pdf",
                },
                {
                  text: "Chapter no. 6",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/MT102_Chapter-6.pdf",
                },
                {
                  text: "Chapter no. 7",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/MT102_Chapter-7.pdf",
                },
                {
                  text: "Chapter no. 8",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/MT102_Chapter-8.pdf",
                },
                {
                  text: "Chapter no. 8 Extended",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/MT102_Chapter-8-E.pdf",
                },
                {
                  text: "Chapter no. 13",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/MT102_Chapter-13-E.pdf",
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
                text: "A First Course in Differential Equations with Modeling Applications by Dennis G. Zill ",
                link: "https://drive.google.com/file/d/1I-kcY8c7QVGQhyRKGHKsft2qTjnzWIjm/view?usp=sharing",
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

export default DifferentialEquations;
