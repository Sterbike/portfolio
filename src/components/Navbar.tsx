"use client";
import React, { useState } from "react";

interface NavbarProps {
  setShowResumePanel: (show: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setShowResumePanel }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f5] px-10 py-3 sticky top-0 left-0 z-10 bg-white shadow-md ">
      <div className="flex items-center gap-4 text-[#111418]">
        <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
          <a href="#top">
            Portfolio
          </a>
        </h2>
      </div>

      <label className="lg:hidden" >
        <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
          <input className="hidden peer" type="checkbox" onClick={() => setIsNavOpen(!isNavOpen)}/>
          <div className={`w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] ${isNavOpen ? "rotate-[-45deg]" : ""}`}></div>
          <div className={`w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center ${isNavOpen ? "hidden" : ""}`}></div>
          <div className={`w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] ${isNavOpen ? "rotate-[45deg]" : ""}`}></div>
        </div>
      </label>

      <div onClick={() => setIsNavOpen(!isNavOpen)} className= {`${isNavOpen? "translate-x-[0]" : "translate-x-[100%]" } transition-all duration-200 lg:hidden bg-white fixed top-16 left-0 w-full h-screen z-10 items-center justify-center`}>
        <div className="flex flex-col items-center gap-9">
          <a
          
            className={`text-[#111418] text-xl font-medium leading-normal ${isNavOpen ? "translate-x-[0] opacity-100" : "translate-x-[-150%] opacity-0 transition-none"} transition-all duration-500`}
            href="#about"
          >
            About
          </a>
          <a
            className={`text-[#111418] text-xl font-medium leading-normal ${isNavOpen ? "translate-x-[0] opacity-100" : "translate-x-[150%] opacity-0 transition-none"} transition-all duration-500 delay-100`}
            href="#projects"
          >
            Projects
          </a>
          <a
            className={`text-[#111418] text-xl font-medium leading-normal ${isNavOpen ? "translate-x-[0] opacity-100" : "translate-x-[-150%] opacity-0 transition-none"} transition-all duration-500 delay-200`}
            href="#skills"
          >
            Skills
          </a>
          <a
            className={`text-[#111418] text-xl font-medium leading-normal ${isNavOpen ? "translate-x-[0] opacity-100" : "translate-x-[150%] opacity-0 transition-none"} transition-all duration-500 delay-300`}
            href="#contact"
          >
            Contact
          </a>
          <button
            onClick={() => setShowResumePanel(true)}
            id="download_cv_button"
            className={`hover:bg-blue-500 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-b text-white text-xl font-bold leading-normal tracking-[0.015em] ${isNavOpen ? "translate-y-[0] opacity-100" : "translate-y-[150%] opacity-0 transition-none"} transition-all duration-500 delay-400`}
          >
            <span className="truncate">Resume</span>
          </button>
        </div>
      </div>

      <div className="flex-1 justify-end gap-8 hidden lg:flex">
        <div className="flex items-center gap-9">
          <a
            className="text-[#111418] text-md font-medium leading-normal hover:text-blue-300 transition-colors"
            href="#about"
          >
            About
          </a>
          <a
            className="text-[#111418] text-md font-medium leading-normal hover:text-blue-300 transition-colors"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="text-[#111418] text-md font-medium leading-normal hover:text-blue-300 transition-colors"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="text-[#111418] text-md font-medium leading-normal hover:text-blue-300 transition-colors"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <button
          onClick={() => setShowResumePanel(true)}
          id="download_cv_button"
          className="hover:bg-blue-500 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-b text-white text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Resume</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
