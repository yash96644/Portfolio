import { FaLongArrowAltUp } from "react-icons/fa";
import { motion } from "framer-motion";
import BackgroundImage from "../../assets/background.jpeg";
import CV from '../../assets/CV.pdf';

const Landing = () => {
  const titles = ["Welcome to", "My-Portfolio", "Web Enthusiast"];
  const below_border = [
    "For public and private companies",
    "Project outset from the developer side",
  ];

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.8"
      className="w-full h-screen pt-1 bg-[#f1f1f1]"
    >
      <div className="px-20 mt-52 TextStructure">
        {titles.map((title, index) => (
          <div key={index} className="Masker">
            <div className="flex items-center overflow-hidden w-fit">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.6, -0.05, 0.01, 0.99], duration: 3 }}
                  className="mr-[0.6vw] w-[5vw] bg-cover bg-center rounded-md h-[5.8vw] relative -top-[0.4]"
                  style={{ backgroundImage: `url(${BackgroundImage})` }}
                ></motion.div>
              )}
              <h1 className="uppercase text-[8vw] leading-[5.9vw] tracking-extra-tight font-['Founders_Grotesk_X-Condensed'] font-bold">
                {title}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-[1px] border-zinc-400 mt-16 flex justify-between items-center tracking-tight leading-none py-5 px-20 font-['Regular']">
        {below_border.map((phrase, index) => (
          <p key={index} className="font-light text-md">
            {phrase}
          </p>
        ))}

        <div className="flex items-center gap-5 start">
          <div className="px-5 py-2 rounded-full uppercase font-['Regular'] text-md">
            <a href={CV} download>
              <button className="font-['Regular'] text-1xl font-medium transition-transform duration-300 transform bg-transparent  rounded-full hover:text-black hover:scale-105">
                Resume
              </button>
            </a>
          </div>
          <div className="w-10 h-10 rounded-full border-[1px] border-zinc-400 flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
