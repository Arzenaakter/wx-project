import arrow from "../assets/arrow.png";
import rightArrow from "../assets/rightArrow.png";

const HowIt = () => {
  return (
    <div className="my-44">
      <marquee
        className="text-[96px] font-bold text-[#333232] "
        behavior="scroll"
        direction="left"
        scrollamount="10">
        <div className="flex gap-10 justify-center items-center">
          <h1> how it works</h1>
          <img src={arrow} alt="" className="w-[99.5px] h-[99px]" />{" "}
          <img src={rightArrow} alt="" className="w-[99.5px] h-[99px]" />
          <h1> how it works</h1>
        </div>
      </marquee>
    </div>
  );
};

export default HowIt;
