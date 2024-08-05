import { useContext } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { DarkModeContext } from "../App";
const Hero = () => {
  const darkMode = useContext(DarkModeContext);
  return (
    <div className="flex max-md:flex-col max-md:items-center md:w-1/2 pt-20 ">
      <img
        src="jokowi.webp"
        alt=""
        className="rounded-full h-40 w-40 object-cover"
      />
      <div className="md:ml-10">
        <h1 className="text-2xl  font-viga">Jokowi Widodo</h1>
        <h2 className="text-md my-2 font-roboto font-medium">Presiden</h2>
        <p className="text-sm opacity-80 font-viga ">
          Experienced being president for 5 years. Let's work together to build
          the country with me
        </p>
        <div className="md:flex hidden mt-5">
          <p
            className={`border-[1px] ${
              darkMode ? "border-gray-400" : "border-black"
            } mr-4 px-2 rounded text-sm flex items-center font-viga`}
          >
            <MdOutlineEmail className="mr-2 text-lg " />
            jokowi@ri.com
          </p>
          <p
            className={`border-[1px] ${
              darkMode ? "border-gray-400" : "border-black"
            } mr-4 px-2 rounded text-sm flex items-center font-viga`}
          >
            <MdOutlineLocalPhone className="mr-2 text-lg" />
            082251256527
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
