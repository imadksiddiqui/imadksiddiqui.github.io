import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import { Link } from 'react-scroll';

const NavBar = () => {

  return (
    <div className="flex justify-between items-center w-full h-16 text-teal-300 bg-black opacity-50 px-6 fixed z-50">
      <div className="flex justify-between items-center">
        <div className="hover:scale-125 duration-200 cursor-pointer flex mr-4">
            <a href="https://www.linkedin.com/in/imadksiddiqui/" target="_blank" rel="noreferrer"><AiFillLinkedin size={42} /></a>
        </div>
        <div className="hover:scale-125 duration-200 cursor-pointer flex ml-2">
            <a href="https://github.com/imadksiddiqui/" target="_blank" rel="noreferrer"><AiFillGithub size={42} /></a>
        </div>
      </div>

        <ul className="flex text-lg">
          <Link to="about" smooth duration="500" className="px-4 cursor-pointer  hover:scale-125 duration-200">Home</Link>
          <Link to="skills" smooth duration="500" className="px-4 cursor-pointer hover:scale-125 duration-200">Skills</Link>
          <Link to="projects" smooth duration="500" className="px-4 cursor-pointer hover:scale-125 duration-200">Projects</Link>
          <Link to="contact" smooth duration="500" className="px-4 cursor-pointer hover:scale-125 duration-200">Contact</Link>
        </ul>
    </div>
  );
};

export default NavBar