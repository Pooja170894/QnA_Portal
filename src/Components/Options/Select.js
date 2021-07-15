import React, { useState } from "react";
import "./Option.css";

const Select = () => {
  const [tech, setTech] = useState("None");
  return (
    <>
      <div className="box">
        <label className="label">Option 1</label>
        <div className="inner_box">
          <select
            className="selected"
            value={tech}
            onChange={(e) => setTech(e.target.value)}
          >
            <option value="None">None</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="Javascript">Javascript</option>
            <option value="React">React</option>
            <option value="Node">Node</option>
          </select>
          <i className="fas fa-minus-circle"></i>
        </div>
      </div>
      <i className="fas fa-plus-circle"></i>
    </>
  );
};

export default Select;
