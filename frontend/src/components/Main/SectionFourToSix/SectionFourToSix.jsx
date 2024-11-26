import React from "react";
import Four from "./Four";
import Five from "./Five";
import Six from "./Six";
import { assets } from "../../../assets/images/assets";

const SectionFourToSix =()=> {
    return (
      <section className="container-fluid mt-3">
        {/* <!------ START: section 4-6 ------->  */}
        <div className="row g-3">
          <Four
            fourOne="section-four-one section-4-common"
            fourTwo="section-four-watch mb-2"
            fourThree={assets.watchSeries}
            fourFour={
              <p>
                With the new Always-On retina display. <br />
                You are never seen a watch like this.
              </p>
            }
          />
          <Four
            fourOne="section-four-two section-4-common"
            fourTwo="section-four-card mb-3"
            fourThree={assets.appleCard}
            fourFour={
              <p>
                {" "}
                Get 3% Daily cash on purchases from <br /> Apple using Apple
                Card.
              </p>
            }
          />
          <Five
            fiveOne="section-five-one section-5-common"
            fiveTwo="section-five-tv"
            fiveThree={<img src={assets.appleTv} alt=""></img>}
            fiveFour="section-five-servant"
            fiveFive={<img src={assets.servantLogo} alt=""></img>}
            fiveSix="section-five-watch"
            fiveEight={<a href="#">Watch the trailer</a>}
          />
          <Five
            fiveOne="section-five-two section-5-common"
            fiveTwo="section-five-air mb-4"
            fiveThree={<h2>AirPods Pro</h2>}
            fiveFour="section-five-text"
            fiveFive={<p>Magic like you have never heard.</p>}
            fiveSix="common-section"
            fiveSeven={<a href="#">Learn More </a>}
            fiveSevenOther={<a href="#">Buy </a>}
          />

          <Six
            sixOne="section-six-one section-6-common"
            sixTwo="section-six-model"
            sixThree={<p>16-inch model</p>}
            sixFour="section-six-mac"
            sixFive={<h1>MacBook Pro</h1>}
            sixSix={<p>The best for the brightest.</p>}
            sixSeven="common-section sec-six-other"
          />
          <Six
            sixOne="section-six-two section-6-common"
            sixTwo="mb-3"
            sixThree={<img src={assets.newIpad} alt="" />}
            sixFour="section-six-text"
            sixFive={<p>Like a Computer. Unlike any computer</p>}
            sixSeven="common-section"
          />
        </div>
        {/* <!---------- END: section 4-6 --> */}
      </section>
    );
  }

export default SectionFourToSix;
