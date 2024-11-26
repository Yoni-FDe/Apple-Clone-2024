import React from "react";

const Four = (props) => {
  return (
    <div className="col-md-6">
      {/* <!--------- START: section four ------> */}
      <div className={props.fourOne}>
        <div className={props.fourTwo}>
          <img src={props.fourThree} alt=""></img>
        </div>
        <div className="section-four-text">{props.fourFour}</div>
        <div className="common-section">
          <div className="common-one">
            <a href="#">Learn more </a>
          </div>
          <div className="common-two">
            <a href="#">Buy </a>
          </div>
        </div>
      </div>
      {/* <!-------- END: section four --------->*/}
    </div>
  );
};

export default Four;
