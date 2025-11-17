import React, { useState, useEffect } from "react";
import CarouselButton from "./CarouselButton";
import CarouselSlide from "./CarouselSlide";

function Carousel({ slidesData, color }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  function nextSlide() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  }

  function prevSlide() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length
    );
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.targetTouches[0].clientX;
    const diff = touchStart - touchEnd;
    const swipeThreshold = 50;

    if (diff > swipeThreshold) {
      nextSlide();
    } else if (diff < -swipeThreshold) {
      prevSlide();
    }
    setTouchStart(null);
  };

  return (
    <div className="bg-transparent w-full flex items-center justify-center sm:p-4 font-montserrat">
      <div className="w-full max-w-5xl shadow-2xl rounded-xl overflow-hidden bg-white">
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "60vh" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchMove}
        >
          {slidesData.map((slide, index) => (
            <CarouselSlide
              key={slide.id}
              slide={slide}
              color={color}
              isActive={index === currentIndex}
            />
          ))}

          <CarouselButton direction="prev" onClick={prevSlide} />
          <CarouselButton direction="next" onClick={nextSlide} />

          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
            {slidesData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white scale-110 opacity-100"
                    : "bg-white opacity-50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
