import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState, useEffect } from "react";
import logo from "../assets/Dream_Logo.png"; // Adjust the path as necessar


const Header = () => {
  const { hash } = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenNavigation(false);
        enablePageScroll();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
    >
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Logo Section - Modified to include both logo and text */}
        <a className="flex items-center w-[12rem] xl:mr-8" href="/">
          <img
            src={logo}
            width={30}
            height={30}
            alt="DREAM Logo"
            className="w-15 h-15" // Fixed size for the logo
          />
          <span className="ml-2 font-bold text-white text-xl">DREAM</span>
        </a>

        {/* Main Navigation Container */}
        <nav className="flex-1">
          {/* Desktop Navigation */}
          <div className="flex items-center justify-end space-x-10 max-lg:hidden">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`relative font-code text-lg uppercase transition-colors hover:text-color-1
                  ${item.url === hash ? "text-n-1" : "text-n-1/50"}`}
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div
            className={`${openNavigation ? "flex" : "hidden"
              } lg:hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className="block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8"
                >
                  {item.title}
                </a>
              ))}
            </div>

            <HamburgerMenu />
          </div>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <Button className="lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
