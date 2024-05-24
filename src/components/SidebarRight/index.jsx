
import { useNavigate } from "react-router-dom";
import { getProductTodayDeal } from "../../api/utils/products";
import { useEffect, useState } from "react";
import TranslateTing from "../Common/TranslateTing";
import { formatPrice } from "../../utils";
import { useCurrency } from "../../context/CurrencyContext";

const SidebarRight = () => {
  const navigate = useNavigate()
  const [deals, setDeals] = useState([]);
  const { currency } = useCurrency();

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
      } catch (error) { }
    };
    getProducts();
  }, []);

  return (
    <div className="sidebarRight">
      <div className="sidebar_title">
        <div className="title"><TranslateTing text="today_Deal" /></div>
        <div className="title_span">Hot</div>
      </div>
      <div className="list_card_deal">
        {deals?.map((item, index) => (
          <div key={index} className="card_deal" style={{ cursor: 'pointer' }} onClick={() => navigate(`/detail/${item._id}`)} >
            <div className="img">
              <img src={item.images[0].url} />
            </div>
            <div className="card_deal_info">
              <span className="price">{formatPrice(item.price, currency)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SidebarRight;
