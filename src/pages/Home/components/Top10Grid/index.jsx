import React from "react";
import { useNavigate } from "react-router-dom";
const Top10Grid = ({ title, btn, data, type }) => {
  const navigate = useNavigate()
  return (
    <div className="top_10_grid">
      <div className="div_title">
        <h3>
          <span>{title}</span>
        </h3>
        <div className="div_btn" onClick={() => navigate(`/all-${type}`)}>
          <span>{btn}</span>
        </div>
      </div>
      <div className="list_categories_top10">
        {data.map((item, index) => (
          <div key={index} className="category" onClick={() => navigate(`/products`)}>
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
