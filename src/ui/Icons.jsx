function Icons({ icon, tech }) {
  return (
    <div className="rounded-2xl opacity-80 bg-[#d7d8db] px-4 py-2 flex flex-col items-center justify-between ">
      <span>
        <img src={icon} alt={tech} className="w-10" />
      </span>
      <span className="font-roboto text-sm text-gray-500 font-medium">
        {tech}
      </span>
    </div>
  );
}

export default Icons;
