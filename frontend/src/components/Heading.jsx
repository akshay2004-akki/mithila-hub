/* eslint-disable react/prop-types */

function Heading({heading, psudo}) {
  return (
    <h2 className={` relative text-3xl font-bold font-poppins text-center mb-12 before:content-['${psudo}'] before:absolute before:text-maroon before:text-[13px] md:before:text-[15px] before:top-[-20px] before:left-1/2 before:-translate-x-1/2 before:translate-y-[50px]`}>
      <span className="relative z-10 text-2xl md:text-3xl px-4 bg-slate-100">
        {heading}
      </span>
      <span className="absolute inset-0 flex items-center">
        <span className="flex-1 w-10 h-[3px] bg-maroon"></span>
        <span className="flex-1 w-10 h-[3px] bg-maroon"></span>
      </span>
    </h2>
  );
}

export default Heading;
