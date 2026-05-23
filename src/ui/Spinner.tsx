function Spinner() {
  return (
    <div className="w-full h-dvh flex items-center justify-center bg-white engineering-grid fixed top-0 left-0 z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-slate-100"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-blue-600 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        </div>
        <p className="text-slate-500 text-sm font-sans font-medium tracking-wide">
          Loading
        </p>
      </div>
    </div>
  );
}

export default Spinner;
