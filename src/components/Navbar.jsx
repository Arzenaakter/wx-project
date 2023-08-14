import img1 from "../assets/image-1.png";
import Button from "./Button";
// import img2 from "../assets/image-2.png";

const Navbar = () => {
  return (
    <div className="bg-white flex justify-between items-center w-[685px] h-[84px] mx-auto px-6  mt-[47px] rounded-[30px]">
      <div>
        {" "}
        <img src={img1} alt="" className="w-10" />
      </div>
      <div>
        <ul className="flex gap-10 bg-white ">
          <li className="bg-white">How It works</li>
          <li className="bg-white">Services</li>
          <li className="bg-white">Contact</li>
        </ul>
      </div>
      <div className="bg-white">
        <Button title="Get Started"></Button>
      </div>
    </div>
  );
};

export default Navbar;
