import { benefits3 } from "../constants";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { Gradient } from "./design/Services";
import { motion } from "framer-motion";
import { curve } from "../assets";

// Animation variants for load-in effect
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const Comeby = () => {
  return (
    <Section id="instructors-tab">
      <div className="container relative z-2">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mx-auto max-w-4xl">
            Expert Insights: Navigate <br />
            your Courses through
            <span className="relative inline-block pb-6">
              Instructor Advice!
              <img
                src={curve}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full"
                style={{
                  height: "25px",
                  bottom: "-15px",
                }}
                alt="Curve"
              />
            </span>
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-10 mb-10 mt-20">
          {benefits3.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:w-[24rem] h-[33rem] flex flex-col cursor-pointer"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
            >
              <div className="relative z-2 flex flex-col h-full p-6 pointer-events-none">
                {/* Icon and Title at the Top */}
                <div className="flex flex-col items-center text-center w-full">
                  <img
                    src={item.iconUrl}
                    width={120}
                    height={120}
                    alt={item.title}
                    className="rounded-full mb-2"
                  />
                  <h5 className="h5 mb-2">{item.title}</h5>
                  <h5 className="h5 mb-2 text-sm">{item.qualification}</h5>
                  <h5 className="h5 mb-2 text-sm">{item.faculty}</h5>
                  <h5 className="h5 mb-2 text-sm">{item.coursestaught}</h5>
                  <div className="text-gray-300 max-w-xs text-sm flex-grow">
                    {item.text.split(",").map((sentence, index) => (
                      <p key={index} className="mb-1 mt-3">
                        {sentence.trim()}
                      </p>
                    ))}
                  </div>
                </div>

                {/* "CONNECT NOW" fixed at bottom-right */}
                {item.link && (
                  <div className="mt-auto flex justify-end">
                    <a
                      href={item.link}
                      target={
                        item.link.startsWith("mailto:") ? "_self" : "_blank"
                      }
                      rel={
                        item.link.startsWith("mailto:")
                          ? ""
                          : "noopener noreferrer"
                      }
                      className="flex items-center group pointer-events-auto"
                    >
                      <p className="font-code text-xs  font-bold text-n-1 uppercase tracking-wider transition-colors group-hover:text-blue-400">
                        CONNECT NOW
                      </p>
                      <Arrow className="transition-transform group-hover:translate-x-1 ml-1" />
                    </a>
                  </div>
                )}
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              ></div>

              <ClipPath />
            </motion.div>
          ))}
        </div>
      </div>
      <Gradient />
    </Section>
  );
};

export default Comeby;
