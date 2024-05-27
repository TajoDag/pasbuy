import React, { useEffect, useState } from "react";
import { Dashboard } from "../components/ListTabs/Dashboard";
import { Compare } from "../components/ListTabs/Compare";
import { Conversations } from "../components/ListTabs/Conversations";
import { Download } from "../components/ListTabs/Download";
import { EarningPoint } from "../components/ListTabs/EarningPoint";
import { Manage } from "../components/ListTabs/Manage";
import { PurchaseHistory } from "../components/ListTabs/PurchaseHistory";
import { SentRequest } from "../components/ListTabs/SentRequest";
import { Support } from "../components/ListTabs/Support";
import { Transaction } from "../components/ListTabs/Transaction";
import { Wallet } from "../components/ListTabs/Wallet";
import { WishList } from "../components/ListTabs/WishList";
import Stock from "./ListTabs/Stock";
import { useDispatch } from "react-redux";
import { getAgencyByHomeAgentId } from "../../../api/utils/agency";
import { showNotification } from "../../../redux/reducers/notificationReducer";

export const Tabs = ({ activeMenu }) => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const dispatch = useDispatch()
  const [dataAgency, setAgency] = useState()
  useEffect(() => {
    const getAgency = async () => {
      try {
        const response = await getAgencyByHomeAgentId(user._id);
        if (response.status) {
          const updatedProducts = response.result.products.map(
            (item, i) => ({
              ...item,
              stt: i + 1
            })
          );
          setAgency(updatedProducts)
        } else {
          dispatch(showNotification({ message: response.message, type: "error" }));
        }
      } catch (err) {
        dispatch(showNotification({ message: "Có lỗi xảy ra", type: "error" }));
      }
    }
    getAgency();
  }, [user._id])
  return (
    <div className="tab_container">
      {activeMenu === "1" && <Dashboard data={dataAgency} />}
      {activeMenu === "13" && <Stock data={dataAgency} />}
      {activeMenu === "2" && <PurchaseHistory />}
      {activeMenu === "3" && <Download />}
      {activeMenu === "4" && <SentRequest />}
      {activeMenu === "5" && <WishList />}
      {activeMenu === "6" && <Compare />}
      {activeMenu === "7" && <Conversations />}
      {activeMenu === "8" && <Wallet />}
      {activeMenu === "9" && <EarningPoint />}
      {activeMenu === "10" && <Support />}
      {activeMenu === "11" && <Transaction />}
      {activeMenu === "12" && <Manage />}
    </div>
  );
};
