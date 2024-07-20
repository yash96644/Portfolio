import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';
import './Header.css'; 

const Header = () => {
  const links = [
    { name: "My Work", path: "/my_works" },
    { name: "About Me..", path: "/about_us" },
    { name: "Contact Me..", path: "/contact_us" }
  ];
  const [scrollDirection, setScrollDirection] = useState("none");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const isHidden = scrollDirection === "down";

  return (
    <div
      className={`fixed z-[999] px-20 w-full py-6 font-['Regular'] flex justify-between mt-2 items-center backdrop-none ${
        isHidden
          ? "hidden animate_animated animate_slideOutUp"
          : "animate_animated animate_slideInDown"
      }`}
    >
      <div className="ml-1 -mt-6 cursor-pointer logo" onClick={goToHomePage}>
        <img src={logo} alt="logo" />
      </div>

      <div className="flex items-center gap-10">
        {links.map((link, index) => (
          <Link
            to={link.path}
            key={index}
            className={`capitalize text-lg font-light transition duration-300 underline-animation ${
              index === 2 ? "ml-32" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
