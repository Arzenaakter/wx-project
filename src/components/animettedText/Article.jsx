import { useEffect, useState } from "react";
import "./Article.css";

const Article = () => {
  const [transitioned, setTransitioned] = useState(false);
  const [wordReplaced, setWordReplaced] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setTransitioned(true);
    }, 1000);

    const timeout2 = setTimeout(() => {
      setWordReplaced(true);
    }, 3000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);
  const getTransitionedLetter = (letter) => {
    switch (letter) {
      case "u":
        return <div className="transition-right-arrow">→</div>;
      case "e":
        return <div className="transition-e">e</div>;
      case "h":
        return <div className="transition-up-arrow">↑</div>;
      default:
        return letter;
    }
  };
  return (
    <div className="flex justify-center mt-5 mb-10 p-10">
      <div className="text-[64px] font-bold text-[#333232]">
        <h1>We'd love to help</h1>
        <h1 className="ml-[150px] mt-2">Solve your</h1>
        <h1 className="ml-[80px] mt-2">
          <div className="flex">
            {wordReplaced ? (
              <div className="transitioned">Marketing</div>
            ) : (
              "Outreach"
                .split("")
                .map((char, index) => (
                  <div key={index}>
                    {transitioned ? getTransitionedLetter(char) : char}
                  </div>
                ))
            )}
            <div className="ml-3">Problems</div>
          </div>
        </h1>
      </div>
      <p className=" text-[16px] mt-24 ml-[-95px] text-[#5C5C5B] h-[76px] w-[241px] font-[400]">
        We know that you care about your business as much as we do, and we're
        committed to helping you grow
      </p>
    </div>
  );
};

export default Article;
