import "../../css/Footer-Basic.css";
import "../../css/Footer-Dark.css";
import "../../fonts/ionicons.min.css";

function Footer(props) {
  return (
    <footer className="footer-dark">
      <div className="intro">
        <h2 className="text-center">Contact us</h2>
        <br />
        <br />
        <br />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-3 item">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Real-time Stock Data</a>
              </li>
              <li>
                <a href="#">Investment Analysis</a>
              </li>
              <li>
                <a href="#">Portfolio Management</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3 item">
            <h3>About</h3>
            <ul>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 item">
            <h3>Contact Information</h3>
            <ul>
              <li>Email: info@stockmarketapp.com</li>
              <li>Phone: +1234567890</li>
              <li>Address: 456 Wall Street, City, Country</li>
            </ul>
          </div>
          <div className="col-md-3 item text">
            <h3>StockMarketApp</h3>
            <p>
              Welcome to StockMarketApp, your reliable partner for stock market
              insights and investment strategies.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col item social">
            <a href="#">
              <i className="icon ion-social-facebook"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-github"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-instagram"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-twitter"></i>
            </a>
          </div>
        </div>
        <p className="copyright">StockMarketApp © 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
