"use client"
import React, {useState} from 'react'
import { HoverEffect } from "./ui/card-hover-effect";
export const projects = [
  {
    title: "DSA",

    description:
     "I possess a strong foundation in Data Structures and Algorithms (DSA), having solved over 500+ problems across various coding platforms such as LeetCode and GeeksforGeeks.",
     link: "https://leetcode.com/Shivamgupta6418/"
  },
  {
    title: "C++ ",
    description:
     "I have a proficient understanding of C++, with practical experience in solving numerous coding challenges and deep understanding of c++ syntax and programming paradigms.",
     link: ""
  },
  {
    title: "Python",
    description: "I have established a robust foundation in Python, demonstrating proficiency through extensive practice and problem-solving endeavors. ",
    link: ""
  },
  {
    title: "Front-end",
    description: "I have developed a solid foundation in front-end development, with expertise in HTML, CSS, JavaScript, React JS, Tailwind CSS, ",
    link: ""
  },
  {
    title: "Back-end",
    description: "I have a strong foundation in back-end development, with expertise in  Python, Node.js and Express.js. My skills include designing scalable server architectures, managing databases, and developing API, ",
    link: ""
  },
  {
    title: "Database",
    description : "I excel in back-end development. My skills include designing scalable server architectures and developing APIs, with a particular focus on database management using MongoDB and SQL.",
    link : ""
  },
]
const Skill = () => {
  return (
    <div>
      <h1 className='text-1xl md:text-7xl font-small text-center bg-clip-text text-neutral-300bg-opacity-50'>My Skill</h1>
      <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    </div>  
  )
}

export default Skill
