import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import { VscSend } from "react-icons/vsc";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosGitCompare } from "react-icons/io";
import { BiConversation } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";
import { CiBadgeDollar } from "react-icons/ci";
import { IoTicketOutline } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import TranslateTing from "../../../components/Common/TranslateTing";
import {
  useIsLaptopOrDesktop,
  useIsMobile,
  useIsTablet,
} from "../../../utils/responsive";

const menu = [
  { key: "1", name: "Dashboard", icon: <IoHomeOutline /> },
  { key: "2", name: "Purchase History", icon: <MdHistory /> },
  { key: "3", name: "Download", icon: <AiOutlineDownload /> },
  { key: "4", name: "Sent Refund Request", icon: <VscSend /> },
  { key: "5", name: "Wishlist", icon: <IoMdHeartEmpty /> },
  { key: "6", name: "Compare", icon: <IoIosGitCompare /> },
  { key: "7", name: "Conversations", icon: <BiConversation /> },
  { key: "8", name: "My Wallet", icon: <IoWalletOutline /> },
  { key: "9", name: "Earning Points", icon: <CiBadgeDollar /> },
  { key: "10", name: "Support Ticket", icon: <IoTicketOutline /> },
  { key: "11", name: "Transaction Password", icon: <GrTransaction /> },
  { key: "12", name: "Manage Profile", icon: <FiUser /> },
];
export const MenuUser = ({ setActiveMenu, activeMenu }) => {
  const isLaptopOrDesktop = useIsLaptopOrDesktop();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  return (
    <div className={`menu_wrap ${isLaptopOrDesktop && "background_white"}`}>
      <div className="user_infor">
        <img
          src="https://www.pasbuy.cyou/public/assets/img/avatar-place.png"
          alt=""
        />
        <h3>USER</h3>
        <p>user@gmail.com</p>
      </div>
      <div className="menu_item">
        {menu.map((item) => (
          <div
            key={item.key}
            onClick={() => setActiveMenu(item.key)}
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
