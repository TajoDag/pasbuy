import { IoMdStar } from "react-icons/io";

export const RenderRate = (rate) => {
  const stars = [];
  for (let i = 0; i < rate; i++) {
    stars.push(<IoMdStar key={i} className="star_icon" />);
  }

  return <div>{stars}</div>;
};
