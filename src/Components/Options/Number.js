import React, { useState } from "react";
import "./Option.css";

const NumberOption = () => {
  const [numberOption, setNumberOption] = useState({
    placeholder: "",
    min: "",
    max: "",
  });
  const handleChange = (event) => {
    console.log("yes");
    const { name, value } = event.target;
    setNumberOption(() => {
      return {
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="box">
        <label className="label">Option 1</label>
        <div className="inner_box">
          <input
            className="option_main"
            type="text"
            placeholder="Placeholder"
            name="placeholder"
            value={numberOption.placeholder}
            onChange={handleChange}
          />
          <input
            className="option_min"
            type="text"
            placeholder="Min"
            name="min"
            value={numberOption.min}
            onChange={handleChange}
          />
          <input
            className="option_min"
            type="text"
            placeholder="Max"
            name="max"
            value={numberOption.max}
            onChange={handleChange}
          />
          <i className="fas fa-minus-circle"></i>
        </div>
      </div>
      <i className="fas fa-plus-circle"></i>
    </>
  );
};

export default NumberOption;
