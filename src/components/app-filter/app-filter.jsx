import React from "react";
import "../app-filter/app-filter.css";

const AppFilter = ({ updateFilterHandler, filter }) => {
  return (
    <div className="btn-group">
      {btnsArr.map((btn) => (
        <button
          key={btn.name}
          className={`btn ${filter === btn.name ? "btn btn-dark" : "btn-outline-dark"}`}
          onClick={() => updateFilterHandler(btn.name)}
          type="button"
        >
          {btn.label}
        </button>
      ))}

      {/* <button className='btn btn-outline-dark' type='button'>Mashxur kinolar</button>
        <button className='btn btn-outline-dark' type='button'>Eng ko'p ko'rilgan kinolar</button> */}
    </div>
  );
};

const btnsArr = [
  { name: "all", label: "Barcha kinolar" },
  { name: "popular", label: "Mashhur kinolar" },
  { name: "mostViewers", label: "Eng ko'p ko'rilgan kinolar" },
];

export default AppFilter;
