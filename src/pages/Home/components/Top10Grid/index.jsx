import React from "react";
import { useNavigate } from "react-router-dom";
import TranslateTing from "../../../../components/Common/TranslateTing";
const Top10Grid = ({ title, btn, data, type }) => {
  const navigate = useNavigate();
  return (
    <div className="top_10_grid">
      <div className="div_title">
        <h3>
          <span>
            <TranslateTing text={title} />
          </span>
        </h3>
        <div className="div_btn" onClick={() => navigate(`/all-${type}`)}>
          <span>
            <TranslateTing text={btn} />
          </span>
        </div>
      </div>
      <div className="list_categories_top10">
        {data.map((item, index) => (
          <div
            key={index}
            className="category"
            onClick={() =>
              navigate(`/products`, {
                state:
                  type === "categories"
                    ? { id: item.id }
                    : { idBrand: item._id },
              })
            }
          >
            <div className="img_cate">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="name_cate">
              <p>
                <TranslateTing text={item.name} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Top10Grid;
