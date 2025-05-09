import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import { service2, service3, check } from "../assets";
import {
  brainwaveServices,
  brainwaveServicesIcons,
  brainwaveServices2,
} from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import { BackgroundCircles, BottomLine } from "./design/Hero";

const Services = () => {
  return (
    <Section id="edvoraAI">
      <div className="container">
        <Heading
          tag="What we're working on"
          title="'Generative AI' made for Students"
        />
        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[30rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={"src/assets/services/service-1(old).png"}
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Edvora AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Helping you unlock your true potential through the power of
                AI—[Coming Soon!].
              </p>
              <ul className="body-2">
                {brainwaveServices2.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Gradient />
        </div>
        {/*<div className="flex justify-center mt-12 md:mt-15 xl:mt-5">
          <Button className="text-lg" href="/roadmap">
            TRY NOW!
          </Button>
        </div> */}
      </div>
    </Section>
  );
};

export default Services;
