import React, { useState } from "react";
import "./Option.css";

const TextareaOption = () => {
  const [optionFields, setOptionFields] = useState([
    {
      placeholder: "",
      min: "",
      max: "",
      rows: "",
    },
  ]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOptionFields((prevData) => {
      return {
        ...prevData,
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
            value={optionFields.placeholder}
            onChange={handleChange}
          />
          <input
            className="option_min"
            type="text"
            placeholder="Min"
            name="min"
            value={optionFields.min}
            onChange={handleChange}
          />
          <input
            className="option_min"
            type="text"
            placeholder="Max"
            name="max"
            value={optionFields.max}
            onChange={handleChange}
          />
          <input
            className="option_min"
            type="text"
            placeholder="Rows"
            name="rows"
            value={optionFields.rows}
            onChange={handleChange}
          />
          <i className="fas fa-minus-circle"></i>
        </div>
      </div>
      <i className="fas fa-plus-circle"></i>
    </>
  );
};

export default TextareaOption;
