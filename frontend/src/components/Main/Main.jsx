import React from "react";
import "./Main.css";
import SectionFourToSix from "./SectionFourToSix/SectionFourToSix";
import SectionOneToThree from "./SectionOneToThree/SectionOneToThree";
import YoutubeVideo from "../YoutubeVideos/YoutubeVideo";
const Main = () => {
  return (
    <>
      <SectionOneToThree />
      <SectionFourToSix />
      <YoutubeVideo />
    </>
  );
};

export default Main;
