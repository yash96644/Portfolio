import React, { useEffect, useState } from "react";
import eye from '../../assets/eye.jpg'
function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden eyes ">
      <div data-scroll data-scroll-speed="-.7"
        className="relative w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `url(${eye})`,
        }}
      >
        <div className="absolute flex gap-10 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <div className="flex items-center justify-center w-[14.1vw] h-[14.1vw] rounded-full bg-[#f1f1f1]">
            <div className="relative w-2/3 rounded-full h-2/3 bg-zinc-900">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="absolute w-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-9 line"
              >
                <div className="w-[19px] h-[19px] rounded-full bg-zinc-100"></div>
              </div>
              <div className="absolute flex items-center justify-center w-full h-full text-[#f1f1f1] text-center text-2xl font-['Ice']">
                Play
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[14.1vw] h-[14.1vw] rounded-full bg-[#f1f1f1]">
            <div className="relative w-2/3 rounded-full h-2/3 bg-zinc-900">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="absolute w-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-9 line"
              >
                <div className="w-[19px] h-[19px] rounded-full bg-zinc-100"></div>
              </div>
              <div className="absolute flex items-center justify-center w-full h-full  text-[#f1f1f1] text-center text-2xl font-['Ice']">
                Play
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
