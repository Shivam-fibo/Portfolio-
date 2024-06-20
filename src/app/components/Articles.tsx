"use client"
import React from 'react';

import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
const Articles = () => {
  return (
  <>
    <LampContainer className='mt-8'>
    <motion.h1
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
    >
      Written Some <br /> tech article
    </motion.h1>
    </LampContainer>

    <div className="flex justify-center space-x-4 ">
      <div className="w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          LocalStorage in JavaScript
          </h1>
          <img
              src="/localStorage.png"
              alt="Description of the image"
              className="mb-4 relative z-50"
            />
          <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
          <a
              href="https://shivamgupta6418.hashnode.dev/localstorage-in-javascript"
              target="_blank"
              rel="noopener noreferrer"
             
            >
              Explore
            </a>
          </button>
        </div>
      </div>
      <div className="w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            JavaScript Mouse Event
          </h1>
          <img
              src="/mouse.png"
              alt="Description of the image"
              className="mb-4 relative z-50"
            />
               <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
          <a
              href="https://shivamgupta6418.hashnode.dev/mouse-magic-understanding-javascript-mouse-event"
              target="_blank"
              rel="noopener noreferrer"
             
            >
              Explore
            </a>
          </button>
        </div>
      </div>
      <div className="w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          JavaScript String Method
          </h1>
          <img
              src="/string.png"
              alt="Description of the image"
              className="mb-4 relative z-50"
            />
          <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
          <a
              href="https://shivamgupta6418.hashnode.dev/javascript-string-methods"
              target="_blank"
              rel="noopener noreferrer"
             
            >
              Explore
            </a>
          </button>
        </div>
      </div>
    </div>

    </>
  );
};

export default Articles;
