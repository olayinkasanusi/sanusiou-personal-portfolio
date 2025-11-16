function Icons({ icon, tech }) {
  return (
    <div className="rounded-lg bg-[#242938] px-4 py-2 flex flex-col items-center justify-between ">
      <span>
        <img src={icon} alt={tech} className="w-10" />
      </span>
      <span className="font-raleway text-sm text-gray-100 font-medium">
        {tech}
      </span>
    </div>
  );
}

export default Icons;
