import React from "react";

const OneToThree = (props) => {
  //destructuring
  // let {className1,className2,className3,parName,macText,trade,from,common1,common2,image}=this.props
  return (
    <section className={props.className1}>
      {/* <!-------- START: section one to three -----> */}
      <div className="container text-center">
        <div className={props.className2}>{props.parName}</div>
        <div className={props.className3}>{props.macText}</div>
        <div className={props.trade}>
          <p>{props.from}</p>
        </div>
        <div className="common-section">
          <div className={props.common1}>
            <a href="#">Learn more </a>
          </div>
          <div className={props.common2}>
            <a href="#">Buy </a>
          </div>
        </div>
        {props.image}
      </div>
      {/* <!-------- END: section one to three -------->*/}
    </section>
  );
};

export default OneToThree;
