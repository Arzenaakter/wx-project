import Button from "./Button";

const StillNotSection = () => {
  return (
    <div className="text-center my-28 space-y-6 text-[#333232]">
      <h1 className="lg:text-[64px] text-[40px] font-bold">
        Still not convinced?
      </h1>
      <p className="lg:text-[20px] text-[12px]">
        Schedule a call to learn more about how we can change the <br /> way you
        view sourcing your ads...forever.
      </p>
      <Button title="schedule a call"></Button>
    </div>
  );
};

export default StillNotSection;
