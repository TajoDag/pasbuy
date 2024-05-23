import anh1 from "@assets/images/ic_category/bag.png";
import anh2 from "@assets/images/ic_category/dress.png";
import anh3 from "@assets/images/ic_category/clothis.png";
import anh4 from "@assets/images/ic_category/pc.png";
import anh5 from "@assets/images/ic_category/toy.png";
import anh6 from "@assets/images/ic_category/sport.png";
import anh7 from "@assets/images/ic_category/motocycle.png";
import anh8 from "@assets/images/ic_category/watch.png";
import anh9 from "@assets/images/ic_category/phone.png";
import anh10 from "@assets/images/ic_category/home.png";
import anh11 from "@assets/images/ic_category/toy2.png";

const SidebarLeft = () => {
  const categoriesR = [
    {
      img: anh1,
      name: "Women's Fashion Bag",
    },
    {
      img: anh2,
      name: "WWomen's Clothing & Fashion",
    },
    {
      img: anh3,
      name: "Men's Clothing & Fashion",
    },
    {
      img: anh4,
      name: "Computer & Accessories",
    },
    {
      img: anh5,
      name: "Kids & Toy",
    },
    {
      img: anh6,
      name: "Sports & Outdoor",
    },
    {
      img: anh7,
      name: "Automobile & Motorcycle",
    },
    {
      img: anh8,
      name: "Watches",
    },
    {
      img: anh9,
      name: "Phone Accessories",
    },
    {
      img: anh10,
      name: "Home Decoration & Appliance",
    },
    {
      img: anh11,
      name: "Toy",
    },
  ];
  return (
    <div className="sidebarLeft">
      <div className="sidebar_title">
        <div className="title">Categories</div>
      </div>
      <div className="list_categories">
        {categoriesR.map((item, index) => (
          <div key={index} className="category">
            <div className="img">
              <img src={item.img} />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SidebarLeft;
