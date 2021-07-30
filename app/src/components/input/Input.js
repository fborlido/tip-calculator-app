import React from "react";
import iconDollar from "../../assets/icon-dollar.svg";
import iconPerson from "../../assets/icon-person.svg";

const Input = () => {
  return (
    <form action="">
      <div className="control">
        <label htmlFor="bill">Bill</label>
        <div className="input-holder">
          <input type="text" />
          <img src={iconDollar} alt="" />
        </div>
      </div>
      <div className="control">
        <label htmlFor="tip">Select Tip %</label>
        <div className="btn-list">
          <button className="btn" onClick={(e) => e.preventDefault()}>5%</button>
          <button className="btn">10%</button>
          <button className="btn">15%</button>
          <button className="btn">25%</button>
          <button className="btn">50%</button>
          <button className="btn">Custom</button>
        </div>
      </div>
      <div className="control">
        <label htmlFor="people">Number of People</label>
        <div className="input-holder">
        <input type="text" />
        <img src={iconPerson} alt="" />
        </div>
      </div>
    </form>
  );
};

export default Input;
