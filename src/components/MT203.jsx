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

const MT203 = () => {
  return (
    <section id="mt203">
      <div className="text-white min-h-screen px-6 md:px-20 py-10">
        {/* Subject Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-6xl">
            COMPLEX VARIABLES AND TRANSFORMATIONS
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
                  text: "MT 203 - FALL- 2024",
                  link: "https://drive.google.com/file/d/1iK1gV5ymOLqgkfQtjwE2sIDHrOwSZhFi/view?usp=sharing",
                },
              ]}
            />
            <Section
              title="Past Papers"
              data={[
                {
                  text: "MT203 - MIDS - 2024 ",
                  link: "https://drive.google.com/file/d/1OpBoNnRa4KgLwcBm8_HDBgp7lpRpzPag/view?usp=sharing",
                },
                {
                  text: "MT203 - FINALS - 2024",
                  link: "https://drive.google.com/file/d/1ZxOOCcsKXnr4bGN_oVxDK3siPktXyU_K/view?usp=sharing",
                },
              ]}
            />
          </div>

          {/* Right Column */}
          <div>
            <Section
              title="Books"
              data={[
                {
                  text: "Advanced Engineering Mathematics (10th edition) by Erwin Kreyszig, John Wiley",
                  link: "https://drive.google.com/file/d/1Ag477ITksSNMMr8yvV78ioFtNDVDQSCb/view?usp=sharing",
                },
              ]}
            />
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <Section title="Assignments" data={[]} />
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

export default MT203;
