import React from "react";
import TranslateTing from "../../components/Common/TranslateTing";
import { useNavigate } from "react-router-dom";

export const ProductQuries = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="border_bottom">
        <h3>
          <TranslateTing text="Product Queries" />
        </h3>
      </div>
      <div className="unLogin">
        <span onClick={() => navigate("/login")}>
          <TranslateTing text="Login " />
        </span>
        {"  "}
        or  {"  "}
        <span onClick={() => navigate("/register")}> 
          <TranslateTing text=" register " />
          {"  "}
        </span>
        <TranslateTing text="to submit your question to Seller" />
      </div>
      <div className="border_bottom" style={{ marginTop: "30px" }}>
        <h3>
          <TranslateTing text="Other questions" />
        </h3>
      </div>
      <div className="other_quest">
        <p>No none asked to seller yet</p>
      </div>
    </div>
  );
};
