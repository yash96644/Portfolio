import React from "react";
import { NavLink , Link } from "react-router-dom"; 
import './About.css';
import file from '../../assets/file.jpeg';

function About() {
  return (
    <div className="w-full p-20 bg-[#cdea68] font-['Regular'] rounded-tr-3xl rounded-tl-3xl rounded-br-3xl rounded-bl-3xl ">
      <h1 className="font-['Regular'] text-[3.5vw] leading-[3.7vw] tracking-tight">
        I work as a freelance web developer, helping tech startups achieve
        growth by creating impactful digital solutions, simplifying complex
        ideas, and collaborating with top-tier talent.
      </h1>
      <div className="w-full flex border-t-[1px] mt-16 border-[#a1b562]">
        <div className="w-1/2 px-10 py-6 font-['Regular'] text-sm tracking-wide">
          What you can expect:
        </div>
        <div className="w-1/4 mt-6 font-['nunito',['sans']] text-sm h-[40vh] -ml-8 tracking-tight">
          <p>
            As a freelance web developer, I specialize in creating
            customized presentations to effectively persuade your
            colleagues, clients, or investors, whether delivered live or digitally,
            for audiences ranging from one to a hundred people.
          </p>
          <br />
          <br />
          <br />
          <p>
            As an independent web developer, I believe that combining strategy
            and design (with a touch of inspiration) enhances your message,
            making it clear, convincing, and captivating.
          </p>
        </div>
        <div className="w-1/4 py-10 pl-32 h-[40vh] text-['Ice']  mt-10  ">
          <p>S:</p>
          <br />
          <ul>
            <li className="relative group">
              <a 
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="underline-hover"
              >
                Instagram
              </a>
            </li>
            <li className="relative group">
              <a
                href="https://www.x.com"
                target="_blank"
                rel="noreferrer"
                className="underline-hover"
              >
                Twitter
              </a>
            </li>
            <li className="relative group">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="underline-hover"
              >
                Facebook
              </a>
            </li>
            <li className="relative group">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="underline-hover"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="font-['Regular'] w-full flex gap-5 border-t-[1px] mt-10 border-[#a1b562]">
        <div className="w-1/2"> 
          <h1 className="mt-5 text-5xl tracking-wider">About me:</h1>
          <Link to="/about-me">
            <button className="flex items-center gap-10 py-5 mt-10 text-white uppercase transition-transform duration-300 ease-in-out rounded-full px-7 bg-zinc-800 hover:bg-zinc-700 hover:scale-105">
              Read More
              <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
            </button>
          </Link>
        </div>
        <div className="w-1/2 h-[50vh] mt-10 flex items-center justify-center">
          <img
            className=" mt-7 object-cover object-center w-[60vh] h-[60vh] rounded-full hover:scale-105 transition-transform duration-300 ease-in-out"
            src={file}
            alt="About me"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
