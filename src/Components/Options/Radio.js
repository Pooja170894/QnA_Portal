import React, { useState } from "react";

const Radio = () => {
  const [os, setOs] = useState("Windows");

  const handleChange = (event) => {
    setOs(event.target.value);
  };
  return (
    <>
      <div className="box">
        <label className="label">Option 1</label>
        <div className="inner_box">
          <div className="radio">
            <input
              value={os}
              name="platform"
              type="radio"
              onChange={handleChange}
            />
            Windows
            <input
              value={os}
              name="platform"
              type="radio"
              onChange={handleChange}
            />
            Linux
            <input
              value={os}
              name="platform"
              type="radio"
              onChange={handleChange}
            />
            Mac
          </div>
          <i className="fas fa-minus-circle"></i>
        </div>
      </div>
      <i className="fas fa-plus-circle"></i>
    </>
  );
};

export default Radio;
