"use client"

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-auto py-10">
      <p className="text-center text-sm md:text-base">Social Media Links</p>
      <div className="flex justify-center items-center flex-wrap gap-8 mt-4">
        <motion.a
          href="https://github.com/Shivam-fibo"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <FaGithub className="w-6" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/shivamgupta6418/"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <FaLinkedin className="w-6" />
        </motion.a>
        <motion.a
          href="https://x.com/sg6418"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <FaTwitter className="w-6" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/shivam_gupta_6418/"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <FaInstagramSquare className="w-8" />
        </motion.a>
      </div>
    </div>
  );
};

export default Footer;