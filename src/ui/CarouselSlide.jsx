const CarouselSlide = ({ slide, isActive }) => (
  <div
    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
      isActive ? "opacity-100" : "opacity-0"
    }`}
  >
    <img
      src={slide.img}
      className="w-full h-full object-cover"
      alt={slide.title}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          "https://placehold.co/1000x600/000000/ffffff?text=Image+Failed+to+Load";
      }}
    />
    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-8">
      <h2 className="text-white text-3xl font-bold md:text-5xl">
        {slide.title}
      </h2>
    </div>
  </div>
);

export default CarouselSlide;
