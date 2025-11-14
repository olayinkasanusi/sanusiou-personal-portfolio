const CarouselButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 transform -translate-y-1/2 text-white z-10 bg-black bg-opacity-40 hover:bg-opacity-60 transition-all rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
    style={{ [direction === "prev" ? "left" : "right"]: "1rem" }}
    aria-label={direction === "prev" ? "Previous Slide" : "Next Slide"}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {direction === "prev" ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      )}
    </svg>
  </button>
);

export default CarouselButton;
