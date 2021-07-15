import React, { useState } from "react";
import "./Option.css";

const Text = () => {
  const [textOption, setTextOption] = useState({
    placeholder: "",
    min: "",
    max: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTextOption(() => {
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
            value={textOption.placeholder}
            onChange={handleChange}
          />
          <input
            className="option_min"
            type="text"
            placeholder="Min"
            name="min"
            value={textOption.placeholder}
            onChange={handleChange}
          />
          <input
            className="option_min"
            type="text"
            placeholder="Max"
            name="max"
            value={textOption.placeholder}
            onChange={handleChange}
          />
          <i className="fas fa-minus-circle"></i>
        </div>
      </div>
      <i className="fas fa-plus-circle"></i>
    </>
  );
};

export default Text;
