function Button({ children }) {
  return (
    <button className="bg-[#007bff] text-white font-semibold font-raleway py-3 px-2 rounded-full shadow-lg transition duration-300 border border-white hover:bg-[#125aa7] w-40">
      {children}
    </button>
  );
}

export default Button;
