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

const MaterialsFirstSem = () => {
  return (
    <section id="mm101">
      <div className="text-white min-h-screen px-6 md:px-20 py-10">
        {/* Subject Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-6xl">MATERIALS AND NANOTECHNOLOGY</h1>
          <p className="mt-2 text-lg md:text-xl text-gray-400 max-w-2xl">
            Faculty of Materials and Chemical Engineering - FMCE
          </p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div>
            <Section title="Course Outline" data={[]} />
            <Section
              title="Past Papers"
              data={[
                {
                  text: "MM101/102 - FINALS - 2019 ",
                  link: "https://drive.google.com/file/d/1sT24jM6_rPIE-jO_UasiV7o68k0Ablfn/view?usp=sharing",
                },
                {
                  text: "MM101/102 - MIDS - TERM UNKNOWN",
                  link: "https://drive.google.com/file/d/1ic3nEWXdNr2b8OakDeSG8acPOuGK1w8s/view?usp=sharing",
                },
                {
                  text: "MM101/102 - MIDS - 2023",
                  link: "https://drive.google.com/file/d/1ilYmWLWVj6sHzHZ10I9d6FDf6FuC-6TU/view?usp=sharing",
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
                  text: "Chapter no. 1",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/MM101_Chapter-1.pdf",
                },
                {
                  text: "Chapter no. 2",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/MM101_Chapter-2.pdf",
                },
                {
                  text: "Chapter no. 3",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/MM101_Chapter-3.pdf",
                },
                {
                  text: "Chapter no. 4",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/MM101_Chapter-4.pdf",
                },
                {
                  text: "Chapter no. 5",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/MM101_Chapter-5.pdf",
                },
                {
                  text: "Chapter no. 6",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/MM101_Chapter-6.pdf",
                },
                {
                  text: "Chapter no. 12",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/MM101_Chapter-12.pdf",
                },
                {
                  text: "Chapter no. 16",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/MM101_Chapter-16.pdf",
                },
                {
                  text: "Chapter no. 18",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/MM101_Chapter-18.pdf",
                },
                {
                  text: "Chapter no. 19",
                  link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/MM101_Chapter-19.pdf",
                },
              ]}
            />
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <Section title="Books" data={[]} />
          <Section
            title="MM101/102 Lab Preparation Notes"
            data={[
              {
                text: "All MM101/102 Lab Experiments",
                link: "https://github.com/Harris-giki/Semester2_GIKI/blob/main/MM101-L_All-Experiments.pdf",
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

export default MaterialsFirstSem;
