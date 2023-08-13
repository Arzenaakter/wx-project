const SingleCard = ({ photo, title, description }) => {
  return (
    <div className=" h-[460px] w-[413px] rounded-3xl border border-black flex flex-col justify-between">
      <img src={photo} alt="" className="m-10 w-[96px] h-[96px]" />
      <div className="m-10 ">
        <h1 className="text-[40px] font-bold italic text-[#333232]">{title}</h1>
        <p className="text-[24px] text-[#333232] ">{description}</p>
      </div>
    </div>
  );
};

export default SingleCard;
