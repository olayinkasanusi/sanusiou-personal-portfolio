import React, { useState, useEffect } from "react";

const TypeOnce = ({ text, typingSpeed = 75, initDelay = 0 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isReadyToType, setIsReadyToType] = useState(initDelay === 0);

  useEffect(() => {
    if (initDelay > 0) {
      const delayTimeoutId = setTimeout(() => {
        setIsReadyToType(true);
      }, initDelay);

      return () => clearTimeout(delayTimeoutId);
    }
  }, [initDelay]);

  useEffect(() => {
    if (isReadyToType && index < text.length) {
      const typingTimeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(typingTimeoutId);
    }
  }, [isReadyToType, index, text, typingSpeed]);

  return (
    <div className="inline">
      {displayedText}

      {index < text.length && <span className="animate-blink">|</span>}

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
};

export default TypeOnce;

// import React, { useState, useEffect } from 'react';

// const TypeOnce = ({ text, typingSpeed = 75, initialDelayMs = 0 }) => {
//   const [displayedText, setDisplayedText] = useState('');
//   const [index, setIndex] = useState(0);
//   const [isReadyToType, setIsReadyToType] = useState(initialDelayMs === 0);

//   // Effect 1: Handles the initial delay before typing starts
//   useEffect(() => {
//     if (initialDelayMs > 0) {
//       const delayTimeoutId = setTimeout(() => {
//         setIsReadyToType(true);
//       }, initialDelayMs);

//       return () => clearTimeout(delayTimeoutId);
//     }
//   }, [initialDelayMs]);

//   // Effect 2: Handles the typing animation loop itself
//   useEffect(() => {
//     // Only proceed if the delay has passed and we haven't finished typing
//     if (isReadyToType && index < text.length) {
//       const typingTimeoutId = setTimeout(() => {
//         setDisplayedText((prev) => prev + text.charAt(index));
//         setIndex((prev) => prev + 1);
//       }, typingSpeed);

//       return () => clearTimeout(typingTimeoutId);
//     }
//   }, [isReadyToType, index, text, typingSpeed]);

//   return (
//     <div className="p-8 font-mono text-xl text-gray-800 bg-white shadow-xl rounded-lg">
//       {displayedText}

//       {/* Blinking cursor: only render if we are ready to type and haven't finished */}
//       {isReadyToType && index < text.length && (
//         <span className="animate-blink font-bold text-indigo-600">|</span>
//       )}

//       <style>{`
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         .animate-blink {
//           animation: blink 1s step-end infinite;
//         }
//       `}</style>
//     </div>
//   );
// };
