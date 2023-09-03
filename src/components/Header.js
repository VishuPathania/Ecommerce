import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import "../App.css";
import Nav from "react-bootstrap/Nav";
import { Link, useNavigate } from "react-router-dom";
import { Cart } from "./CartContext";
import AuthContext from "./store/AuthContext";

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const history = useNavigate();
  const { cart } = useContext(Cart);

  const logoutHandler = () => {
    alert("Are you sure you want to log out?");
    authCtx.Logout();
    history("/login");
  };

  const iconContainerStyle = { margin: "0 20px" }; // Increased icon margin

  return (
    <>
      <div className="navBar" style={{ padding: "10px" }}>
        <Nav
          className="justify-content-center"
          activeKey="/home"
          style={{ padding: "2px" }}
        >
          <div style={iconContainerStyle}>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="fa-sharp fa-solid fa-house"
            >
              Home 
            </Link>
          </div>
          {isLoggedIn && (
            <div style={iconContainerStyle}>
              <Link
                to="/store"
                style={{ textDecoration: "none" }}
                className="fa-solid fa-store"
              >
                Store
              </Link>
            </div>
          )}
          <div style={iconContainerStyle}>
            <Link
              to="/about"
              onClick={() => props.handleShow(false)}
              style={{ textDecoration: "none" }}
              className="fa-solid fa-circle-info"
            >
              About
            </Link>
          </div>
          <div style={iconContainerStyle}>
            <Link
              to="/ContactUs"
              style={{ textDecoration: "none" }}
              className="fa-solid fa-phone"
            >
              Contact Us
            </Link>
          </div>
          {isLoggedIn && (
            <div style={iconContainerStyle}>
              <Link
                to="/login"
                onClick={logoutHandler}
                style={{ textDecoration: "none" }}
                className="fa-solid fa-user"
              >
                Logout
              </Link>
            </div>
          )}
          {!isLoggedIn && (
            <div style={iconContainerStyle}>
              <Link
                to="/login"
                style={{ textDecoration: "none" }}
                className="fa-solid fa-user"
              >
                Log In
              </Link>
            </div>
          )}
          {!isLoggedIn && (
            <div style={iconContainerStyle}>
              <Link
                to="/signup"
                style={{ textDecoration: "none" }}
                className="fa-solid fa-user"
              >
                SignUp
              </Link>
            </div>
          )}
        </Nav>
      </div>
      <div className="flex shopping-cart ">
        <h4
          style={{
            color: "green",
            fontFamily: "Segoe Print",
            textDecoration: "none",
          }}
        >
          Shopping Cart
        </h4>
        <Link to="/cart">
          {isLoggedIn && (
            <Button
              variant="success"
              onClick={() => props.handleShow(true)}
              className="fa-solid fa-cart-shopping"
            >
              Cart
              <sup>{cart.length}</sup>
            </Button>
          )}
        </Link>
      </div>
    </>
  );
};

export default Header;
