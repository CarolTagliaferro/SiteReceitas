import React from "react";
import FirstSection from "./components/firstSection";
import SecondSection from "./components/secondSection";

import LastSection from "./components/lastSection";
import ThirdSection from "./components/thirdSection";
import FourthSection from "./components/fourthSection";

const Home = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <LastSection />
    </div>
  );
};

export default Home;
