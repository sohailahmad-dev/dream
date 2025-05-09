import { useNavigate } from "react-router-dom";
import { curve, check } from "../assets";
import { collabContent } from "../constants";
import Button from "./Button";
import Section from "./Section";
import Heading from "./Heading";
import { BackgroundCircles } from "./design/Hero";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import { motion } from "framer-motion";

// Animation variants for load-in effect
const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 5px 15px rgba(156, 91, 255, 0.4)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const Mainpage = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <Section
      className="pt-[8rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <div className="relative container">
        <div className="absolute top-60 left-1/2 transform -translate-x-1/2 scale-60">
          <div className="transform scale-x-[-1]">
            <BackgroundCircles />
          </div>
        </div>
      </div>

      <div className="container lg:flex justify-between items-center relative z-1">
        <div className="max-w-[40rem]">
          <motion.h2
            className="h2 mb-4 md:mb-8"
            initial="hidden"
            animate="visible"
            variants={headingVariants}
          >
            How can{" "}
            <span className="inline-block relative font-bold">
              DREAM{" "}
              <motion.img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
            </span>{" "}
            help you achieve your academic pursuits?
          </motion.h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item, index) => (
              <motion.li
                className="mb-4 py-5 hover:bg-opacity-10 rounded-lg p-4 transition-all duration-300"
                key={item.id}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={listItemVariants}
                whileHover={{
                  x: 5,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="flex items-center group" // group class helps with child targeting
                  whileHover="hovering"
                >
                  <motion.img
                    src={check}
                    width={24}
                    height={24}
                    alt="check"
                    variants={{
                      hovering: {
                        rotate: 360,
                        transition: { duration: 0.2 },
                      },
                    }}
                  />
                  <motion.h6 className="body-2 ml-5 text-lg">
                    {item.title}
                  </motion.h6>
                </motion.div>

                {item.text && (
                  <motion.p
                    className="body-2 mt-3 text-n-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {item.text}
                  </motion.p>
                )}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          className="lg:ml-auto xl:w-[40rem] flex flex-col justify-center items-center container md:pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={headingVariants}
          >
            <Heading className="md:pb-0" tag="Ready to get started ?" />
          </motion.div>

          <div className="mt-6">
            <div>
              <motion.div
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Button
                  className="text-lg"
                  onClick={() => navigate("/features")}
                >
                  View Content
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      <Gradient />
    </Section>
  );
};

export default Mainpage;
