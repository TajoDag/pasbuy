import { SearchOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import logo from "@assets/images/logo.png";
import { useState } from "react";
const HeaderL = () => {
  const [showInput, setShowInput] = useState(false);
  return (
    <header className="header_shop">
      {showInput ? (
        <div className="header_content onSearch">
          <div className="header_left">
            <ArrowLeftOutlined className="icon_back" onClick={() => setShowInput(!showInput)} />
          </div>
          <div className="header_right">
            <div className="search-bar">
              <input
                type="text"
                placeholder="I am shopping for..."
                className="search-input"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="header_content">
          <div className="header_logo">
            <img src={logo} className="logo" />
          </div>
          <div className="search-bar-mobile">
            <button
              className="search-button"
              onClick={() => setShowInput(!showInput)}
            >
              <SearchOutlined />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
export default HeaderL;
