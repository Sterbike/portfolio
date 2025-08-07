"use client";

import React from "react";

interface ResumePanelProps {
  setShowResumePanel: (show: boolean) => void;
  showResumePanel?: boolean;
}

const ResumePanel: React.FC<ResumePanelProps> = ({ setShowResumePanel, showResumePanel }) => {
  return (
    <div
      onClick={() => setShowResumePanel(false)}
      id="download_cv"
      className={`fixed top-0 left-0 z-20 bg-white/30 backdrop-blur-md w-full h-screen flex items-center flex-col lg:flex-row justify-center gap-20 lg:gap-60 ${showResumePanel ? "translate-y-0" : "translate-y-[-100%]"} transition-transform duration-200`}
    >
      <a
        href="./hodi_richard_cv_hu.pdf"
        download
        className="w-50 cursor-pointer group relative flex justify-center gap-1.5 px-8 py-4 bg-blue-500 text-white rounded-3xl hover:bg-blue-400 transition translate-all font-semibold shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="24px"
          width="24px"
        >
          <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            id="SVGRepo_tracerCarrier"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g id="Interface / Download">
              {" "}
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="#f1f1f1"
                d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                id="Vector"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
        Hungarian CV
        <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-blue-400 bg-opacity-100 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
          Download
        </div>
      </a>
      <a
        href="./hodi_richard_cv_en.pdf"
        download
        className=" w-50 cursor-pointer group relative flex justify-center gap-1.5 px-8 py-4 bg-blue-500 text-white rounded-3xl hover:bg-blue-400 transition translate-all font-semibold shadow-md"
      >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="24px"
            width="24px"
          >
            <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              id="SVGRepo_tracerCarrier"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="Interface / Download">
                {" "}
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="#f1f1f1"
                  d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                  id="Vector"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
        English CV
        <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-blue-400 bg-opacity-100 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
          Download
        </div>
      </a>
    </div>
  );
};

export default ResumePanel;
