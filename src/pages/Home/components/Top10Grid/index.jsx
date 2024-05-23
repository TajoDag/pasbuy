import React from "react";
const Top10Grid = ({ title, btn, data }) => {

  return (
    <div className="top_10_grid">
      <div className="div_title">
        <h3>
          <span>{title}</span>
        </h3>
        <div className="div_btn">
          <span>{btn}</span>
        </div>
      </div>
      <div className="list_categories_top10">
        {data.map((item, index) => (
          <div key={index} className="category">
            <div className="img_cate">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="name_cate">
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Top10Grid;
