import hero from "../assets/Frame-19.png";

import heroBottomImg from "../assets/solvv.png";

const HeroSection = () => {
  return (
    <div className="container mx-auto">
      <img src={hero} alt="" className="w-full " />
      <div className=" my-10">
        <img src={heroBottomImg} alt="" />
      </div>
      <div className="w-[964px] my-36 h-[268px] ">
        <h1 className=" text-[#333232] text-[56px] font-bold ">
          “The real fact of the matter is that nobody reads ads. People read
          what interests them, and sometimes it’s an ad”
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
