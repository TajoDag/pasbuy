import React from "react";
import TranslateTing from "../../../../components/Common/TranslateTing";

export const WishList = () => {
  return (
    <div>
      <h2>
        <TranslateTing text="Wishlist" />
      </h2>
      <div className="background_white wishlist_wrap">
        <img
          src="https://www.pasbuy.cyou/public/assets/img/nothing.svg"
          alt=""
        />
        <p>
          <TranslateTing text="There isn't anything added yet" />
        </p>
      </div>
    </div>
  );
};
