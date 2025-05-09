import { useNavigate } from "react-router-dom";
import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BottomLine } from "./design/Hero";

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Mainpage");
  };

  return (
    <Section
      className="min-h-screen pt-[16rem] -mt-[10rem] flex flex-col"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover z-[-10]"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Welcome to &nbsp;DREAM&nbsp; Empowering Your Journey,{" "}
            <span className="inline-block relative">
              One Course at a Time{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            The Study App Every Student Needs.
          </p>
          <Button className="text-lg" onClick={handleNavigation} white>
            Get started
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
