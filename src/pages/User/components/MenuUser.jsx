import React, { useEffect, useState } from "react";
import { CiBadgeDollar, CiLogout } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { IoHomeOutline, IoWalletOutline } from "react-icons/io5";
import { MdHistory, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../../api/utils/auth";
import TranslateTing from "../../../components/Common/TranslateTing";
import { useActiveMenu } from "../../../context/ActiveMenu";
import useRefresh from "../../../hooks/useRefresh";
import {
  useIsLaptopOrDesktop,
  useIsMobile,
  useIsTablet,
} from "../../../utils/responsive";
import { UserSwitchOutlined } from "@ant-design/icons";

const menu = [
  { key: "1", name: "Dashboard", icon: <IoHomeOutline /> },
  { key: "21", name: "Customers", icon: <UserSwitchOutlined /> },
  { key: "13", name: "Warehouse", icon: <MdOutlineProductionQuantityLimits /> },
  { key: "2", name: "Purchase History", icon: <MdHistory /> },
  // { key: "3", name: "Download", icon: <AiOutlineDownload /> },
  // { key: "4", name: "Sent Refund Request", icon: <VscSend /> },
  // { key: "5", name: "Wishlist", icon: <IoMdHeartEmpty /> },
  // { key: "6", name: "Compare", icon: <IoIosGitCompare /> },
  // { key: "7", name: "Conversations", icon: <BiConversation /> },
  { key: "8", name: "My Wallet", icon: <IoWalletOutline /> },
  { key: "9", name: "Earning Points", icon: <CiBadgeDollar /> },
  // { key: "10", name: "Support Ticket", icon: <IoTicketOutline /> },
  // { key: "11", name: "Transaction Password", icon: <GrTransaction /> },
  { key: "12", name: "Manage Profile", icon: <FiUser /> },
  { key: "14", name: "logout", icon: <CiLogout /> },
];
export const MenuUser = () => {
  const isLaptopOrDesktop = useIsLaptopOrDesktop();
  const { activeMenu, setActiveMenu, setOpenMenu } = useActiveMenu();

  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState({});
  const [refresh, refecth] = useRefresh();
  const intl = useIntl();
  const Success = intl.formatMessage({ id: "Success" });
  const Error = intl.formatMessage({ id: "Success" });
  useEffect(() => {
    const getUserDt = async () => {
      try {
        const rp = await getUser();
        if (rp.status) {
          setDataUser(rp.result);
          if (rp.result.role === "agency") {
            setActiveMenu("1")
          } else {
            setActiveMenu("2")
          }

        }
      } catch (err) {
        dispatch(showNotification({ message: Error, type: "error" }));
      }
    };
    getUserDt();
  }, [refresh]);



  const filteredMenu = dataUser.isShop
    ? menu
    : menu.filter((item) => item.key !== "1" && item.key !== "13" && item.key !== "21");
  const handleLogout = () => {
    window.localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  return (
    <div className={`menu_wrap ${isLaptopOrDesktop && "background_white"}`}>
      <div className="user_infor">
        <img
          src="https://www.pasbuy.cyou/public/assets/img/avatar-place.png"
          alt=""
        />
        <h3>{dataUser.name}</h3>
        <p>{dataUser.email && dataUser.email}</p>
        <p>
          <TranslateTing text="Invite Code" /> :{" "}
          {dataUser.inviteCode && dataUser.inviteCode}
        </p>
      </div>
      <div className="menu_item">
        {filteredMenu.map((item) => (
          <div
            key={item.key}
            onClick={() => {
              if (isTablet || isMobile) {
                navigate("/user");
                setActiveMenu(item.key);
                setOpenMenu(false);
              } else {
                setActiveMenu(item.key);
              }
              if (item.name === "logout") {
                handleLogout();
              }
            }}
            style={
              activeMenu === item.key ? { backgroundColor: "#f7a592" } : {}
            }
          >
            <span>{item.icon}</span>
            <span>
              <TranslateTing text={item.name} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
