import sp1 from "@assets/images/card_deals/sp1.png";
import sp2 from "@assets/images/card_deals/sp2.png";
import sp3 from "@assets/images/card_deals/sp3.png";
import sp4 from "@assets/images/card_deals/sp4.png";
import sp5 from "@assets/images/card_deals/sp5.png";
import sp6 from "@assets/images/card_deals/sp6.png";

const SidebarRight = () => {
  const deals = [
    {
      img: sp1,
      name: "sp1",
      price: "$84.67",
    },
    {
      img: sp2,
      name: "sp2",
      price: "$174.90",
    },
    {
      img: sp3,
      name: "sp3",
      price: "$13.46",
    },
    {
      img: sp4,
      name: "sp4",
      price: "$84.67",
    },
    {
      img: sp5,
      name: "sp4",
      price: "$91.67",
    },
    {
      img: sp6,
      name: "sp6",
      price: "$284.67",
    },
  ];
  return (
    <div className="sidebarRight">
      <div className="sidebar_title">
        <div className="title">Todays Deal</div>
        <div className="title_span">Hot</div>
      </div>
      <div className="list_card_deal">
        {deals.map((item, index) => (
          <div key={index} className="card_deal">
            <div className="img">
              <img src={item.img} />
            </div>
            <div className="card_deal_info">
              <p className="name">{item.name}</p>
              <span className="price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SidebarRight;
