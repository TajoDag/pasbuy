import { IoMdStar } from "react-icons/io";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import React from "react";
import TranslateTing from "../../components/Common/TranslateTing";
import { formatPrice } from "../../utils";
import { useCurrency } from "../../context/CurrencyContext";

export const RelatedProduct = () => {
  const { currency } = useCurrency();
  const array = [
    {
      id: 1,
      src: "https://s-cf-tw.shopeesz.com/file/59ad6855d8088686cb6f1b9969b353d0",
    },
    {
      id: 2,
      src: "https://s-cf-tw.shopeesz.com/file/b0a108528b0719628466793a89cc6a69",
    },
    {
      id: 3,
      src: "https://s-cf-tw.shopeesz.com/file/e0d3bdeea637bf94b4962ccdff1cdf00",
    },
    {
      id: 4,
      src: "https://s-cf-tw.shopeesz.com/file/991caab4081ff3d03a0da1a54c1b607e",
    },
    {
      id: 5,
      src: "https://s-cf-tw.shopeesz.com/file/f6b8f0b0a6487b769de300245e3963c9",
    },
    {
      id: 6,
      src: "https://s-cf-tw.shopeesz.com/file/e0d3bdeea637bf94b4962ccdff1cdf00",
    },
    {
      id: 7,
      src: "https://s-cf-tw.shopeesz.com/file/e0d3bdeea637bf94b4962ccdff1cdf00",
    },
    {
      id: 8,
      src: "https://s-cf-tw.shopeesz.com/file/e0d3bdeea637bf94b4962ccdff1cdf00",
    },
    {
      id: 9,
      src: "https://s-cf-tw.shopeesz.com/file/e0d3bdeea637bf94b4962ccdff1cdf00",
    },
  ];

  const carousel = React.useRef(null);
  const [fixed, setFixed] = React.useState(0);
  const handleNext = () => {
    carousel.current.scrollLeft += 200;
    setFixed((carousel.current.scrollLeft += 200));
  };

  const handlePrev = () => {
    carousel.current.scrollLeft -= 200;
    setFixed((carousel.current.scrollLeft -= 200));
  };
  return (
    <div style={{ width: "100%" }}>
      <div className="border_bottom">
        <h2><TranslateTing text="Related Products"/></h2>
      </div>
      <div className="related_wrap" ref={carousel}>
        {/* <div className="button_slide">
          <button onClick={handlePrev} style={{ left: `${fixed}px` }}>
            <GrPrevious />
          </button>
          <button onClick={handleNext} style={{ right: `${fixed}px` }}>
            <GrNext />
          </button>
        </div> */}
        {array.map((item) => (
          <div key={item.id} className="item">
            <img src={item.src} alt="" />
            <h4 style={{ color: "red", fontWeight: "600" }}>{formatPrice(60, currency)}</h4>
            <div>
              <IoMdStar className="star_icon" />
              <IoMdStar className="star_icon" />
              <IoMdStar className="star_icon" />
              <IoMdStar className="star_icon" />
              <IoMdStar className="star_icon" />
            </div>
            <p>
              3PCS/Set Velvet Matte Lip Gloss Waterproof Natural Moisturizing
            </p>
          </div>
        ))}
        {/* <div className="button_slide" >
          <button>
            <GrNext />
          </button>
        </div> */}
      </div>
    </div>
  );
};
