import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Code, Award, FileCode, Layers, LucideIcon } from "lucide-react";

interface Milestone {
  year: number;
  title: string;
  description: string;
  x: number;
  y: number;
  labelPos: string;
  icon: LucideIcon;
}

const milestones: Milestone[] = [
  {
    year: 2021,
    title: "HTML/CSS/BootStrap",
    description: "First static sites & DOM manipulation.",
    x: 100,
    y: 300,
    labelPos: "bottom",
    icon: Code,
  },
  {
    year: 2023,
    title: "Responsive Web-Design Certification",
    description: "certified by freecodecamp.org",
    x: 350,
    y: 100,
    labelPos: "top",
    icon: Award,
  },
  {
    year: 2023,
    title: "Javascript",
    description: "DOM Manipulation | APIs | Array Methods",
    x: 600,
    y: 250,
    labelPos: "bottom",
    icon: FileCode,
  },
  {
    year: 2023,
    title: "Modern Frameworks",
    description: "React.Js | Next.js | Redux | SSR",
    x: 900,
    y: 70,
    labelPos: "top",
    icon: Layers,
  },
];

const getPathD = (milestones: Milestone[]): string => {
  if (milestones.length === 0) return "";
  let d = `M ${milestones[0].x} ${milestones[0].y}`;

  for (let i = 1; i < milestones.length; i++) {
    const prev = milestones[i - 1];
    const curr = milestones[i];
    const midX = (prev.x + curr.x) / 2;
    d += ` C ${midX} ${prev.y}, ${midX} ${curr.y}, ${curr.x} ${curr.y}`;
  }
  return d;
};

interface MilestoneNodeProps {
  milestone: Milestone;
  isVisible: boolean;
}

const MilestoneNode = ({ milestone, isVisible }: MilestoneNodeProps) => {
  const { x, y, year, title, description, labelPos } = milestone;
  const textYOffset = labelPos === "top" ? -20 : 30;
  const descriptionYOffset = labelPos === "top" ? -55 : 45;

  return (
    <g transform={`translate(${x}, ${y})`} className="group">
      <circle
        r="10"
        className={`fill-blue-600 stroke-[4px] stroke-white transition-all duration-700 ease-out cursor-pointer 
          ${
            isVisible
              ? "opacity-100 scale-100 group-hover:scale-[1.4] group-hover:rotate-12"
              : "opacity-0 scale-0"
          }`}
        style={{ transitionDelay: "2.5s" }}
      />
      <text
        className={`font-light text-md fill-slate-500 font-sans transition-opacity duration-700 
          ${isVisible ? "opacity-100" : "opacity-0"}`}
        y={textYOffset}
        textAnchor="middle"
        style={{ transitionDelay: "1.0s" }}
      >
        {year}
      </text>
      <text
        className={`font-semibold text-sm fill-slate-900 font-sans transition-opacity duration-700 
          ${isVisible ? "opacity-100" : "opacity-0"}`}
        y={descriptionYOffset}
        textAnchor="middle"
        style={{ transitionDelay: "1.2s" }}
      >
        {title}
      </text>
      <text
        className={`text-xs fill-slate-500 transition-opacity duration-700 
          ${isVisible ? "opacity-100" : "opacity-0"}`}
        y={descriptionYOffset + 15}
        textAnchor="middle"
        style={{ transitionDelay: "1.3s" }}
      >
        {description}
      </text>
    </g>
  );
};

const CareerPath = () => {
  const pathD = getPathD(milestones);
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [pathD]);

  useEffect(() => {
    if (pathLength === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [pathLength]);

  return (
    <div className="bg-transparent p-0 sm:p-4 flex w-full flex-col items-center justify-center font-sans">
      {/* 1. Desktop & Tablet Large Screen SVG Canvas Timeline */}
      <div className="hidden md:block w-full h-auto overflow-x-auto" ref={containerRef}>
        <svg
          viewBox="0 0 1000 400"
          className="w-full h-full min-w-[700px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            d={pathD}
            className="stroke-blue-200 fill-none stroke-[6px]"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: pathLength,
              strokeDashoffset: isVisible ? 0 : pathLength,
              transition:
                pathLength > 0 ? "stroke-dashoffset 2.5s ease-in-out" : "none",
            }}
          />
          <path
            d={pathD}
            className="stroke-blue-600 fill-none stroke-[2px]"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {milestones.map((milestone, index) => (
            <MilestoneNode
              key={index}
              milestone={milestone}
              isVisible={isVisible}
            />
          ))}
        </svg>
      </div>

      {/* 2. Mobile/Tablet Portrait Screens Vertical Adaptive Timeline */}
      <div className="block md:hidden w-full max-w-md mx-auto relative pl-8 py-4">
        {/* Connector solid/dashed guide-line */}
        <div className="absolute left-[15px] top-0 bottom-0 w-0.5 border-l-2 border-dashed border-blue-200" />

        <div className="space-y-6">
          {milestones.map((milestone, idx) => {
            const Icon = milestone.icon;
            return (
              <motion.div
                key={idx}
                className="relative text-left"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
              >
                {/* Glowing Round Icon Badge */}
                <div className="absolute -left-[27px] top-1.5 w-7 h-7 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shadow-[0_0_12px_rgba(37,99,235,0.15)] z-10">
                  <Icon size={12} className="text-blue-600" />
                </div>

                {/* Responsive Content Card */}
                <div className="bg-white/40 backdrop-blur-md border border-slate-200/50 rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:border-blue-400/40 hover:bg-white/60 transition-all duration-300">
                  <span className="text-[10px] font-extrabold text-blue-600 bg-blue-50 border border-blue-500/10 px-2 py-0.5 rounded-full uppercase tracking-wider font-sans">
                    {milestone.year}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 font-sans mt-2.5">
                    {milestone.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-sans font-light mt-1 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CareerPath;
