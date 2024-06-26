import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import {
  getAgencyByHomeAgentId,
  getListNotSuccess,
  getSuccessOrder,
} from "../../../api/utils/agency";
import { getListCustomer, getUser } from "../../../api/utils/auth";
import { getListOrders } from "../../../api/utils/order";
import { getDeposit, getWithdraw } from "../../../api/utils/wallet";
import useRefresh from "../../../hooks/useRefresh";
import { showNotification } from "../../../redux/reducers/notificationReducer";
import { Compare } from "../components/ListTabs/Compare";
import { Conversations } from "../components/ListTabs/Conversations";
import { Dashboard } from "../components/ListTabs/Dashboard";
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
import ListUser from "./ListTabs/ListUser";

export const Tabs = ({ activeMenu }) => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const dispatch = useDispatch();
  const [dataAgency, setAgency] = useState();
  const [totalOrderNotSuccess, setTotalOrderNotSuccess] = useState(0);
  const [dataOrders, setDataOrders] = useState([]);
  const [dataUser, setDataUser] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalOrderSuccess, setTotalOrderSuccess] = useState(0);
  const [dataDeposit, setDataDeposit] = useState([]);
  const [dataWithdraw, setDataWithdraw] = useState([]);
  const [dataTableUser, setDataTableUser] = useState([]);

  const [refresh, refecth] = useRefresh();
  const intl = useIntl();
  const Success = intl.formatMessage({ id: "Success" });
  const Error = intl.formatMessage({ id: "Success" });

  const [searchParamsCustomer, setSearchParamsCustomer] = useState({
    page: 0,
    size: 10,
    inviteCode: user.inviteCode,
  });
  const [paginationCustomer, setPaginationCustomer] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  useEffect(() => {
    if (user.isShop && user.role === "agency") {
      const getAgency = async () => {
        try {
          const response = await getAgencyByHomeAgentId(user._id);
          if (response.status) {
            const updatedProducts = response.result.products.map((item, i) => ({
              ...item,
              stt: i + 1,
            }));
            setAgency(updatedProducts);
          } else {
            // dispatch(showNotification({ message: Error, type: "error" }));
          }
        } catch (err) {
          // dispatch(showNotification({ message: Error, type: "error" }));
        }
      };
      const getListOrderNotSuccess = async () => {
        try {
          const rp = await getListNotSuccess(user._id);
          {
            if (rp.status) {
              setTotalOrderNotSuccess(rp.result.pagination.total);
            } else {
              // dispatch(showNotification({ message: Error, type: "error" }));
            }
          }
        } catch (err) {
          // dispatch(showNotification({ message: Error, type: "error" }));
        }
      };
      getAgency();
      getListOrderNotSuccess();
    }

    const getListHistoryOrders = async () => {
      try {
        const rp = await getListOrders(user._id);
        {
          if (rp.status) {
            const updatedProducts = rp.result.orders.map((item, i) => ({
              ...item,
              stt: i + 1,
            }));
            setDataOrders(updatedProducts);
          } else {
            // dispatch(showNotification({ message: Error, type: "error" }));
          }
        }
      } catch (err) {
        // dispatch(showNotification({ message: Error, type: "error" }));
      }
    };
    const getUserDt = async () => {
      try {
        const rp = await getUser();
        if (rp.status) {
          setDataUser(rp.result);
        }
      } catch (err) {
        // dispatch(showNotification({ message: Error, type: "error" }));
      }
    };
    const getListSuccess = async () => {
      try {
        const response = await getSuccessOrder({
          userId: user._id,
        });
        if (response.status) {
          const totalAmount = response.result.orders.reduce(
            (sum, order) => sum + order.totalPrice,
            0
          );
          setTotalAmount(totalAmount);
          setTotalOrderSuccess(response.result.pagination.total);
        }
      } catch (err) { }
    };
    const getListDeposit = async () => {
      try {
        const response = await getDeposit(user._id);
        if (response.status) {
          setDataDeposit(response.result);
        }
      } catch (err) { }
    };
    const getListWithdraw = async () => {
      try {
        const response = await getWithdraw(user._id);
        if (response.status) {
          setDataWithdraw(response.result);
        }
      } catch (err) { }
    };
    const getListCus = async () => {
      try {
        const response = await getListCustomer(searchParamsCustomer);
        if (response.status) {
          const cus = response.result.users.map((item, i) => ({
            ...item,
            stt: i + 1 + searchParamsCustomer.page * searchParamsCustomer.size,
          }));
          setDataTableUser(cus);
          setPaginationCustomer((prev) => ({
            ...prev,
            total: response.result.pagination?.total,
          }));
        }
      } catch (err) { }
    };

    getListCus();
    getListWithdraw();
    getListDeposit();
    getListSuccess();
    getListHistoryOrders();
    getUserDt();
  }, [user._id, user.isShop, user.role, refresh, searchParamsCustomer]);


  const handleTableChangeCustomer = (pagination) => {
    setSearchParamsCustomer({
      ...searchParamsCustomer,
      page: pagination.current - 1,
      size: pagination.pageSize,
    });
    setPaginationCustomer(pagination);
  };
  return (
    <div className="tab_container">
      {activeMenu === "1" && (
        <Dashboard
          data={dataAgency}
          totalOrderNotSuccess={totalOrderNotSuccess}
          refecth={refecth}
          userId={user._id}
          totalAmount={totalAmount}
          totalOrderSuccess={totalOrderSuccess}
        />
      )}
      {activeMenu === "21" && (
        <ListUser dataTable={dataTableUser} paginationCustomer={paginationCustomer} handleTableChangeCustomer={handleTableChangeCustomer}
        />
      )}
      {activeMenu === "13" && (
        <Stock
          data={dataAgency}
          refecth={refecth}
          userId={user._id}
          refresh={refresh}
        />
      )}
      {activeMenu === "2" && (
        <PurchaseHistory dataOrders={dataOrders} userId={user._id} dataUser={dataUser} />
      )}
      {activeMenu === "3" && <Download />}
      {activeMenu === "4" && <SentRequest />}
      {activeMenu === "5" && <WishList />}
      {activeMenu === "6" && <Compare />}
      {activeMenu === "7" && <Conversations />}
      {activeMenu === "8" && (
        <Wallet
          user={dataUser}
          dataDeposit={dataDeposit}
          refecth={refecth}
          dataWithdraw={dataWithdraw}
        />
      )}
      {activeMenu === "9" && (
        <EarningPoint
          dataOrders={dataOrders}
          userId={user._id}
          user={dataUser}
        />
      )}
      {activeMenu === "10" && <Support />}
      {activeMenu === "11" && <Transaction />}
      {activeMenu === "12" && <Manage user={dataUser} refecth={refecth} />}
    </div>
  );
};
