function Button({ children }) {
  return (
    <button className="bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 border border-white font-roboto hover:bg-[#007bff]">
      {children}
    </button>
  );
}

export default Button;
