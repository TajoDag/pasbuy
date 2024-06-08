import { IoMdStar } from "react-icons/io";

const reviews = [
  {
    id: 1,
    avatar:
      "https://dictionary.cambridge.org/vi/images/thumb/coconu_noun_002_07396.jpg?version=6.0.17",
    name: "Sogurt",
    date: "30-02-2024",
    content: "Good",
  },
  {
    id: 2,
    avatar:
      "https://www.shutterstock.com/image-illustration/farm-icon-isolated-on-abstract-260nw-1521832373.jpg",
    name: "Jiology",
    date: "30-02-2024",
    content: "Good",
  },
  {
    id: 3,
    avatar:
      "https://www.shutterstock.com/image-illustration/farm-icon-isolated-on-abstract-260nw-1521832373.jpg",
    name: "Coconut",
    date: "30-02-2024",
    content: "Good",
  },
];

export const Reviews = () => {
  return (
    <div>
      {reviews.map((item) => (
        <div
          key={item.id}
          className="border_bottom review"
          style={{ justifyContent: "normal" }}
        >
          <div className="avatar">
            <img src={item.avatar} alt="" />
          </div>
          <div className="content">
            <div>
              <h3>{item.name}</h3>
              <span>{item.date}</span>
              <p>{item.content}</p>
            </div>
            <div>
              <IoMdStar className="star_icon" />
              <IoMdStar className="star_icon" />
              <IoMdStar className="star_icon" />
              <IoMdStar className="star_icon" />
              <IoMdStar className="star_icon" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
