import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import { Gradient } from "./design/Services";
import { motion } from "framer-motion";

// Animation variants
const cardVariants = {
  initial: {
    boxShadow: "0px 0px 0px rgba(255, 255, 255, 0)",
  },
  hover: {
    y: -8,
    boxShadow: "0px 10px 25px rgba(156, 91, 255, 0.25)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const listItemVariants = {
  initial: { opacity: 0.9, x: 0 },
  hover: {
    opacity: 1,
    x: 5,
    transition: { duration: 0.2 },
  },
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
  initial: { scale: 1 },
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

const checkIconVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.2,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 10,
    },
  },
};

const Services = () => {
  return (
    <Section id="donations">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            title="Let your 'Small Contributions', make a 'Big Impact'"
            text="Join hands with CS @ Batch 33 to contribute in free mess meals for GIKIANS who deserve them the most!"
          />
        </motion.div>

        <div className="relative">
          <motion.div
            className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[30rem]"
            initial="initial"
            whileHover="hover"
            variants={cardVariants}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto"
              initial={{ opacity: 0.9 }}
              whileHover={{
                opacity: 1,
                scale: 1.02,
                transition: { duration: 0.5 },
              }}
            >
              <motion.img
                className="w-full h-full object-cover md:object-right"
                width={400}
                alt="ZARIYA"
                height={400}
                src={service1}
                initial={{ filter: "brightness(0.95)" }}
                whileHover={{
                  filter: "brightness(1.05)",
                  transition: { duration: 0.3 },
                }}
              />
            </motion.div>

            <motion.div
              className="relative z-1 max-w-[17rem] ml-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.h4
                className="h4 mb-4"
                whileHover={{
                  color: "#9C5BFF",
                  transition: { duration: 0.2 },
                }}
              >
                ZARIYA
              </motion.h4>

              <motion.p
                className="body-2 mb-[3rem] text-n-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Leave Behind Something to Shine✨.
              </motion.p>

              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                    custom={index}
                    initial="initial"
                    animate="visible"
                    whileHover="hover"
                    variants={listItemVariants}
                  >
                    <motion.div
                      variants={checkIconVariants}
                      whileHover={{
                        rotate: 360,
                        transition: { duration: 0.5 },
                      }}
                    >
                      <img width={24} height={24} src={check} />
                    </motion.div>
                    <motion.p
                      className="ml-4"
                      whileHover={{
                        color: "#e0e0e0",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {item}
                    </motion.p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
          <Gradient />
        </div>

        <div className="flex justify-center mt-12 md:mt-15 xl:mt-5">
          <motion.div
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            <Button
              className="text-lg"
              href="https://docs.google.com/forms/d/e/1FAIpQLSf6NDXKjLU7Sad4ZQNYxpeMod23zTAtDcA1-L5Rlf6SMnAIaw/viewform?usp=sharing"
            >
              Donate Now!
            </Button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
