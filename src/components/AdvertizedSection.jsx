import AdCard from "./AdCard";

const AdvertizedSection = () => {
  const AdvertizedData = [
    {
      id: "01",
      title: "Apply",
      description:
        "Select a plan and schedule an onboarding call to get started.",
      border: "border-dashed border-l-2 border-black h-28 ml-10 my-3",
    },
    {
      id: "02",
      title: "review",
      description:
        "We’ll review your request and get back to you in 2-3 business days on average.",
      border: "border-dashed border-l-2 border-black h-28 ml-10 my-3",
    },
    {
      id: "03",
      title: "iterate",
      description:
        "We'll revise and continuously iterate to get better results, everytime",
      border: "",
    },
  ];

  return (
    <div className="container mx-auto mb-28">
      <div>
        <div></div>
      </div>
      <div className="flex flex-col">
        {AdvertizedData.map((data) => (
          <AdCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default AdvertizedSection;
