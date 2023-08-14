import img1 from "../assets/image-1.png";
import Button from "./Button";
import img2 from "../assets/image-2.png";

const Navbar = () => {
  return (
    <div className="bg-white flex justify-between items-center w-auto lg:w-[685px] h-[84px] mx-auto lg:px-6  mt-[47px] rounded-[30px] px-10">
      <div className="image-wrapper">
        <img src={img1} alt="" className="w-10 bg-white " />
        <img src={img2} alt="" className="w-10 bg-white hover-image " />
      </div>
      <div className="ms-4 lg:ms-0">
        <ul className="flex gap-10 bg-white ">
          <li className="bg-white lg:text-[16px] text-[12px]">How It works</li>
          <li className="bg-white lg:text-[16px] text-[12px]">Services</li>
          <li className="bg-white lg:text-[16px] text-[12px]">Contact</li>
        </ul>
      </div>
      <div className="bg-white ms-2 lg:ms-0">
        <Button title="Get Started"></Button>
      </div>
    </div>
  );
};

export default Navbar;
