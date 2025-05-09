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

const Physics101 = () => {
  return (
    <section id="ph101">
      <div className="text-white min-h-screen px-6 md:px-20 py-10">
        {/* Subject Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-6xl">APPLIED PHYSICS</h1>
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
                  text: "PH101 - FALL - 2024",
                  link: "https://drive.google.com/file/d/1TfkqmDHKym-HLUXthEu0XMKa2i82CR_s/view?usp=sharing",
                },
              ]}
            />
            <Section
              title="Past Papers"
              data={[
                {
                  text: "PH101 - MIDS - 2023 ",
                  link: "https://drive.google.com/file/d/1ps-RUb4fNG_-1C4n8ZHYjEZ8208Z7Q4y/view?usp=sharing",
                },
                {
                  text: "PH101 - MIDS - 2022",
                  link: "https://drive.google.com/file/d/1WppAng5A0e0n_T1FJ5KMK9fU50ckuAzo/view?usp=sharing",
                },
                {
                  text: "PH101 LAB - OEL - 2023",
                  link: "https://drive.google.com/file/d/1Q1IaOns-Hmb26uTOJJLSyryNvj7IxtIj/view?usp=sharing",
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
                  text: "Pre-MID Lab",
                  link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/PH101/PH-101_Lab_Pre-Mids.pdf",
                },
                {
                  text: "Pre-MID Theory",
                  link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/PH101/PH101_Pre-Mids.pdf",
                },
                {
                  text: "Post-MID Theory",
                  link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/PH101/PH101_Post%20Mids.pdf",
                },
              ]}
            />
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <Section
            title="Lab Tutorial Videos"
            data={[
              {
                text: "Pre-MID",
                link: "https://youtube.com/playlist?list=PLTxewzRdoEcgR_fEYqevcSaqeM5mv_ayh&si=tUc0I6tQ89aFohb0",
              },
              {
                text: "Post-MID",
                link: "https://youtube.com/playlist?list=PLtyY_rbv5syVS2BxhMOdonceydCwddYgh&si=sQ2XFPFTYvs9EkTr",
              },
            ]}
          />
          <Section
            title="Books"
            data={[
              {
                text: "R.Resnick, D.Halliday & K.S. Krane, “Physics Volume-1”, 5 th Edition, 2002",
                link: "https://studylib.net/doc/25764638/krane--resnick-and-halliday---physics--5th-ed.--vol.-1",
              },
              {
                text: "R.Resnick, D.Halliday & K.S. Krane, “Physics Volume-2”, 5 th Edition, 2002",
                link: "https://books.google.com.pk/books?hl=en&lr=&id=hAZ-DwAAQBAJ&oi=fnd&pg=PA567&dq=R.Resnick,+D.Halliday+%26+K.S.+Krane,+%E2%80%9CPhysics+Volume-1%E2%80%9D,+5+th+Edition,+2002&ots=VxuVBO4X3p&sig=JOdOsdEOQKwx9SK4OC4MwSEXvjs#v=onepage&q&f=false",
              },
              {
                text: "R.C. Hibbeler; Engineering mechanics, Statics, 14th Edition, Pearson Education",
                link: "https://ucfsarc.wordpress.com/wp-content/uploads/2022/09/book14th.pdf",
              },
            ]}
          />
          <Section
            title="Quizzes"
            data={[
              {
                text: "PH101 - QUIZ - 2024",
                link: "https://drive.google.com/file/d/1EOAc1Jh3TpFyvuQ_nJEUqBfnOLp2U0LN/view?usp=sharing",
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

export default Physics101;
