import React, { useState } from "react";
import "./Option.css";

const Checkbox = () => {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <div className="box">
        <label className="label">Option 1</label>
        <div className="inner_box">
          <label className="check_label">
            <input
              type="checkbox"
              defaultChecked={checked}
              onChange={() => setChecked(!checked)}
            />
            React
          </label>
          <label className="check_label">
            <input
              type="checkbox"
              defaultChecked={!checked}
              onChange={() => setChecked(!checked)}
            />
            Node
          </label>
          <label className="check_label">
            <input
              type="checkbox"
              defaultChecked={!checked}
              onChange={() => setChecked(!checked)}
            />
            Javascript
          </label>
          <label className="check_label">
            <input
              type="checkbox"
              defaultChecked={!checked}
              onChange={() => setChecked(!checked)}
            />
            None
          </label>
          <i className="fas fa-minus-circle"></i>
        </div>
      </div>
      <i className="fas fa-plus-circle"></i>
    </>
  );
};

export default Checkbox;
