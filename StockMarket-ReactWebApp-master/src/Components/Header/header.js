import "../../css/Header-Blue.css";
import "../../fonts/font-awesome.min.css";
import "../../fonts/fontawesome-webfont.eot";
import "../../fonts/fontawesome-webfont.svg";
import "../../fonts/fontawesome-webfont.ttf";
import "../../fonts/fontawesome-webfont.woff";
import "../../fonts/fontawesome-webfont.woff2";
import "../../fonts/FontAwesome.otf";

function Header() {
  return (
    <>
      <header className="header-blue">
        <div className="container hero m-0">
          <div className="row">
            <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
              <h1>Welcome to StockMarketApp!</h1>
              <p>
                Our Stock Market app provides real-time stock data, analysis
                tools, and personalized insights to help you make informed
                investment decisions.
              </p>

              <a
                href="#features"
                className="btn btn-light btn-lg action-button"
                type="button "
              >
                Explore Features
              </a>
            </div>
            <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
              <div className="phone-mockup">
                {/* <img className="device" src={screenContent} alt="image" /> */}
                <div className="screen"></div>
              </div>
            </div>
          </div>
          <div id="features"></div>
        </div>
      </header>
    </>
  );
}

export default Header;
