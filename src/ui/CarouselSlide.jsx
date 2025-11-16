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
    />
    <div className="absolute inset-0 bg-transparent flex items-end p-8">
      <h2 className="text-white text-2xl font-raleway font-semibold md:text-5xl">
        {slide.title}
      </h2>
    </div>
  </div>
);

export default CarouselSlide;
