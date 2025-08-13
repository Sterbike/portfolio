import React from 'react'
import FadeInOnScroll from "../FadeInOnScroll";
import Image from "next/image";

interface ContactCardProps {
  linkUrl: string;
  iconUrl: string;
  iconAlt: string;
  title: string;
  mail?: boolean;
}

const ContactCard:React.FC<ContactCardProps> = ({title, linkUrl, iconUrl, iconAlt, mail}) => {
  return (
    <FadeInOnScroll>
        <a href={linkUrl} target='_blank' className="flex flex-col gap-3 pb-3 rounded-lg hover:scale-110 shadow-none hover:shadow-2xl transition-all duration-300 ease-in-out h-full bg-[#f0f0f0] white border border-[#dbe0e6] overflow-hidden">
            <Image
                width={500}
                height={500}
                className="w-full h-32 object-contain rounded-lg"
                src={iconUrl}
                loading='lazy'
                alt={iconAlt}
            />
            <div className=" m-auto text-center items-center">
                <p className="text-[#111418] text-base font-medium leading-normal text-md ">{title}</p>
                <p className="text-[#111418] text-sm font-normal leading-normal text-md">{mail ? "Click to send an email" : "Click to visit"}</p>
            </div>
        </a>
    </FadeInOnScroll>
  )
}

export default ContactCard