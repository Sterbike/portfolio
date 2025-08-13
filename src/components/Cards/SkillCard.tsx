import React from "react";
import FadeInOnScroll from "../FadeInOnScroll";

interface SkillCardProps {
  skill: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <FadeInOnScroll>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-[#f0f0f0] p-4 items-center">
        <div
            className="text-[#111418]"
            data-icon="Code"
            data-size="24px"
            data-weight="regular"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
            >
            <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
            </svg>
        </div>
        <h2 className="text-[#111418] text-base font-bold leading-tight">{skill}</h2>
        </div>
    </FadeInOnScroll>
  );
};

export default SkillCard;
