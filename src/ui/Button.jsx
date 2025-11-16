function Button({ children, roundedFull, size, onClick }) {
  return (
    <button
      className={`bg-[#007bff] text-white  font-raleway ${
        roundedFull ? "rounded-full" : "rounded-lg"
      } ${
        size === "small"
          ? "py-1.5 font-light text-sm"
          : "font-semibold  py-3 px-2"
      } shadow-lg transition duration-300 border border-white hover:bg-[#125aa7] w-40`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
