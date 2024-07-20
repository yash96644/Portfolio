import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import PhoneImage from "../../assets/phone.svg";
import MailIcon from "../../assets/gmail.png";
import AddressIcon from "../../assets/location.png"; 
import PhoneIcon from "../../assets/telephone.png"; 
import LogoIcon from "../../assets/suss.png";

const containerVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

function ContactDetail() {
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
      className="relative flex flex-col items-center justify-between w-full h-full py-10 px-5 bg-[#f9f9f9]"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <motion.div className="flex flex-col items-center justify-center w-full max-w-4xl" variants={itemVariants}>
        <motion.h1
          className="mt-20 mb-8 text-4xl font-['Regular'] text-gray-800"
          variants={itemVariants}
          whileHover={{ scale: 1.1, color: "#4a5568" }}
        >
          Let's work together!
        </motion.h1>
        <div className="flex flex-wrap gap-8 mb-10">
          <motion.div
            className="flex items-center gap-4 p-6 transition-shadow duration-300 ease-in-out bg-white rounded-lg shadow-md hover:shadow-lg"
            variants={itemVariants}
          >
            <motion.img
              src={MailIcon}
              alt="Mail"
              className="w-12 h-12"
              variants={imageVariants}
              whileHover="hover"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Mail</h2>
              <p className="text-gray-600">yg095544@gmail.com</p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center gap-4 p-6 transition-shadow duration-300 ease-in-out bg-white rounded-lg shadow-md hover:shadow-lg"
            variants={itemVariants}
          >
            <motion.img
              src={AddressIcon}
              alt="Address"
              className="w-12 h-12"
              variants={imageVariants}
              whileHover="hover"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Address</h2>
              <p className="text-gray-600">Jaipur, Rajasthan</p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center gap-4 p-6 transition-shadow duration-300 ease-in-out bg-white rounded-lg shadow-md hover:shadow-lg"
            variants={itemVariants}
          >
            <motion.img
              src={PhoneIcon}
              alt="Phone"
              className="w-12 h-12"
              variants={imageVariants}
              whileHover="hover"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Phone</h2>
              <p className="text-gray-600">+91 966 4476 552</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="relative flex flex-col items-center justify-center w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <motion.img
          src={PhoneImage}
          className="absolute w-full h-auto -translate-x-1/2 -translate-y-1/2 top-48 left-64 opacity-40"
          alt="Phone SVG"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
        />
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="relative z-10 flex flex-col gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            required
            className="p-3 text-black bg-gray-100 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className="p-3 text-black bg-gray-100 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            rows={6}
            placeholder="Message"
            className="p-3 text-black bg-gray-100 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-3 font-semibold text-white transition-colors duration-300 ease-in-out rounded-lg shadow-md bg-zinc-800 hover:bg-indigo-700"
          >
            Submit
          </button>
          {emailSent && (
            <div className="flex items-center justify-center mt-4 text-green-600">
              <p>Email sent successfully!</p>
              <img src={LogoIcon} alt="Logo" className="h-8 ml-2" />
            </div>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
}

export default ContactDetail;
