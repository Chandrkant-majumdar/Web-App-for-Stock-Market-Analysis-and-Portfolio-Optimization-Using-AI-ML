import "../../css/Features-Clean.css";
import "../../fonts/font-awesome.min.css";

function Features(props) {
  return (
    <section className="features-clean">
      <div className="container">
        <div className="intro">
          <h2 className="text-center">Features</h2>
          <p className="text-center">
            Discover the features that make our stock market platform the go-to
            choice for traders and investors. Dive into a world of insightful
            tools and resources.
          </p>
        </div>
        <div className="row features">
          <div className="col-sm-6 col-lg-4 item">
            <i className="fa fa-line-chart icon"></i>
            <h3 className="name">Real-Time Data</h3>
            <p className="description">
              Access up-to-the-minute stock market data. Stay informed with live
              updates and market trends.
            </p>
          </div>
          <div className="col-sm-6 col-lg-4 item">
            <i className="fa fa-bar-chart icon"></i>
            <h3 className="name">Advanced Analytics</h3>
            <p className="description">
              Leverage powerful analytics tools. Analyze stock performance with
              detailed charts and indicators.
            </p>
          </div>
          <div className="col-sm-6 col-lg-4 item">
            <i className="fa fa-briefcase icon"></i>
            <h3 className="name">Portfolio Management</h3>
            <p className="description">
              Manage your investments effectively. Organize and track your
              portfolio with ease.
            </p>
          </div>
          <div className="col-sm-6 col-lg-4 item">
            <i className="fa fa-bell icon"></i>
            <h3 className="name">Alerts & Notifications</h3>
            <p className="description">
              Stay ahead of market movements. Set up custom alerts for price
              changes and news updates.
            </p>
          </div>
          <div className="col-sm-6 col-lg-4 item">
            <i className="fa fa-comments icon"></i>
            <h3 className="name">Community Insights</h3>
            <p className="description">
              Engage with a community of traders. Share insights, strategies,
              and tips for successful trading.
            </p>
          </div>
          <div className="col-sm-6 col-lg-4 item">
            <i className="fa fa-shield icon"></i>
            <h3 className="name">Secure & Reliable</h3>
            <p className="description">
              Trade with confidence. Our platform prioritizes security to
              safeguard your investments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
