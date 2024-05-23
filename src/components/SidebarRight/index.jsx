import sp1 from "@assets/images/card_deals/sp1.png";
import sp2 from "@assets/images/card_deals/sp2.png";
import sp3 from "@assets/images/card_deals/sp3.png";
import sp4 from "@assets/images/card_deals/sp4.png";
import sp5 from "@assets/images/card_deals/sp5.png";
import sp6 from "@assets/images/card_deals/sp6.png";
import { getProductTodayDeal } from "../../api/utils/products";
import { useEffect, useState } from "react";

const SidebarRight = () => {
  const [deals, setDeals] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const payload = {
          todayDeal: true,
        };
        const rp = await getProductTodayDeal(payload);
        setDeals(rp.result.products);
        if (rp.status) {
        }
      } catch (error) {}
    };
    getProducts();
  }, []);
  return (
    <div className="sidebarRight">
      <div className="sidebar_title">
        <div className="title">Todays Deal</div>
        <div className="title_span">Hot</div>
      </div>
      <div className="list_card_deal">
        {deals?.map((item, index) => (
          <div key={index} className="card_deal">
            <div className="img">
              <img src={item.images[0].url} />
            </div>
            <div className="card_deal_info">
              {/* <p className="name">{item.name}</p> */}
              <span className="price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SidebarRight;
