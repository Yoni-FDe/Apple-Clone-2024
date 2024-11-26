import React from "react";
import OneToThree from "./OneToThree";
import { assets } from "../../../assets/images/assets.js";

const SectionOneToThree = () => {
  return (
    <>
      <OneToThree
        className1="top-100"
        className2="fs-6"
        parName={<p>16-inch model</p>}
        className3="fs-1 fw-bold"
        macText={<h1>MacBook Pro</h1>}
        trade="fs-3 fw-medium"
        from="The best for the brightest."
        common1="common-one"
        common2="common-two"
        image={
          <div className="section-one-image">
            <img src={assets.macLaptop} alt=""></img>
          </div>
        }
      />
      <OneToThree
        className1="section-two sect23-common"
        className2="section-two-iphone mb-3"
        parName={<h1>iPhone 11 Pro</h1>}
        className3="section-two-text"
        macText={<h3>Pro cameras. Pro display. Pro performance.</h3>}
        trade="section-two-trade"
        from="From $24.95/mon. or $599 with trade-in."
        common1="common-one comman-hover"
        common2="common-two comman-hover"
      />
      <OneToThree
        className1="section-three sect23-common"
        className2="section-three-iphone mb-3"
        parName={<h1>iPhone 11</h1>}
        className3="section-three-text mb-3"
        macText={<h3>Just the right amount of everything.</h3>}
        trade="section-three-trade"
        from="From $16.62/mon. or $399 with trade-in."
        common1="common-one"
        common2="common-two"
      />
    </>
  );
};

export default SectionOneToThree;
