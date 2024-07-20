import { motion } from "framer-motion";

function SecondPage () {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#0d4d44]"
    >
      <div className="flex gap-10 overflow-hidden border-t-2 border-b-2 text border-zinc-300 whitespace-nowrap">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="flex"
        >
          <h1 className="text-[22vw] leading-none font-['Hero'] uppercase -mt-[3.5vw] text-[#f1f1f1] -mb-[1vw] font-semibold pr-[1r]">
            -Freelancer
          </h1>
          <h1 className="text-[22vw] leading-none font-['Hero'] uppercase -mt-[3.5vw] text-[#f1f1f1] -mb-[1vw] font-semibold pr-[1r]">
            -freelancer
          </h1>
          <h1 className="text-[22vw] leading-none font-['Hero'] uppercase -mt-[3.5vw] text-[#f1f1f1] -mb-[1vw] font-semibold pr-[1r]">
            -Freelancer
          </h1>
          <h1 className="text-[22vw] leading-none font-['Hero'] uppercase -mt-[3.5vw] text-[#f1f1f1] -mb-[1vw] font-semibold pr-[1r]">
            -freelancer
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

export default SecondPage;
