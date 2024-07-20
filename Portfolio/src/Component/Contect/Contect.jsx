import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import PhoneImage from "../../assets/phone.svg";
import MailIcon from "../../assets/gmail.png";
import AddressIcon from "../../assets/location.png"; 
import PhoneIcon from "../../assets/telephone.png"; 
import LogoIcon from "../../assets/suss.png";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

function Contact() {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_p6vy0dp", "template_e3gf8we", form.current, "yLOtvg7qZLuOjmzZW")
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setEmailSent(true);
          form.current.reset();
        },
        (error) => {
          console.log("Email sending failed:", error.text);
        }
      );
  };

  return (
    <motion.div
      className="relative flex items-center justify-between w-full h-full"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="relative z-20 flex flex-col flex-1 border-t-[2px] gap-10" variants={variants}>
        <motion.h1
          className="relative ml-14 text-5xl font-['Regular'] leading-tight tracking-tight cursor-pointer transition-colors duration-300 ease-in-out hover:text-olivedrab"
          variants={variants}
          whileHover={{ scale: 1.1 }}
        >
          Let's work together.
        </motion.h1>
        <motion.div className="flex items-center gap-2 item group" variants={variants}>
          <img src={MailIcon} alt="Mail" className="w-8 h-8 transition-transform duration-300 ease-in-out group-hover:scale-110" />
          <div className="flex flex-col">
            <h2 className="relative font-bold transition-colors duration-300 ease-in-out group-hover:text-olivedrab underline-hover">Mail</h2>
            <span className="relative transition-colors duration-300 ease-in-out group-hover:text-olivedrab underline-hover">yg095544@gmail.com</span>
          </div>
        </motion.div>
        <motion.div className="flex items-center gap-2 item group" variants={variants}>
          <img src={AddressIcon} alt="Address" className="w-8 h-8 transition-transform duration-300 ease-in-out group-hover:scale-110" />
          <div className="flex flex-col">
            <h2 className="relative font-bold transition-colors duration-200 ease-in-out group-hover:text-olivedrab underline-hover">Address</h2>
            <span className="relative transition-colors duration-300 ease-in-out group-hover:text-olivedrab underline-hover">Jaipur, Rajasthan</span>
          </div>
        </motion.div>
        <motion.div className="flex items-center gap-2 item group" variants={variants}>
          <img src={PhoneIcon} alt="Phone" className="w-8 h-8 transition-transform duration-300 ease-in-out group-hover:scale-110" />
          <div className="flex flex-col">
            <h2 className="relative font-bold transition-colors duration-300 ease-in-out group-hover:text-olivedrab underline-hover">Phone</h2>
            <span className="relative transition-colors duration-300 ease-in-out group-hover:text-olivedrab underline-hover">+91 966 4476 552</span>
          </div>
        </motion.div>
      </motion.div>
      <div className="relative flex-1 border-t-[2px] formContainer">
        <motion.img
          src={PhoneImage}
          className="absolute top-0 bottom-0 left-0 right-0 w-3/4 m-auto h-3/4 phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
          alt="Phone SVG"
        />
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="relative z-20 flex flex-col gap-4 opacity-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <div className="flex flex-col gap-4 mt-16">
            <input type="text" name="user_name" placeholder="Name" required className="p-2 text-black bg-transparent border-2 rounded-2xl border-zinc-600" />
            <input type="email" name="user_email" placeholder="Email" required className="p-2 text-black bg-transparent border-2 border-zinc-600 rounded-2xl" />
            <textarea name="message" rows={6} placeholder="Message" className="p-2 text-black bg-transparent border-2 border-zinc-600 rounded-2xl"></textarea>
          </div>
          <button type="submit" className="relative w-60 h-10 flex items-center justify-center p-5 mt-10 font-['Regular'] text-white uppercase transition-transform duration-300 ease-in-out rounded-full px-7 bg-zinc-800 hover:bg-zinc-700 hover:scale-105">
            Submit
            <div className="w-2 h-2 ml-2 rounded-full bg-zinc-100"></div>
          </button>
          {emailSent && (
            <div className="flex items-center justify-center mt-4">
              <p className="font-['Ice']">Email sent successfully..!</p>
              <img src={LogoIcon} alt="Logo" className="h-8 ml-2" />
            </div>
          )}
        </motion.form>
      </div>
      <div className="absolute top-0 left-0 w-full h-2 bg-black z-7"></div>
    </motion.div>
  );
}

export default Contact;
