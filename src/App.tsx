import { IoMoonOutline } from "react-icons/io5";
import About from "./components/About";
import Hero from "./components/Hero";
import { CiLight } from "react-icons/ci";
import { createContext, useEffect, useState } from "react";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

export const DarkModeContext = createContext(false);

function App() {
  const [show, setShow] = useState(1);
  const [mode, setMode] = useState(false);
  useEffect(() => {
    document.body.style.backgroundColor = mode ? '#131217' : '#fdf2f8'; 
    document.body.style.color = mode ? 'white' : 'black'; 
  }, [mode]);
  return (
    <DarkModeContext.Provider value={mode}>
      <div
        className={`md:flex flex-col xl:justify-center items-center w-full h-full font-viga `}
      >
        <nav
          className={`fixed top-0 w-full py-4 px-10 flex justify-between z-50  ${
            mode ? "bg-[#131217] text-white" : "bg-pink-50 text-black"
          }`}
        >
          <h1 className="font-viga">My Portofolio</h1>
          {mode ? (
            <CiLight
              onClick={() => setMode(!mode)}
              className="cursor-pointer text-2xl"
            />
          ) : (
            <IoMoonOutline
              onClick={() => setMode(!mode)}
              className="cursor-pointer text-2xl"
            />
          )}
        </nav>
        <div className="xl:w-[60%]  h-full relative overflow-hidden max-xl:px-4">
          <Hero /> 
          <div className="md:flex w-full  mt-12 md:mb-32">
            <About />
            <div className="h-full w-full md:ml-5">
              <ul className="grid grid-cols-3  border-b-2 mb-4 font-viga max-md:mt-12">
                <li
                  className={`${
                    show === 1 &&
                    `${mode ? "text-purple-200" : "bg-purple-200"}`
                  } cursor-pointer flex items-center justify-center`}
                  onClick={() => setShow(1)}
                >
                  <p
                    className={`py-2 w-max ${
                      show === 1 && "border-b-4 border-purple-400"
                    }`}
                  >
                    Projects
                  </p>
                </li>
                <li
                  className={`${
                    show === 2 &&
                    `${mode ? "text-purple-200" : "bg-purple-200"}`
                  } cursor-pointer flex items-center justify-center`}
                  onClick={() => setShow(2)}
                >
                  <p
                    className={`py-2 w-max ${
                      show === 2 && "border-b-4 border-purple-400"
                    }`}
                  >
                    Resume
                  </p>
                </li>
                <li
                  className={`${
                    show === 3 &&
                    `${mode ? "text-purple-200" : "bg-purple-200"}`
                  } cursor-pointer flex items-center justify-center`}
                  onClick={() => setShow(3)}
                >
                  <p
                    className={`py-2 w-max ${
                      show === 3 && "border-b-4 border-purple-400"
                    }`}
                  >
                    Contact
                  </p>
                </li>
              </ul>
              {show === 1 && <Projects />}
              {show === 2 && <Resume />}
              {show === 3 && <Contact />}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
