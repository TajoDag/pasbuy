import { useNavigate } from "react-router-dom";
import TranslateTing from "../../../components/Common/TranslateTing";

const HeaderNav = () => {
  const navigate = useNavigate()
  const navs = [
    {
      title: "homepage",
      path: "/",
    },
    // {
    //   title: "flashSales",
    //   path: "#",
    // },
    // {
    //   title: "blogs",
    //   path: "#",
    // },
    {
      title: "allBrands",
      path: "/all-brands",
    },
    {
      title: "allCategories",
      path: "/all-categories",
    },
  ];
  return (
    <div className="header_nav">
      <div className="header_nav_list">
        {navs.map((item, index) => (
          <div
            key={index}
            className="nav-item"
            onClick={() => navigate(item.path)}
          >
            <TranslateTing text={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default HeaderNav;
