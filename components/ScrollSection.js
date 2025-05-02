"use client";

import React from "react";
import styles from "./Experiences.module.css";

function ScrollSection() {
  const experiences = [
    {
      title: "IIT Bombay (Education Technology Department)",
      role: "Web Developer",
      duration: "6 months (August 2023 - February 2024)",
      description: "We built a Student Query Driven Learning under the guidance of Asst.Professor Sumitra Sadhukhan. This SQDL App has been designed to enable some degree of self-directed learning in classroom environments.",
      tasks: [
        "Completing the remaining work of the Backend",
        "SQDL front-end development",
        "Modification of SQDL (Backend and Frontend) post beta testing"
      ],
      image: "./images/sqdlMain.png",
      certificate: "./pdf/iitbombay.pdf",
      color: "bg-gradient-to-br from-cyan-400 to-cyan-600"
    },
    {
      title: "Communicore Fiberinfra Private Limited (CFPL)",
      role: "Web Developer",
      duration: "3 months (Feb 2023 - Aug 2023)",
      description: "Communicore Fiberinfra Private Limited (CFPL) is a Private Limited Indian Non-Government Company incorporated in India. The company provides fiber, radio and telecommunication based solutions.",
      tasks: [
        "Created the whole UI/UX design of the website",
        "Created a UI friendly interface for users",
        "Connect the contact form to the backend for seamless interaction",
        "Making the site fully responsive for all devices",
        "Co-ordination and Communication with the colleagues"
      ],
      image: "./images/communicore2.png",
      certificate: "./pdf/iitbombay.pdf",
      color: "bg-gradient-to-br from-sky-500 to-sky-700"
    },
    {
      title: "Scope for Change",
      role: "LinkedIn Marketer",
      duration: "1 month (Aug 2023 - Sept 2023)",
      description: "Scope For Change is an organization committed to empowering underprivileged communities and promoting sustainability. As a LinkedIn Marketer, I had the opportunity to enhance their online presence and amplify their mission.",
      tasks: [
        "Boosted LinkedIn followers and engagement through strategic marketing",
        "Created content to highlight the organization's mission and impact",
        "Featured success stories and initiatives to empower communities",
        "Analyzed LinkedIn metrics to refine content and strategy"
      ],
      image: "./images/scopeforchange.jpeg",
      certificate: "./pdf/scopeforchange.pdf",
      color: "bg-gradient-to-br from-cyan-400 to-cyan-600"
    },
    {
      title: "EasyCompany",
      role: "Web Developer",
      duration: "3 months (Nov 2022 - Feb 2023)",
      description: "The easycompany app lets you find trusted partners for your adventures. We use your location to list trips that will start from your location and you can just get on-board by a simple swipe.",
      tasks: [
        "Created a Mobile Version of the Ask Page",
        "Created Desktop and Mobile Version of Your Questions Page",
        "Fixed Tags Functionality on Multiple Pages",
        "Fixed Sidebar",
        "Created a Profile Page for easycommunity"
      ],
      image: "./images/intern1.jpg",
      certificate: "./pdf/easycompany certificates.pdf",
      color: "bg-gradient-to-br from-blue-500 to-blue-700"
    }
  ];

  return (
    <div className="py-20 px-4 md:px-8 bg-black">
      <h1 id="experience" className={styles.mainHeading2 + " text-[var(--accent-green)]"}>Past Experiences</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className={"rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-[1.02] bg-[#0a1814] border-2 border-[#003a2d] hover:border-[var(--accent-green)] hover:shadow-[0_0_24px_#00ffb2cc]"}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110 rounded-t-2xl border-b-2 border-[var(--accent-green)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-2xl font-bold text-white mb-1">{exp.title}</h2>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-[var(--accent-green)]/20 rounded-full text-sm text-[var(--accent-green)] font-semibold backdrop-blur-sm border border-[var(--accent-green)]">
                    {exp.role}
                  </span>
                  <span className="text-sm text-white/90">
                    {exp.duration}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6 text-white">
              <p className="text-white/90 mb-4">{exp.description}</p>
              <div className="space-y-2 mb-6">
                {exp.tasks.map((task, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[var(--accent-green)]">•</span>
                    <span className="text-white/90">{task}</span>
                  </div>
                ))}
              </div>
              <a
                href={exp.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="rounded-full border-2 border-[var(--accent-green)] bg-black px-6 py-2 text-sm font-medium text-[var(--accent-green)] transition-all duration-300 hover:bg-[var(--accent-green)] hover:text-black hover:shadow-[0_0_16px_#00ffb2cc]">
                  View Certificate
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrollSection;
