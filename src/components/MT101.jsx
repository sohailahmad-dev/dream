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

const MT101 = () => {
  return (
    <section id="MT101">
      <div className="text-white min-h-screen px-6 md:px-20 py-10">
        {/* Subject Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-6xl">CALCULUS I</h1>
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
                  text: "MT101 - SPRING - 2023",
                  link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/MT101/MT101%20Caluclus%20I%20Outline.pdf",
                },
              ]}
            />
            <Section
              title="Past Papers"
              data={[
                {
                  text: "MT101 - MIDS - 2022 ",
                  link: "https://drive.google.com/file/d/1TC3lrM7ZhNVfDIKBFDUxSniOvgJvWGzX/view?usp=sharing",
                },
                {
                  text: "MT101 - MIDS - 2023",
                  link: "https://drive.google.com/file/d/168mRcfz6kpKgn_rhGmnivgF0zlAlQGvk/view?usp=sharing",
                },
                {
                  text: "MT101 - FINALS - 2018",
                  link: "https://drive.google.com/file/d/1HvXyDQ8YRzOzUEUTxlly-Ra63UsGsDo4/view?usp=sharing",
                },
                {
                  text: "MT101 - FINALS - 2020",
                  link: "https://drive.google.com/file/d/1FmHDebMRFKJZKlpsFDFAzIfChd86W1TY/view?usp=sharing",
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
                  text: "Chapter 1-4 & 14",
                  link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/MT101/MT101_Chap%201-4%20%26%2014.pdf",
                },
                {
                  text: "Chapter 5,6 & 10",
                  link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/MT101/MT101_Chap%205-6%20%26%2010.pdf",
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
                text: "MT101 - QUIZ 1 - 2023",
                link: "https://drive.google.com/file/d/1oJgVDl4pnGSMB1bWCIlP-MA_dpPSySt5/view?usp=sharing",
              },
              {
                text: "MT101 - QUIZ 2 - 2023",
                link: "https://drive.google.com/file/d/1aQ2TEIR6gDa6co28OJil1bCF7g4sRuhk/view?usp=sharing",
              },
              {
                text: "MT101 - QUIZ 3 - 2023",
                link: "https://drive.google.com/file/d/1_hu-1pHM2YXJLrEmB5-zdQkCWVdmUJ9z/view?usp=sharing",
              },
              {
                text: "MT101 - QUIZ 4 - 2023",
                link: "https://drive.google.com/file/d/13lQSQBD5mOtj7-uOkC_GhXit-JHL1seZ/view?usp=sharing",
              },
              {
                text: "MT101 - QUIZ 5 - 2023",
                link: "https://drive.google.com/file/d/1fwLn5I31vSPHot4bgr7m7iJuKxKwtnzw/view?usp=sharing",
              },
            ]}
          />
          <Section
            title="Books"
            data={[
              {
                text: "George B. Thomas Jr., Maurice D. Weir, Joel R. Hass - Thomas' Calculus_ Early Transcendentals (13th Edition)-Pearson (2013)",
                link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/MT101/George%20B.%20Thomas%20Jr.%2C%20Maurice%20D.%20Weir%2C%20Joel%20R.%20Hass%20-%20Thomas'%20Calculus_%20Early%20Transcendentals%20(13th%20Edition)-Pearson%20(2013)%20(1).pdf",
              },
            ]}
          />
          <Section
            title="Others"
            data={[
              {
                text: "Formula Sheet",
                link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/MT101/MT101_Final%E2%80%99s%20Formula%20Sheet.pdf",
              },
              {
                text: "Important Practice Questions",
                link: "https://drive.google.com/file/d/1sLdtsdVTG8KmAxNMhxY505e2nmE77DXc/view?usp=sharing",
              },
              {
                text: "Series Convergence Test Summary",
                link: "https://drive.google.com/file/d/1wz4plcfImbmzvGmZUUq9bp9_tnlDQ2L1/view?usp=sharing",
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

export default MT101;
