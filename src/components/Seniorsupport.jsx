import { benefits2 } from "../constants";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import { curve } from "../assets";
import { motion } from "framer-motion";

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

// Glow colors for each card - increased opacity for visibility
const glowColors = [
  "rgba(90, 170, 255, 0.7)", // Blue
  "rgba(255, 130, 50, 0.7)", // Orange
  "rgba(156, 91, 255, 0.7)", // Purple
];

const Seniorsupport = () => {
  return (
    <Section id="senior-support">
      <div className="container relative z-2">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mx-auto max-w-4xl">
            Inspiring Minds of GIKI <br />
            <span className="relative inline-block pb-6">
              Connect, Learn and Grow!
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
          {benefits2.map((item, index) => (
            // Main container with shadow handling
            <motion.div
              key={item.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:w-[24rem] h-[26rem] cursor-pointer overflow-hidden rounded-[2rem]"
              style={{
                // backgroundImage: `url(${item.backgroundUrl})`,
                backgroundImage: `url(${index % 3 === 0
                  ? "/img/card-1.svg"
                  : index % 3 === 1
                    ? "/img/card-2.svg"
                    : "/img/card-3.svg"
                  })`,
              }}
            >
              {/* Main glow effect - positioned outside the clipped area */}
              <motion.div
                className="absolute -inset-4 z-0 rounded-[2.5rem]"
                initial={{ boxShadow: "none" }}
                whileHover={{
                  boxShadow: `0px 0px 35px 8px ${glowColors[index % glowColors.length]
                    }`,
                  transition: { duration: 0.3 },
                }}
              />

              {/* Radial glow effect inside clipped area */}
              <motion.div
                className="absolute inset-0 pointer-events-none z-1 rounded-[2rem]"
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 0.4,
                  transition: { duration: 0.3 },
                }}
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${glowColors[index % glowColors.length]
                    }, transparent 70%)`,
                  clipPath: "url(#benefits)",
                }}
              />

              {/* Bottom accent light inside clipped area */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-10 opacity-0 pointer-events-none z-1"
                style={{
                  background: `linear-gradient(to top, ${glowColors[index % glowColors.length]
                    }, transparent)`,
                  clipPath: "url(#benefits)",
                }}
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 0.8,
                  height: 100,
                  transition: { duration: 0.3 },
                }}
              />

              <div className="relative z-2 flex flex-col h-full p-[2.4rem] pointer-events-none">
                <div className="flex flex-col items-center text-center w-full">
                  <img
                    src={item.iconUrl}
                    width={120}
                    height={120}
                    alt={item.title}
                    className="rounded-full mb-2"
                  />
                  <h5 className="h5 mb-3">{item.title}</h5>
                  <div className="text-gray-300 max-w-xs">
                    {item.text.split(",").map((point, index) => (
                      <p key={index} className="mt-1">
                        {point.trim()}
                      </p>
                    ))}
                  </div>
                </div>

                {item.link && (
                  <div className="mt-auto flex justify-end">
                    <a
                      href={
                        item.link.startsWith("http")
                          ? item.link
                          : `/${item.link}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center group pointer-events-auto"
                    >
                      <p className="font-code text-xs font-bold text-n-1 uppercase tracking-wider transition-colors group-hover:text-blue-400">
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

export default Seniorsupport;
