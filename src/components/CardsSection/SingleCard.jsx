const SingleCard = ({ photo, title, description }) => {
  return (
    <div className=" lg:h-[460px] lg:w-[413px] w-[320px] h-[330px] rounded-3xl border border-black flex flex-col justify-between">
      <img src={photo} alt="" className="m-10 w-[96px] h-[96px]" />
      <div className="m-10 ">
        <h1 className="lg:text-[40px] text-[20px] font-bold italic text-[#333232]">
          {title}
        </h1>
        <p className="lg:text-[24px] text-[12px] text-[#333232] ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SingleCard;
