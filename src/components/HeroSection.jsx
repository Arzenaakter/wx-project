import hero from "../assets/Frame-19.png";

import heroBottomImg from "../assets/solvv.png";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-10 lg:px-0">
      <img src={hero} alt="" className="w-full " />
      <div className=" my-10">
        <img src={heroBottomImg} alt="" />
      </div>
      <div className="lg:w-[964px] w-auto my-36 h-[268px] ">
        <h1 className=" text-[#333232] lg:text-[56px] text-[20px]  font-bold ">
          “The real fact of the matter is that nobody reads ads. People read
          what interests them, and sometimes it’s an ad”
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
