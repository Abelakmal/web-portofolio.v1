import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { LiaMapMarkerSolid } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { FormEvent, useContext, useState } from "react";
import { DarkModeContext } from "../App";

const Contact = () => {
  const darkMode = useContext(DarkModeContext);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const generateMailtoLink = () => {
    return `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-4">
      <div className="col-span-1">
        <div className="border-b-[1px] border-gray-400 pb-4 w-full">
          <h1>Contact Info</h1>
          <div className="mt-4 flex  items-center">
            <div>
              <MdOutlineEmail className="lg:text-2xl" />
            </div>
            <div className="ml-4">
              <h2 className="lg:text-base text-sm">Mail me</h2>
              <p className="max-lg:text-xs text-gray-400">
                abelakmal06@gmail.com
              </p>
            </div>
          </div>
          <div className="mt-4 flex  items-center">
            <div>
              <MdOutlineLocalPhone className="lg:text-2xl" />
            </div>
            <div className="ml-4">
              <h2 className="lg:text-base text-sm">Contact me</h2>
              <p className="max-lg:text-xs text-gray-400">082387641006</p>
            </div>
          </div>
          <div className="mt-4 flex  items-center">
            <div>
              <LiaMapMarkerSolid className="lg:text-2xl" />
            </div>
            <div className="ml-4">
              <h2 className="lg:text-base text-sm">Address</h2>
              <p className="max-lg:text-xs text-gray-400">
                Legenda Malaka, Batam kota, Kepulauan Riau, Indonesia
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h1>Contact Info</h1>
          <ul className="text-4xl w-full flex justify-between mt-2">
            <li className="cursor-pointer">
              <FaInstagram />
            </li>
            <li className="cursor-pointer">
              <CiLinkedin />
            </li>
            <li className="cursor-pointer">
              <VscGithub />
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`col-span-2 ${
          darkMode ? "bg-[#1f1c21]" : "bg-[#f3edf7]"
        } p-4`}
      >
        <h1>Let's Work Together</h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email*"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded mt-4"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-2 rounded mt-4"
          />
          <textarea
            name="body"
            placeholder="Message"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full mt-4 p-2 resize-none rounded"
          ></textarea>
          <a
            href={generateMailtoLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!email) {
                e.preventDefault(); // Mencegah klik jika email kosong
                alert("Silakan masukkan alamat email yang valid.");
              }
            }}
          >
            <button
              type="button"
              className="bg-[#59458b] text-white w-full rounded-xl py-1 mt-4"
            >
              Submit
            </button>
          </a>
        </form>
      </div>
    </div>
  );
};

export default Contact;
