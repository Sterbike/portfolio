"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ResumePanel from "@/components/ResumePanel";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import SkillCard from "@/components/Cards/SkillCard";
import ProjectCard from "@/components/Cards/ProjectCard";
import ContactCard from "@/components/Cards/ContactCard";

export default function Home() {
  const [showResumePanel, setShowResumePanel] = useState(false);

  return (
    <>
      <ResumePanel
        setShowResumePanel={setShowResumePanel}
        showResumePanel={showResumePanel}
      />
      <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-clip">
        <Image
        width={500}
        height={500}
        className="top-0 left-0 z-[-1] w-screen h-screen object-cover fixed"
        src="./background.jpg"
        alt="Background Image"
        />
        <div className="layout-container flex flex-col z-6">
          <Navbar setShowResumePanel={setShowResumePanel} />
          <div
            id="about"
            className="scroll-mt-3 lg:px-20 md:px-40 flex flex-1 justify-center py-5 "
          >
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="@container">
                <div className="flex flex-col px-4 py-10 gap-8 lg:flex-row">
                  <FadeInOnScroll>
                    <div className="w-full lg:bg-cover bg-contain bg-center bg-no-repeat aspect-video rounded-lg">
                      <Image
                        width={500}
                        height={500}
                        className="m-auto rounded-3xl max-w-80 lg:rounded-full lg:max-w-60 border-[1px] border-black "
                        src="./profile.jpg"
                        alt="Profile Picture"
                      />
                    </div>
                  </FadeInOnScroll>
                  <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                    <div className="flex flex-col gap-2 text-left">
                      <FadeInOnScroll>
                        <h1 className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                          Hi, I&apos;m Richard, a Junior Software Developer
                        </h1>
                      </FadeInOnScroll>
                      <FadeInOnScroll>
                        <h2 className="text-[#111418] text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                          I&apos;m currently studying Computer Science at the
                          University of Szeged, and this portfolio showcases
                          some of my projects. Feel free to explore my work and
                          get in touch if you have any questions or
                          opportunities!
                        </h2>
                      </FadeInOnScroll>
                    </div>
                    <FadeInOnScroll>
                      <a
                        href="#contact"
                        className="hover:bg-blue-500 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                      >
                        <span className="truncate">Contact me</span>
                      </a>
                    </FadeInOnScroll>
                  </div>
                </div>
              </div>
              <div>
                <FadeInOnScroll>
                  <h2
                    id="projects"
                    className="scroll-mt-15 text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
                  >
                    Projects
                  </h2>
                </FadeInOnScroll>
                <div className="grid lg:grid-cols-[repeat(3,minmax(158px,1fr))] gap-3 p-4">
                  <ProjectCard 
                    imgUrl="./soszarnyitas.PNG"
                    imgAlt="Soszarnyitas Thumbnail"
                    linkUrl="https://www.soszarnyitas.hu"
                    title="Soszarnyitas.hu"
                    description="soszarnyitas.hu was one of my very first projects - a website built for a local emergency gate opening service."
                  />
                  <ProjectCard 
                    imgUrl="./djgabro.PNG"
                    imgAlt="DJ Gabro Thumbnail"
                    linkUrl="https://www.djgabro.hu"
                    title="DJ Gabro"
                    description="DJ Gabro is a website I created for a local DJ, showcasing his services and events."
                  />
                  <ProjectCard 
                    imgUrl="./giftventures.jpg"
                    imgAlt="GiftVentures Thumbnail"
                    linkUrl="./GiftVentures.docx"
                    downloadable={true}
                    title="GiftVentures"
                    description="GiftVentures is one of my first full-stack group projects - a web app for gifting unique experiences, built with React, Node.js, and MongoDB as part of our final exam project."
                  />
                </div>
              </div>
              <FadeInOnScroll>
                <h2
                  id="skills"
                  className="scroll-mt-15 text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
                >
                  Skills
                </h2>
              </FadeInOnScroll>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                <SkillCard skill="HTML" />
                <SkillCard skill="CSS" />
                <SkillCard skill="Tailwind CSS" />
                <SkillCard skill="JavaScript" />
                <SkillCard skill="TypeScript" />
                <SkillCard skill="Next.js" />
                <SkillCard skill="React" />
                <SkillCard skill="Node.js" />
                <SkillCard skill="Express.js" />
                <SkillCard skill="MongoDB" />
                <SkillCard skill="SQL" />
                <SkillCard skill="REST APIs" />
                <SkillCard skill="Java" />
                <SkillCard skill="Python" />
                <SkillCard skill="C#" />
                <SkillCard skill="Git" />
              </div>
              <FadeInOnScroll>
                <h2
                  id="contact"
                  className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
                >
                  Contact
                </h2>
              </FadeInOnScroll>
              <div className="grid lg:grid-cols-[repeat(4,minmax(158px,1fr))] grid-cols-[repeat(2,minmax(158px,1fr))] gap-3 p-4">
                <ContactCard 
                  title="Github"
                  linkUrl="https://github.com/Sterbike"
                  iconUrl="./github-mark.png"
                  iconAlt="GitHub Icon"
                />
                <ContactCard 
                  title="Facebook"
                  linkUrl="https://www.facebook.com/richard.hodi.7/"
                  iconUrl="./facebook-icon.png"
                  iconAlt="Facebook Icon"
                />
                <ContactCard
                  title="LinkedIn"
                  linkUrl="https://www.linkedin.com/in/richárd-hódi-710499183"
                  iconUrl="./linkedin-icon.png"
                  iconAlt="LinkedIn Icon"
                 />
                <ContactCard
                  title="Email" 
                  linkUrl="mailto:hodiricsi@gmail.com"
                  iconUrl="./gmail.png"
                  iconAlt="Email Icon"
                  mail
                 />
              </div>
            </div>
          </div>
          <footer className="flex justify-center bg-[#8b8b8b]">
            <div className="flex max-w-[960px] flex-1 flex-col">
              <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
                <p className="text-[#f0f0f0] text-base font-normal leading-normal">
                  @2025 Richard&apos;s Portfolio
                </p>
              </footer>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
