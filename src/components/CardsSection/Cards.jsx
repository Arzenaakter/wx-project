import SingleCard from "./SingleCard";
import img1 from "../../assets/ph-1.png";
import img2 from "../../assets/ph-2.png";
import img3 from "../../assets/ph-3.png";
import img4 from "../../assets/ph-4.png";
import img5 from "../../assets/ph-5.png";

const Cards = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 my-20  ">
      <SingleCard
        photo={img1}
        title="Pause"
        description="want to take a break? Pause our services anytime"></SingleCard>
      <div className=" flex items-center ms-28 col-span-2 ...">
        <h1 className="italic font-bold text-[48px] ">
          Why choose us? <br /> what makes us different?
        </h1>
      </div>
      <SingleCard
        photo={img2}
        title="Super fast"
        description="See consistent work in action, super fast."></SingleCard>
      <SingleCard
        photo={img3}
        title="Built to perform"
        description="Our experienced team of market strategists make sure to come up with the best strategies"></SingleCard>
      <SingleCard
        photo={img4}
        title="Tailored for you"
        description="Your experience with us will be customfit and exclusive to you"></SingleCard>
      <div className="col-span-2 ..."></div>
      <SingleCard
        photo={img5}
        title="Premium quality"
        description="Get your ads run by professionals and revise until you're 100% satisfied"></SingleCard>
    </div>
  );
};

export default Cards;
