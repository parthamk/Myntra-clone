import React from "react";
import helper from "../../helper.css";
import "./Sort.css";  


const Sort = () => {
  return (
    <div className="container">
      <div className="filter-container">
        <div className="container">
          <strong>FILTERS</strong>
        </div>
        <div className="container">
          <select name="Sort" id="sorting" className="sort-holder">
              <option value="sortby">What's New</option>
              <option value="sortprice">Price low to high</option>
              <option value="sortprice">Better Discount</option>
              <option value="sortprice">Price low to high</option>
              
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sort;
