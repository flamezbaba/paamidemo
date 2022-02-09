import styled, { ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";
import { mobile, tablet, laptop } from "../responsive";
import logo from "../assets/logo.png";
import bg1 from "../assets/bg1.png";
import React, { useState, useEffect } from "react";

import { MdClose, MdMenu } from "react-icons/md";
import { FiUser, FiShoppingCart } from "react-icons/fi";

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ justifyContent: "flex-start" })};
  ${tablet({ justifyContent: "flex-start" })};

  img {
    width: 130px;
  }
`;

const Header = styled.div`
  padding: 0 5% 0 5%;
  background-color: transparent;
  display: flex;
  height: 70px;
  justify-content: space-between;
  align-items: center;

  .hd2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    ${mobile({ display: "none" })};

    a {
      text-decoration: none;
      color: ${(props) => props.theme.textColor};
      position: relative;
      padding-bottom: 7px;

      &:hover {
        color: ${(props) => props.theme.mainColor};

        &:after {
          content: "";
          width: 80%;
          height: 1.1px;
          background-color: ${(props) => props.theme.mainColor};
          position: absolute;
          bottom: 0;
          left: 7%;
          padding: 0;
        }
      }
    }
  }

  .hd3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    ${mobile({ display: "none" })};

    a:nth-child(1) {
      background-color: transparent;
      color: ${(props) => props.theme.secondColor};
      border: 1px solid ${(props) => props.theme.secondColor};
      padding: 7px 15px;
    }

    svg {
      color: ${(props) => props.theme.secondColor};
    }
  }

  .mobile-wrapper {
    ${laptop({ display: "none" })};
    svg {
      cursor: pointer;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: #fff;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  background-image: url(${bg1});
  background-repeat: no-repeat;
  background-position: right;
  background-position-x: right;
  background-position-y: top;
  background-size: 32vw;
  padding-bottom: 200px;
  padding-top: 0;
  ${mobile({ "background-image": "none" })};
  transition: all 1s ease;

  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    overflow: hidden;

    img {
      width: 40%;
      animation: nudge 2s ease infinite normal;

      @keyframes nudge {
        0% {
          transform: scale(0.7);
        }

        50% {
          transform: scale(1.4);
        }

        100% {
          transform: scale(1);
        }
      }
    }
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    height: 1000px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    z-index: 10;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.textColor};
    }

    .cc {
      display: flex;
      justify-content: flex-end;
      margin-right: 20px;
      margin-top: 20px;
      svg {
        text-align: right;
        color: ${(props) => props.theme.primaryColor};
        cursor: pointer;

        &:hover {
          transform: scale(1.1);
          transition: all 0.5s ease;
        }
      }
    }

    .dd {
      margin-top: 30px;
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .hd1 {
        display: flex;
        flex-direction: column;
        gap: 50px;
        text-align: center;
      }
    }
  }
`;

const Hero = styled.div`
  padding: 0 5% 0 5%;
  background-color: transparent;
  display: flex;
  color: ${(props) => props.theme.textColor};

  p:nth-child(1) {
    margin-top: 5vw;
    font-size: 3rem;
    font-weight: 500;
    text-transform: capitalize;
  }

  p:nth-child(2) {
    margin-top: 10px;
    font-size: 1.4rem;
  }

  a {
    margin-top: 20px;
    display: inline-block;
    text-align: center;
    align-items: center;
    background-color: ${(props) => props.theme.mainColor};
    color: #fff;
    padding: 10px 30px;
  }
`;

const TopNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  const toggleMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    document.onreadystatechange = function () {
      if (document.readyState === "complete") {
        setTimeout(() => {
          setShowPreloader(false);
        }, 4000);
      }
    };
    // setTimeout(() => {
    //   setShowPreloader(false);
    // }, 4000);
  });

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {showPreloader && (
          <div className="preloader">
            <img src={logo} alt="" />
          </div>
        )}
        <Header>
          <Logo>
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </Logo>

          <div className="hd2">
            <a href="/">Home</a>
            <a href="/">About Us</a>
            <a href="/">Events</a>
            <a href="/">Contact Us</a>
          </div>
          <div className="hd3">
            <a href="/">Shop Now</a>
            <FiShoppingCart />
            <FiUser />
          </div>

          <div className="mobile-wrapper">
            <MdMenu size={35} onClick={toggleMenu} />
          </div>
        </Header>
        <Hero>
          <div>
            <p>
              Brewed for Gen-Z,
              <br />
              Taste of Our
              <br />
              Ancestors.
            </p>
            <p>
              Connect to your african heritage with the only <br /> palm wine
              drink with no additives
            </p>
            <a href="/">Buy Paami</a>
          </div>
        </Hero>
        {showMenu && (
          <div className="mobile-menu">
            <div className="cc">
              <MdClose size={45} onClick={closeMenu} />
              {/* <MdClose size={45} /> */}
            </div>
            <div className="dd">
              <div className="hd1">
                <a href="/">Home</a>
                <a href="/">About Us</a>
                <a href="/">Events</a>
                <a href="/">Contact Us</a>
                <a href="/">Shop Now</a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default TopNav;
