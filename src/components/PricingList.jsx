import { pricing } from "../constants";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// Colors for each card glow based on index
const glowColors = [
  "rgba(90, 170, 255, 0.3)", // Blue glow (for first card)
  "rgba(255, 130, 50, 0.3)", // Orange glow (for second card)
  "rgba(156, 91, 255, 0.3)", // Purple glow (for third card)
];

// Button glow colors
const buttonGlowColors = [
  "rgba(90, 170, 255, 0.5)", // Blue button glow
  "rgba(255, 130, 50, 0.5)", // Orange button glow
  "rgba(156, 91, 255, 0.5)", // Purple button glow
];

const PricingList = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item, index) => (
        <motion.div
          key={item.id}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          whileHover={{
            y: -10,
            boxShadow: `0px 10px 25px ${glowColors[index % glowColors.length]}`,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          className="w-[24rem] h-[24rem] flex flex-col justify-between px-6 py-10 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto
                     [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3
                     cursor-pointer relative overflow-hidden"
        >
          {/* Glow effect elements - positioned absolutely */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 rounded-[2rem]"
            initial={{ opacity: 0 }}
            whileHover={{
              opacity: 0.15,
              transition: { duration: 0.3 },
            }}
            style={{
              background: `radial-gradient(circle at 50% 50%, ${
                glowColors[index % glowColors.length]
              }, transparent 70%)`,
            }}
          />

          {/* Content */}
          <motion.h4 className="h4 mb-4 text-center relative z-10">
            {item.title}
          </motion.h4>

          <motion.p className="body-2 min-h-[4rem] mb-3 text-center relative z-10">
            {item.description}
          </motion.p>

          <motion.div
            whileHover={{
              scale: 1.05,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
              },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <CustomButton
              text={item.price ? "Get started" : "CLICK HERE"}
              onClick={() => navigate(item.link.toLowerCase())}
              className="mb-6 relative z-10 overflow-hidden"
            />
          </motion.div>

          {/* Bottom accent light */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-10 opacity-0 pointer-events-none"
            style={{
              background: `linear-gradient(to top, ${
                glowColors[index % glowColors.length]
              }, transparent)`,
              borderBottomLeftRadius: "2rem",
              borderBottomRightRadius: "2rem",
            }}
            initial={{ opacity: 0 }}
            whileHover={{
              opacity: 0.5,
              height: 80,
              transition: { duration: 0.3 },
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default PricingList;
