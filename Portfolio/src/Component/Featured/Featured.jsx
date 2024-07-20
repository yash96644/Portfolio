import { motion, useAnimation } from "framer-motion";
import logo1 from '../../assets/logo-1.png';
import logo2 from '../../assets/logo-2.png';
import logo3 from '../../assets/logo-3.jfif';
import logo4 from '../../assets/logo-4.png';
function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] pb-20 border-zinc-700 ">
        <h1 className="text-7xl font-['Regular'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="flex w-full gap-10 mt-10 mb-10 cards">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardContainer relative w-1/2 h-[75vh]  "
          >
            <li className="mb-2 text-4xl font-semibold">lice</li>
            <h1 className="absolute text-[#CDEA68] flex overflow-hidden z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter right-0 text-8xl ">
              {"LICE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="w-full h-full overflow-hidden card rounded-xl"
              whileHover={{ scale: 0.97 }} 
              transition={{ ease: "easeInOut", duration: 0.2 }}
            >
              <motion.img
                className="w-full h-full bg-cover"
                whileHover={{ scale: 1.12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                src={logo1}
                alt="basicImage"
              />
            </motion.div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardContainer relative w-1/2 h-[75vh]  "
          >
            <li className="mb-2 text-4xl font-semibold">VISE</li>
            <h1 className="absolute text-[#CDEA68] hover:flex overflow-hidden z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter left-0 text-8xl ">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="w-full h-full overflow-hidden card rounded-xl"
              whileHover={{ scale: 0.97 }}
              transition={{ ease: "easeInOut", duration: 0.3 }} 
            >
              <motion.img
                whileHover={{ scale: 1.12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                className="w-full h-full bg-cover"
                src={logo2}
                alt="basicImage"
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="flex w-full gap-10 mt-10 mb-10 cards">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardContainer relative w-1/2 h-[75vh] mt-10 "
          >
            <li className="mb-10 text-4xl font-semibold">TALAWA</li>

            <h1 className="absolute text-[#CDEA68] hover:flex overflow-hidden z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter right-0 text-8xl">
              {"TALAWA".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="w-full h-full overflow-hidden card rounded-xl"
              whileHover={{ scale: 0.97 }}
              transition={{ ease: "easeInOut", duration: 0.3 }} 
            >
              <motion.img
                className="w-full h-full bg-cover"
                whileHover={{ scale: 1.12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                src={logo3}
                alt="basicImage"
              />
            </motion.div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardContainer relative w-1/2 h-[75vh] mt-10"
          >
            <li className="mb-2 text-4xl font-semibold">COOL BEANS</li>

            <h1 className="absolute text-[#CDEA68] flex overflow-hidden z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter left-0 text-8xl">
              {"COOL BEANS".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="w-full h-full overflow-hidden card rounded-xl"
              whileHover={{ scale: 0.97 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
            >
              <motion.img
                whileHover={{ scale: 1.12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                className="w-full h-full bg-cover"
                src={logo4}
                alt="basicImage"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
