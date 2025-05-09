import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import { curve } from "../assets";
import React from "react";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Features = () => {
  return (
    <Section className="overflow-x-hidden overflow-y-auto" id="pricing">
      <div className="container relative z-2">
        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full max-w-[950px]"
              width={950}
              height={400}
              alt="Stars"
            />
        </div>

        {/* Heading */}
        <div className="container">
          <Heading tag="The Past Paper App Every Student Needs." />
          <h1 className="h1 mb-6 flex justify-center">
            <span className="inline-block relative">
              DREAM{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2 max-w-[624px]"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
        </div>

        {/* Pricing Section */}
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        {/* Footer */}
        <footer className="w-full py-6 flex justify-center">
          <p className="caption text-n-4">
            © {new Date().getFullYear()}. All rights reserved.
          </p>
        </footer>
      </div>
     <Gradient />
    </Section>
  );
};

export default Features;
