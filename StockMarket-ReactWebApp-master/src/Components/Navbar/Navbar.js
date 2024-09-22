import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "./11.png";

function Nav({ brandText, menuItems }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMenuItemClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
    if (item.onClick) {
      item.onClick();
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-light navbar-expand-md"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "20px",
          position: "fixed",
          paddingTop: "20px",
          paddingBottom: "20px",
          top: "10px",
          left: "20px",
          right: "20px",
          zIndex: 1000,
          fontSize: "1.2rem",
          fontFamily: "sans-serif",
          padding: "10px 20px",
        }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand d-flex align-items-center"
            to="/"
            style={{
              textDecoration: "none",
              marginRight: "20px",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "15px",
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{
                  height: "40px",
                }}
              />
            </div>
            <span
              style={{
                color: "white",
                fontSize: "1.5rem",
              }}
            >
              {brandText}
            </span>
          </Link>
          <div className="navbar-nav">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`nav-link ${
                  selectedItem === item ? "selected" : ""
                }`}
                style={{
                  textDecoration: "none",
                  marginRight: "20px",
                  color: selectedItem === item ? "#ffcc00" : "white",
                }}
                onClick={() => handleMenuItemClick(item)}
                onMouseEnter={() => setSelectedItem(item)}
                onMouseLeave={() => setSelectedItem(null)}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
