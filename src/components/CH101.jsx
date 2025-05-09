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

const CH101 = () => {
  return (
    <section id="ch101">
      <div className="text-white min-h-screen px-6 md:px-20 py-10">
        {/* Subject Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-6xl">
            APPLIED CHEMISTRY AND ENVIRONMENT
          </h1>
          <p className="mt-2 text-lg md:text-xl text-gray-400 max-w-2xl">
            Faculty of Materials and Chemical Engineering - FMCE
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
                  text: "CH101 - SPRING - 2024 ",
                  link: "https://docs.google.com/presentation/d/1gkI10mw0SboY_57C_UzhdU8U-OTwoE3P/edit?usp=sharing&ouid=117116849227177849848&rtpof=true&sd=true",
                },
              ]}
            />
            <Section
              title="Past Papers"
              data={[
                {
                  text: "CH101 - FINALS - 2019 ",
                  link: "https://drive.google.com/file/d/17hcK8km6SMigveAZuVW4Jfv68GfLr5WZ/view?usp=sharing",
                },
                {
                  text: "CH101 - FINALS - 2023 ",
                  link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/CH101/CH101_Finals.pdf",
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
                  text: "Pre-MID ",
                  link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/CH101/CH101_Pre_Mids.pdf",
                },
                {
                  text: "Post-MID ",
                  link: "https://github.com/Harris-giki/Semester1_GIKI/blob/main/CH101/CH101_Post_Mids.pdf",
                },
              ]}
            />
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <Section
            title="Books"
            data={[
              {
                text: "Chemistry 10e By Kenneth W. Whitten, Raymond E. Davis, Larry Peck, George G. Stanley",
                link: "https://archive.org/details/chemistry-10e-by-kenneth-w.-whitten-raymond-e.-davis-larry-peck-george-g.-stanley",
              },
              {
                text: "Chemistry: The Central Science (MasteringChemistry) 14th Edition",
                link: "https://ghostwriter144.neocities.org/img/scienceChemistryTheCentralScience12th.pdf",
              },
              {
                text: "Chemistry for Engineering Students Lawrence S. Brown 2nd Edition",
                link: "https://industri.fatek.unpatti.ac.id/wp-content/uploads/2019/03/044-Chemistry-for-Engineering-Students-Larry-Brown-Tom-Holme-Edisi-2-2010.pdf",
              },
              {
                text: "Environmental chemistry | Stanley E. Manahan - 9th ed. ",
                link: "https://tech.chemistrydocs.com/Books/Environmental/Environmental-Chemistry-by-Stanley-E.-Manahan.pdf",
              },
              {
                text: "Climate Change and a Sustainable Earth John J. Qu and Raymond P. Motha 2022. ",
                link: "https://drive.google.com/file/d/1mt7C-7tHakIaAUIZnSytIHRz833BR4HF/view?usp=sharing",
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

export default CH101;
