import { useContext } from "react";
import { DarkModeContext } from "../App";

const education = [
  {
    title: "Purwadhika School on fullstack developer",
    year: "2023-2024",
  },
  {
    title: "High School majoring in Mathematics and Natural Sciences",
    year: "2020-2023",
  },
];

const technologies = [
  {
    name: "React Js",
    image: "react.png",
  },
  {
    name: "Tailwind CSS",
    image: "tailwind.png",
  },
  {
    name: "Typescript",
    image: "typescript.png",
  },
  {
    name: "Node Js",
    image: "nodejs.png",
  },
  {
    name: "Express Js",
    image: "expressjs.png",
  },
  {
    name: "Postgresql",
    image: "postgresql.png",
  },
  {
    name: "Github",
    image: "github.png",
  },
  {
    name: "linux",
    image: "linux.png",
  },
  {
    name: "Docker",
    image: "docker.png"
  }
];
const Resume = () => {
  const darkMode = useContext(DarkModeContext);
  return (
    <div>
      <h1>Education</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {education.map((data: any, index: number) => {
          return (
            <div key={index}>
              <h1 className="text-sm">{data.title}</h1>
              <p className="text-xs text-gray-600">{data.year}</p>
            </div>
          );
        })}
      </div>
      <h1 className="mt-10">Skills and Technologies</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-5 gap-4">
        {technologies.map((data: any, index: number) => {
          return (
            <div
              key={index}
              className={`${
                darkMode
                  ? "bg-[#1f1c21] hover:bg-[#2a262c]"
                  : "bg-gray-100 hover:bg-gray-200"
              } w-max px-2 py-1 flex items-center rounded cursor-pointer`}
            >
              <img src={data.image} alt="" className="w-10 h-10 mr-3" />
              {data.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Resume;
