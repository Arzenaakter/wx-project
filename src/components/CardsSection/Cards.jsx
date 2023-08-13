import SingleCard from "./SingleCard";
import img from "../../assets/ph-1.png";

const Cards = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 my-20  ">
      <SingleCard
        photo={img}
        title="Pause"
        description="want to take a break? Pause our services anytime"></SingleCard>
      <div className="col-span-2 ...">
        <h1 className="border">Why choose us? what makes us different?</h1>
      </div>
      <SingleCard
        photo={img}
        title="Super fast"
        description="See consistent work in action, super fast."></SingleCard>
      <SingleCard
        photo={img}
        title="Built to perform"
        description="Our experienced team of market strategists make sure to come up with the best strategies"></SingleCard>
      <SingleCard
        photo={img}
        title="Tailored for you"
        description="Your experience with us will be customfit and exclusive to you"></SingleCard>
      <div className="col-span-2 ..."></div>
      <SingleCard
        photo={img}
        title="Premium quality"
        description="Get your ads run by professionals and revise until you're 100% satisfied"></SingleCard>
    </div>
  );
};

export default Cards;
