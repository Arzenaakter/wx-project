const AdCard = ({ data }) => {
  const { title, id, description, border } = data;
  return (
    <div className="">
      <div className="flex gap-8">
        <div className="w-[97px] h-[97px] rounded-full border-black border-2 flex items-center justify-center">
          <h1 className="text-[48px] font-semibold">{id}</h1>
        </div>
        <div>
          <h1 className="text-[48px] font-bold">{title}</h1>
          <p className="text-[16px] font-semibold text-[#5C5C5B] w-[265px]">
            {description}
          </p>
        </div>
      </div>
      <div className={border}> </div>
    </div>
  );
};

export default AdCard;
