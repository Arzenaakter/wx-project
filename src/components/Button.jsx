const Button = ({ title }) => {
  return (
    <>
      <button className="gradient-button lg:w-[150px] w-[80px] text-[12px] lg:text-[16px] h-[51px] font-bold ">
        {title}
      </button>
    </>
  );
};

export default Button;
