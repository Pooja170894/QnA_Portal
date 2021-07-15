import React, { useState } from "react";

const Slider = () => {
  const [range, setRange] = useState(25);
  return (
    <>
      <div className="box">
        <label className="label">Option 1</label>
        <div className="inner_box">
          <input
            className="slider"
            type="range"
            min="10"
            max="100"
            onChange={(event) => setRange(event.target.value)}
          />
          <h4 className="heading">{range}</h4>
          <i className="fas fa-minus-circle"></i>
        </div>
      </div>
      <i className="fas fa-plus-circle"></i>
    </>
  );
};

export default Slider;
