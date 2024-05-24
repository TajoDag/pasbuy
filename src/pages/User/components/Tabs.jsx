import React from "react";
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

export const Tabs = ({ activeMenu }) => {
  return (
    <div className="tab_container">
      {activeMenu === "1" && <Dashboard />}
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
      {activeMenu === "12s" && <Manage />}
    </div>
  );
};
