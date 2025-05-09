import { Mail, Linkedin } from "lucide-react";
import { curve } from "../assets";
import React from "react";
import Section from "./Section";
import { socials } from "../constants";
export default function ContactMe() {
  return (
    <section id="contactme">
      <div className="flex flex-col items-center justify-center min-h-screen -mt-16">
        <h2 className="text-gray-400 text-2xl mb-2">Get in Touch</h2>

        <span className="inline-block relative text-3xl font-bold bg-clip-text">
          DREAM's FOUNDER
          <img
            src={curve}
            className="absolute top-full left-1/2 transform -translate-x-1/2 w-full xl:-mt-2"
            width={624}
            height={28}
            alt="Curve"
          />
        </span>

        <div className="flex flex-col sm:flex-row items-center mt-6 p-6 bg-gray-950 shadow-lg rounded-2xl space-y-6 sm:space-y-0 sm:space-x-8 w-full max-w-lg">
          {/* Email Section */}
          <div className="flex items-center space-x-3 transition-transform hover:scale-105">
            <Mail className="text-purple-400" size={28} />
            <a
              href="mailto:Harris.giki@gmail.com"
              className="text-lg font-medium hover:text-purple-500 transition-colors"
            >
              Harris.giki@gmail.com
            </a>
          </div>

          {/* LinkedIn Section */}
          <div className="flex items-center space-x-3 transition-transform hover:scale-105">
            <Linkedin className="text-purple-400" size={28} />
            <a
              href="https://www.linkedin.com/in/harris-giki/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:text-purple-500 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="container flex sm:justify-center -mt-10 justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </section>
  );
}
