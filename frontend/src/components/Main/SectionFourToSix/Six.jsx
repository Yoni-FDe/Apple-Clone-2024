import React from "react";

const Six = (props) => {
  return (
    <div className="col-md-6">
      {/*<!------ START section six --------> */}
      <div className={props.sixOne}>
        <div className={props.sixTwo}>{props.sixThree}</div>
        <div className={props.sixFour}>{props.sixFive}</div>
        <div className="section-six-text">{props.sixSix}</div>
        <div className={props.sixSeven}>
          <div className="common-one">
            <a href="#">Learn more </a>
          </div>
          <div className="common-two">
            <a href="#">Buy </a>
          </div>
        </div>
      </div>
      {/* <!------ END: section six --> */}
    </div>
  );
};

export default Six;
