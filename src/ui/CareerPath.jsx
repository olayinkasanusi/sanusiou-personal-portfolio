import React, { useState, useEffect, useRef } from "react";

const milestones = [
  {
    year: 2021,
    title: "HTML/CSS/BootStrap",
    description: "First static sites & DOM manipulation.",
    x: 100,
    y: 300,
    labelPos: "bottom",
  },
  {
    year: 2023,
    title: "Responsive Web-Design Certification",
    description: "certified by freecodecamp.org",
    x: 350,
    y: 100,
    labelPos: "top",
  },
  {
    year: 2024,
    title: "Javascript",
    description: "DOM Manipulation | APIs | Array Methods",
    x: 600,
    y: 250,
    labelPos: "bottom",
  },
  {
    year: 2024,
    title: "Modern Frameworks",
    description: "React.Js | Next.js | Redux | SSR",
    x: 900,
    y: 70,
    labelPos: "top",
  },
];

const getPathD = (milestones) => {
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

const MilestoneNode = ({ milestone, isVisible }) => {
  const { x, y, year, title, description, labelPos } = milestone;

  const textYOffset = labelPos === "top" ? -20 : 30;
  const descriptionYOffset = labelPos === "top" ? -55 : 45;

  return (
    <g transform={`translate(${x}, ${y})`} className="group">
      <circle
        r="10"
        className={`fill-amber-400 stroke-4 stroke-gray-800 transition-all duration-700 ease-out cursor-pointer 
          ${
            isVisible
              ? "opacity-100 scale-100 group-hover:scale-[1.4] group-hover:rotate-12"
              : "opacity-0 scale-0"
          }`}
        style={{ transitionDelay: "2.5s" }}
      />

      <text
        className={`font-light text-md fill-gray-300 font-raleway transition-opacity duration-700 
          ${isVisible ? "opacity-100" : "opacity-0"}`}
        y={textYOffset}
        textAnchor="middle"
        style={{ transitionDelay: "1.0s" }}
      >
        {year}
      </text>

      <text
        className={`font-semibold text-sm fill-white font-raleway transition-opacity duration-700 
          ${isVisible ? "opacity-100" : "opacity-0"}`}
        y={descriptionYOffset}
        textAnchor="middle"
        style={{ transitionDelay: "1.2s" }}
      >
        {title}
      </text>

      <text
        className={`text-xs fill-white transition-opacity duration-700 
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
  const pathRef = useRef(null);
  const containerRef = useRef(null);
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
            // console.log(entry);
            setIsVisible(true);
            setTimeout(() => {
              setIsVisible(true);
            }, 1000);
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
    <div className="bg-[##0A192F] p-4 sm:p-6 flex w-full overflow-x-auto flex-col items-center justify-center font-raleway">
      <div className="w-full h-auto overflow-x-auto" ref={containerRef}>
        <svg
          viewBox="0 0 1000 400"
          className="w-full h-full min-w-[700px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            d={pathD}
            className="stroke-blue-500 fill-none stroke-[6px]"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: pathLength,
              strokeDashoffset: isVisible ? 0 : pathLength,
              transition:
                pathLength > 0 ? "stroke-dashoffset 2.5s ease-in-out" : "none",
            }}
          />

          {milestones.map((milestone, index) => (
            <MilestoneNode
              key={index}
              milestone={milestone}
              isVisible={isVisible}
            />
          ))}
        </svg>
        {/* </div> */}
      </div>
    </div>
  );
};

export default CareerPath;
