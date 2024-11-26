import React from "react";

const Five = (props) => {
  return (
    <div className="col-md-6">
      {/*<!-------- START: section five --------> */}
      <div className={props.fiveOne}>
        <div className={props.fiveTwo}>{props.fiveThree}</div>
        <div className={props.fiveFour}>{props.fiveFive}</div>

        <div className={props.fiveSix}>
          <div className="common-one comman-hover">{props.fiveSeven}</div>
          <div className="common-two comman-hover">{props.fiveSevenOther}</div>
          {props.fiveEight}
        </div>
      </div>
      {/* <!----------- END: section five ---------->*/}
    </div>
  );
};

export default Five;
