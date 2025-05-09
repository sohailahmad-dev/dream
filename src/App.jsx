import { Routes, Route, useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import Mainpage from "./components/Mainpage.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Features from "./components/Features.jsx";
import ContactMe from "./components/ContactMe";
import { Gradient2 } from "./components/design/Services";
import Seniorsupport from "./components/Seniorsupport.jsx";
import Comeby from "./components/Comeby";
import MaterialsFirstSem from "./components/MaterialsFirstSem";
import DifferentialEquations from "./components/DifferentialEquations";
import Stats from "./components/Stats";
import Physics101 from "./components/Physics101";
import MT101 from "./components/MT101.jsx";
import CS224 from "./components/CS224.jsx";
import MT203 from "./components/MT203.jsx";
import CH101 from "./components/CH101.jsx";
import CS101 from "./components/CS101.jsx";
import CS112 from "./components/CS112.jsx";
function App() {
  const location = useLocation(); // Get the current route

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route
            path="/mainpage"
            element={
              <>
                <Header />
                <Mainpage /> {/*view contents*/}
                <Services /> {/*donations*/}
                {/*<Roadmap /> Edvora AI*/}
                <ContactMe />
              </>
            }
          />
          <Route
            path="/features"
            element={
              <>
                <Header />
                <Features />
                <Gradient2 />
              </>
            }
          />
          <Route
            path="/course-contents"
            element={
              <>
                <Header />
                <Benefits />
                <Footer />
              </>
            }
          />
          <Route
            path="/instructors-tab"
            element={
              <>
                <Header />
                <Comeby />
                <Footer />
              </>
            }
          />
          <Route
            path="/senior-support"
            element={
              <>
                <Header />
                <Seniorsupport />
                <Footer />
              </>
            }
          />
          <Route
            path="/mm101"
            element={
              <>
                <Header />
                <MaterialsFirstSem />
                <Footer />
              </>
            }
          />
          <Route
            path="/mt102"
            element={
              <>
                <Header />
                <DifferentialEquations />
                <Footer />
              </>
            }
          />
          <Route
            path="/es111"
            element={
              <>
                <Header />
                <Stats />
                <Footer />
              </>
            }
          />
          <Route
            path="/ph101"
            element={
              <>
                <Header />
                <Physics101 />
                <Footer />
              </>
            }
          />
          <Route
            path="/mt101"
            element={
              <>
                <Header />
                <MT101 />
                <Footer />
              </>
            }
          />
          <Route
            path="/cs224"
            element={
              <>
                <Header />
                <CS224 />
                <Footer />
              </>
            }
          />
          <Route
            path="/mt203"
            element={
              <>
                <Header />
                <MT203 />
                <Footer />
              </>
            }
          />
          <Route
            path="/ch101"
            element={
              <>
                <Header />
                <CH101 />
                <Footer />
              </>
            }
          />
          <Route
            path="/cs101"
            element={
              <>
                <Header />
                <CS101 />
                <Footer />
              </>
            }
          />
          <Route
            path="/cs112"
            element={
              <>
                <Header />
                <CS112 />
                <Footer />
              </>
            }
          />
        </Routes>
        <ButtonGradient />
      </div>
    </>
  );
}

export default App;
