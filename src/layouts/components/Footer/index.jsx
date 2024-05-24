import { useIntl } from "react-intl";
import TranslateTing from "../../../components/Common/TranslateTing";

const Footer = () => {
  const intl = useIntl();
  const placeholderText = intl.formatMessage({ id: "Your Email Address" });
  const contactInfo = [
    {
      title: "Address:",
      content:
        "301 Binney Street Cambridge, Massachusetts 02142, United States of America",
    },
    {
      title: "Phone:",
      content: "+1 3322539782",
    },
    {
      title: "Email:",
      content: "pasbuyshop@gmail.com",
    },
  ];
  const quickLinks = [
    "Support Policy Page",
    "Return Policy Page",
    "Privacy Policy Page",
    "Seller Policy",
    "Term Conditions Page",
  ];
  const myAccount = ["Login", "Order History", "My Wishlist", "Track Order"];
  return (
    <footer>
      <div className="footer">
        <div className="footer-section">
          <img
            src="https://www.pasbuy.cyou/public/uploads/all/Pb40YAYGtG8kNwCDTQZZ3w84k1bufpt57NCcS9dj.jpg"
            alt="Logo"
            style={{ width: 44, height: 44 }}
            className="footer-logo"
          />
          <p style={{ marginTop: 20 }}>
            <TranslateTing text="Contact customer service for free admission" />
          </p>
          <input type="email" placeholder={placeholderText} />
          <button>Subscribe</button>
          <div className="app-links">
            <a href="/detail">
              <img
                src="https://www.pasbuy.cyou/public/assets/img/play.png"
                alt="Google Play"
              />
            </a>
            <a href="#">
              <img
                src="https://www.pasbuy.cyou/public/assets/img/app.png"
                alt="App Store"
              />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>
            {" "}
            <TranslateTing text="CONTACT INFO" />
          </h4>
          <div className="content-contact">
            {contactInfo.map((item, index) => (
              <div key={index}>
                <span>
                  <TranslateTing text={item.title} />
                </span>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-section">
          <h4>
            <TranslateTing text="QUICK LINKS" />
          </h4>
          <div className="content-quick-link">
            {quickLinks.map((item, index) => (
              <div key={index}>
                <p>
                  <TranslateTing text={item} />
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-section">
          <h4>
            <TranslateTing text="MY ACCOUNT" />
          </h4>
          <div className="content-quick-link">
            {myAccount.map((item, index) => (
              <div key={index}>
                <p>
                  <TranslateTing text={item} />
                </p>
              </div>
            ))}
          </div>
          <div className="footer-section-bottom">
            <h4>
              <TranslateTing text="BE A SELLER" />
            </h4>
            <div>
              <button>
                <TranslateTing text="Apply Now" />
              </button>
            </div>
            <div>
              <button>
                <TranslateTing text="Seller Login" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
