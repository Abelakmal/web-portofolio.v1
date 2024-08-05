import { useContext } from "react";
import { DarkModeContext } from "../App";

const datas = [
  {
    name: "Groceria Shop App",
    type: "Web App",
    image: "ecommerce-website.jpg",
  },
  {
    name: "Chat Company App",
    type: "Web App",
    image: "chat-app.webp",
  },
  {
    name: "Company Profile App",
    type: "Web App",
    image: "p-company.jpg",
  },
];
const Projects = () => {
  const darkMode = useContext(DarkModeContext);
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-4 ">
      {datas.map((data: any, index: number) => {
        return (
          <div
            className={`w-full p-5 flex items-center justify-center rounded-lg cursor-pointer  ${
              darkMode
                ? "bg-[#1f1c21] hover:bg-[#2a262c]"
                : "bg-[#f3edf7] hover:bg-gray-200"
            }`}
            key={index}
          >
            <div>
              <img src={data.image} alt={data.name} className=" w-96" />
              <p className="font-roboto my-2">{data.type}</p>
              <h1 className="font-viga">{data.name}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
