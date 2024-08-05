import { LiaMapMarkerSolid } from "react-icons/lia";
import { IoBriefcaseOutline } from "react-icons/io5";
import { useContext } from "react";
import { DarkModeContext } from "../App";
const About = () => {
  const darkMode = useContext(DarkModeContext);
  return (
    <div
      className={` ${
        darkMode ? "bg-[#1f1c21]" : "bg-[#f3edf7]"
      } rounded md:w-1/3 p-2 h-max`}
    >
      <h1 className="border-b-[1px]  border-gray-400 font-viga  pb-4 font-medium mb-4 mt-2">About</h1>
      <p className="text-sm font-thin mt-3 border-b-[1px] font-viga border-gray-400 pb-4 opacity-75">
        A fullstack developer with extensive knowledge in web dev technologies.
      </p>
      <ul className="opacity-75">
        <li className="flex items-center mt-4">
          <LiaMapMarkerSolid />
          <p className="ml-2 font-viga">Kepulauan Riau, Indonesia</p>
        </li>
        <li className="flex font-viga items-center mt-4">
          <IoBriefcaseOutline />
          <p className="ml-2">Presiden Republic Indonesia</p>
        </li>
      </ul>
    </div>
  );
};

export default About;
