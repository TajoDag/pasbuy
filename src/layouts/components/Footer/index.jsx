const Footer = () => {
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
    <footer >
      <div className="footer">
        <div className="footer-section">
          <img
            src="https://www.pasbuy.cyou/public/uploads/all/Pb40YAYGtG8kNwCDTQZZ3w84k1bufpt57NCcS9dj.jpg"
            alt="Logo"
            style={{ width: 44, height: 44 }}
            className="footer-logo"
          />
          <p style={{ marginTop: 20 }}>
            Contact customer service for free admission
          </p>
          <input type="email" placeholder="Your Email Address" />
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
          <h4>CONTACT INFO</h4>
          <div className="content-contact">
            {contactInfo.map((item, index) => (
              <div key={index}>
                <span>{item.title}</span>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-section">
          <h4>QUICK LINKS</h4>
          <div className="content-quick-link">
            {quickLinks.map((item, index) => (
              <div key={index}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-section">
          <h4>MY ACCOUNT</h4>
          <div className="content-quick-link">
            {myAccount.map((item, index) => (
              <div key={index}>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="footer-section-bottom">
            <h4>BE A SELLER</h4>
            <div>
              <button>Apply Now</button>
            </div>
            <div>
              <button>Seller Login</button>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};
export default Footer;
