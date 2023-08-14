import React from "react";
import Button from "../Button";
import logo from "../../assets/image-1.png";
import logo2 from "../../assets/image-2.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#333232] h-[442px] grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className=" bg-[#333232] h-full flex flex-col justify-between py-10 ps-10 border-r border-gray-500">
          <h1 className="bg-[#333232] text-white text-[40px] font-bold w-[219px]">
            Let’s Work Together
          </h1>
          <div className="bg-[#333232]">
            {" "}
            <Button title="Get Started"></Button>
          </div>
        </div>
        {/* divide */}
        <div className=" bg-[#333232] h-full flex flex-col justify-between py-10 ps-10 border-r border-gray-500">
          <div className="bg-[#333232]">
            <h1 className="bg-[#333232] text-white text-[32px] font-bold w-[219px]">
              Menu
            </h1>
            <p className="text-[#CBBFAC] text-[20px] bg-[#333232]">
              How it Works
            </p>
            <p className="text-[#CBBFAC] text-[20px] bg-[#333232]">Services</p>
            <p className="text-[#CBBFAC] text-[20px] bg-[#333232]">Contact</p>
          </div>
          <div className="bg-[#333232] flex items-center gap-4">
            <div className="image-wrapper">
              <img src={logo} alt="" className="w-[119px]  bg-[#333232]" />
              <img
                src={logo2}
                alt=""
                className="w-[119px]  bg-[#333232] hover-image"
              />
            </div>
            <h1 className="font-bold text-[32px] bg-[#333232] text-white">
              X.com
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
