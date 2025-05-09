import { Mail, Linkedin } from "lucide-react";
import { curve } from "../assets";
import React from "react";
import Section from "./Section";
import { socials } from "../constants";
const Comingsoon = () => {
  return (
    <section id="coming-soon">
      <div className="flex flex-col items-center justify-center min-h-screen -mt-16">
        <h2 className="text-gray-400 text-2xl mb-2">COMING SOON...</h2>
      </div>

      <div className="container flex sm:justify-between -mt-10 justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Comingsoon;
