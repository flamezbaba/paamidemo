import styled, { ThemeProvider, css } from "styled-components";
import { theme } from "../utils/theme";
import { mobile, tablet } from "../responsive";
import TopNav from "../components/TopNav";

import bottle from "../assets/bottle.png";
import palm1 from "../assets/palm1.png";
import happy from "../assets/happy.png";
import logo from "../assets/logo.png";
import bg2 from "../assets/bg2.png";
import thumb from "../assets/thumb.png";
import p1 from "../assets/p1.png";
import { dealers, footerLinks } from "../data";

import { FiMoreHorizontal } from "react-icons/fi";
import { useState } from "react";

const bounceKeyFrame = css`
  @keyframes nudge {
    0%,
    100% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.6);
    }
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.myWhite};

  .sect-a {
    padding: 0 0 10px 0;
    display: flex;
    justify-content: space-between;
    ${mobile({ "flex-direction": "column" })}
    position: relative;
    /* overflow: scroll; */
    z-index: 2;
    

    .l1 {
      width: 30%;
      display: flex;
      position: relative;
      justify-content: flex-end;
      ${mobile({ width: "100%" })}
      ${tablet({ display: "none" })}
      /* overflow: hidden; */

      img {
        width: 26vw;
        position: absolute;
        top: -120px;
        left: 0;        
        ${mobile({left: "50%",width: "40vw", top: "-280px" })}
      }
    }

    .l2 {
      width: 70%;
      display: flex;
      flex-direction: column;
      color: ${(props) => props.theme.textColor};
      ${mobile({ width: "100%","margin-top":"-180px", "z-index": "1000" })}

      .kk {
        width: 60%;
        ${mobile({ width: "100%" })}

        p:nth-child(1) {
          font-size: 3rem;
          font-weight: 500;
          padding: 50px 20px 30px 20px;
          ${mobile({"padding": "50px 200px 10px 5%"})}
        }

        p:nth-child(2) {
          padding: 0 20px 30px 20px;
          font-size: 1.2rem;
          font-weight: lighter;
        }
      }

      .pp {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

        img {
          width: 30vw;
          ${mobile({ width: "80vw" })}
          float: right;
        }
      }
    }
  }

  .sect-b {
    width: 100%;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    height: 400px;
    margin-top: 20px;
    color: ${(props) => props.theme.textColor};
    ${mobile({ "flex-direction": "column" })}

    .l1 {
      width: 60%;
      height: 100%;

      background-image: url(${thumb});
      background-repeat: repeat;
      background-size: 70px;
      background-color: #f9f9f9;
      display: flex;
      justify-content: center;
      align-items: center;
      ${mobile({
        width: "100%",
        height: "300px",
        padding: "0px",
        "flex-wrap": "wrap",
      })}

      p {
        font-size: 4rem;
        font-weight: 500;
        text-transform: capitalize;
        padding: 0 30% 0 70px;

        ${mobile({ "font-size": "2rem", padding: "0 0 0 30px" })}
      }
    }

    .l2 {
      width: 40%;
      height: 400px;
      overflow: hidden;
      position: relative;
      background-image: url(${palm1});
      /* background-image: url("https://image.shutterstock.com/image-photo/palm-wine-coconut-toddy-popular-260nw-559375075.jpg"); */
      background-size: cover;
      display: flex;

      ${mobile({ width: "100%" })}
    }
  }

  .sect-c {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    background-image: url(${happy});
    background-size: cover;
    background-position: center;

    .cc {
      padding: 100px 20% 20px 20%;
      text-align: center;
      p:nth-child(1) {
        color: ${(props) => props.theme.secondColor};
        font-size: 3rem;
        font-weight: 500;
        ${mobile({ "font-size": "1.5rem" })}
      }

      p:nth-child(2) {
        color: #fff;
        font-size: 1rem;
        font-weight: 200;
        margin-top: 20px;

        ${mobile({ "font-size": "0.8rem" })}
      }

      a {
        margin-top: 20px;
        display: inline-block;
        text-align: center;
        align-items: center;
        background-color: ${(props) => props.theme.mainColor};
        color: #fff;
        padding: 20px 30px;
        border-radius: 5px;
        ${mobile({ padding: "10px 20px" })}
      }
    }
  }

  .sect-d {
    padding: 30px 5% 0 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .l1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 0 20px 0px;

      .pd {
        font-size: 1.4rem;
        font-weight: 500;
      }

      .md {
        display: flex;
        font-size: 0.8rem;
        font-weight: normal;
        align-items: center;
        gap: 20px;
      }
    }

    .l2 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      overflow: scroll;
      ${mobile({
        width: "100%",
        gap: '50px',
      })}

      .tt {
        height: auto;
        text-align: left;
        ${mobile({ width: "100%" })}

        .title {
          font-size: 1.4rem;
          font-weight: 500;
          margin-top: 10px;
        }

        .location {
          font-size: 0.7rem;
          font-weight: 500;
          margin-top: 5px;
        }

        a {
          margin-top: 5px;
          display: inline-block;
          text-align: center;
          align-items: center;
          border: 1px solid ${(props) => props.theme.mainColor};
          color: ${(props) => props.theme.mainColor};
          background-color: transparent;
          padding: 7px 10px;
          font-size: 0.7rem;
          cursor: pointer;
          transition: all 1s ease;

          &:hover {
            color: #fff;
            background-color: ${(props) => props.theme.mainColor};
            transition: all 1s ease;
          }
        }

        img {
          width: 300px;
          height: 250px;
        }
      }
    }
  }

  .sect-e {
    width: 100%;
    height: 500px;
    background-image: url(${bg2});
    background-position: right;
    background-position-x: top;
    background-position-y: right;
    background-repeat: no-repeat;
    background-size: 50vw;
    background-color: ${(props) => props.theme.mainColor};
    margin: 60px 0 0 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    ${mobile({ "background-position": "center", "background-size":"350vw", height: "auto" })}

    .ab {
      padding: 0 0 0 5%;
      color: ${(props) => props.theme.secondColor};
      width: 50%;
      ${mobile({ width: "100%", padding: "50px 30px 50px 5%" })}

      p:nth-child(1) {
        font-size: 2rem;
        font-weight: 500;
      }

      p:nth-child(2) {
        font-size: 1.3rem;
        font-weight: normal;
        margin-top: 20px;
        line-height: 1.5;
      }

      a {
        margin-top: 20px;
        display: inline-block;
        text-align: center;
        align-items: center;
        border: 1px solid ${(props) => props.theme.secondColor};
        color: ${(props) => props.theme.mainColor};
        background-color: ${(props) => props.theme.secondColor};
        padding: 7px 20px;
        font-size: 0.7rem;
        cursor: pointer;
        transition: all 0.5s ease;

        &:hover {
          color: ${(props) => props.theme.secondColor};
          background-color: transparent;
          transition: all 0.5s ease;
        }
      }
    }
  }

  .sect-f {
    width: 100%;
    height: auto;
    background-color: #e5e5e5;
    display: flex;
    

    .ff {
      padding: 50px 5% 50px 5%;
      display: flex;
      justify-content: space-between;
      ${mobile({ "flex-direction": "column", gap: "50px" })}

      .l1 {
        width: 50%;
        ${mobile({ width: "100%" })}

        img {
          width: 250px;
          ${bounceKeyFrame}
        }

        .dc {
          width: 70%;
          ${mobile({ width: "100%" })}
          p:nth-child(1) {
            font-weight: 600;
          }
          p:nth-child(2) {
            margin-top: 5px;
            font-stretch: wider;
            font-weight: 300;
            line-height: 1.5;
          }
        }
      }

      .l2 {
        width: 40%;
        display: flex;
        gap: 40px;
        ${mobile({ width: "100%", "flex-direction":"column" })}

        .lnk {
          text-transform: capitalize;
          header {
            font-weight: 500;
            color: ${(props) => props.theme.textColor};
          }

          section {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            gap: 30px;
            ${mobile({ width: "100%", "flex-direction":"row", "flex-wrap":"wrap" })}

            a {
              color: ${(props) => props.theme.textColor};
            }
          }
        }
      }
    }
  }
`;

const Home = () => {
  const [bounceStyle, setBounceStyle] = useState({});

  const bounceImg = (e) => {
    setBounceStyle({ animation: "nudge 2s ease 2 normal" });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <TopNav></TopNav>
        <div className="sect-a">
          <div className="l1">
            <img src={bottle} alt="" />
          </div>
          <div className="l2">
            <div className="kk">
              <p>The best african drink for all seasons and celebrations </p>
              <p>
                Paami is the drink you order when you buy a new car, born a new
                child or just want to be tipsy and block the world out,
                responsible
              </p>
            </div>
            <div className="pp">
              <img src={p1} alt="" />
            </div>
          </div>
        </div>
        <div className="sect-b">
          <div className="l1">
            <p>healthy substitute for western beers and wines</p>
          </div>
          <div className="l2"></div>
        </div>
        <div className="sect-c">
          <div className="l1">
            <div className="cc">
              <p>Create memories, build connections and grow with Paami Bar</p>
              <p>
                Join the first virtual palmwine bar and meet with prospectve
                lovers, business partners and friends
              </p>
              <a href="/">Join Paami Bar</a>
            </div>
          </div>
        </div>
        <div className="sect-d">
          <div className="l1">
            <div className="pd">
              <p>Popular Dealers</p>
            </div>
            <div className="md">
              <span>More Dealers </span>
              <FiMoreHorizontal />
            </div>
          </div>
          <div className="l2">
            {dealers.map((item) => (
              <div className="tt">
                <img src={item.img_url} alt="" />
                <p className="title">{item.title}</p>
                <p className="location">{item.location}</p>
                <a href="/">Contact Shop</a>
              </div>
            ))}
          </div>
        </div>
        <div className="sect-e">
          <div className="ab">
            <p>About Paami Drink</p>
            <p>
              Paami is brewed for modern young Africans who enjoy Palm Wine but
              can't drink unless they visit local bars. Paami is produced in the
              most healthy plants in the heart of Enugu, South Eastern Nigeria
              with no preservatives or additives.
              <br />
              <br />
              Approved by NAFDAC, Paami is the drink you're permitted to get
              drunk on with almost no consequences.
            </p>
            <a href="/">Read More</a>
          </div>
        </div>
        <div className="sect-f">
          <div className="ff">
            <div className="l1">
              <img src={logo} alt="" onClick={bounceImg} style={bounceStyle} />
              <div className="dc">
                <p>Disclaimer</p>
                <p>
                  Paami is a fictional drink and this is a passion project but
                  really, why are you reading this part of the website? We are
                  glad you are curious and find this project interesting still.
                  Thank you for reading.
                </p>
              </div>
            </div>
            <div className="l2">
              {footerLinks.map((item) => (
                <div className="lnk">
                  <header>{item.header}</header>
                  <section>
                    {item.links.map((l) => (
                      <a href="/">{l}</a>
                    ))}
                  </section>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
