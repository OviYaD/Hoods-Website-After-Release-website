import React, { Component } from "react";
import "../Style.css";
// import "./Features.css";
import { Description } from "./Description";
import logo from "./home-logo.png";
import icon1 from "./Icon-1.png";
import icon2 from "./Icon-2.png";
import icon3 from "./Icon-3.png";
import icon4 from "./Icon-4.png";

class Features extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid feature">
          <div className="row">
            <div className="col-md-5 sm-10 xs-10 lg-4 xl-4 text-center fl">
              <img
                class="img-fluid rounded mx-auto d-block flogo"
                src={logo}
                alt="logo"
                width="100%"
              />
            </div>
            <div className="col-md-7 sm-12 xs-12 lg-8 xl-7 ftxt">
              <div className="row">
                <h1>
                  Some of our best features <br /> of our App!
                </h1>
              </div>
              <div className="row cards">
                {/* {Description.map((item, index) => {
                    return (
                      <div className="col-md-7">
                        <div className="col-md-1">
                          <i className={item.cName}></i>
                        </div>
                        <div className="col-md-5">
                          <h2>{item.title}</h2>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    );
                  })} */}
                <div className="col-md-1 sm-12 xs-12 lg-3 xl-4  text-center">
                  <img src={icon1} alt="" className="img-fluid icon" />
                </div>
                <div className="col-md-5 sm-12  text-left ">
                  <h2>Join or find a niche community </h2>
                  <p>
                    Find your soul tribe. Experience the online version of
                    Comic-Con where all of you are positively crazy about that
                    one thing. A community is waiting for you at the end of this
                    path.
                  </p>
                </div>
                <div className="col-md-1 sm-12 text-center">
                  <img src={icon2} alt="" className="img-fluid icon" />
                </div>
                <div className="col-md-5 text-left">
                  <h2>Find people with common interests </h2>
                  <p>
                    Whether it’s Nemo, Naman, Neha or a nemesis that you are
                    looking for, find everyone on Hoods. Connect with friends,
                    and do the ‘getting to know every stranger’ bit again except
                    this time you already know that you share an interest with
                    them.
                  </p>
                </div>
                <div className="col-md-1 text-center">
                  <img src={icon3} alt="" className="img-fluid icon3" />
                </div>
                <div className="col-md-5 text-left">
                  <h2>Clearing or asking doubts and queries</h2>
                  <p>
                    Life or physics, find solutions for all confusions. What
                    keeps you awake at night might scratch someone else’s head
                    too, and what other joy is there than finally getting an
                    answer to a few queries.
                  </p>
                </div>
                <div className="col-md-1 text-center">
                  <img src={icon4} alt="" className="img-fluid icon" />
                </div>
                <div className="col-md-5 text-left ">
                  <h2>Keep your city vibrant</h2>
                  <p>
                    Plan or promote events, and never live a boring moment
                    again. A perfect platform to push yourself out the door and
                    carve a vivacious social life for yourself as well as your
                    city.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;

/* {Description.map((item,index) =>{return (<div className="col-md-6 desc">
                    <i className={item.cName}></i>
                  </div>)})} */
