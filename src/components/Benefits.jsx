import { benefits } from "../constants";
import Heading from "./Heading";
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

// Animation variants for card appearance on load
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

const Benefits = () => {
  return (
    <Section id="course-contents">
      <div className="container relative z-2">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mx-auto max-w-4xl relative pb-6">
            COURSES DASHBOARD
            <img
              src={curve}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10/12"
              style={{
                height: "25px",
                bottom: "-15px",
                transform: "translateX(-50%)",
              }}
              alt="Curve"
            />
          </h1>
        </div>

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item, index) => (
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
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] cursor-pointer"

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
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>

                {item.link && (
                  <a
                    href={
                      item.link.startsWith("http") ? item.link : `/${item.link}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center mt-auto group pointer-events-auto"
                  >
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider transition-colors group-hover:text-blue-400">
                      Explore More
                    </p>
                    <Arrow className="transition-transform group-hover:translate-x-1" />
                  </a>
                )}
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10"></div>
              </div>

              <ClipPath />
            </motion.div>
          ))}
        </div>
      </div>
      <Gradient />
    </Section>
  );
};

export default Benefits;
