import { SlideData } from "../../data/projects";

interface CarouselSlideProps {
  slide: SlideData;
  isActive: boolean;
  color?: string;
}

function CarouselSlide({ slide, isActive }: CarouselSlideProps) {
  return (
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
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end p-8">
        <h2 className="text-xl font-sans font-bold md:text-3xl text-white">
          {slide.title}
        </h2>
      </div>
    </div>
  );
}

export default CarouselSlide;
