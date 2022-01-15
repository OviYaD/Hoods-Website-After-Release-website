import React, { Component } from "react";
// import "./Benefits.css";
import "../Style.css";
import icon1 from "./Icon-4.png";
import icon2 from "./Icon-5.png";
import icon3 from "./Icon-6.png";
import { Description } from "./Description";

class Benefits extends Component {
  render() {
    return (
      <div>
        <div className="benefit">
          <h1>
            How Can We Help You <br /> with Hoods!
          </h1>
          <div className="container-fluid">
            <div className="row justify-content-around">
              {/* {Description.map((item, index) => {
                return (
                  <div className="col-md-3 lg-3 sm-12 xs-12 box" key={index}>
                    <i className={item.icon}></i>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                );
              })} */}
              <div className="col-md-3 lg-3 sm-12 xs-12 box bg1">
                <img src={icon1} alt="" className="img-fluid icon" />

                <h3>City</h3>
                <p>
                  Your city is live and talking. Join now, Don't get FOMO-ed
                  later.
                </p>
              </div>
              <div className="col-md-3 lg-3 sm-12 xs-12 box bg2">
                <img src={icon2} alt="" className="img-fluid icon" />
                <h3>Forum</h3>
                <p>
                  Ask any queries or be a rebel and share your crazy thoughts.
                </p>
              </div>
              <div className="col-md-3 lg-3 sm-12 xs-12 box bg3">
                <img src={icon3} alt="" className="img-fluid icon" />
                <h3>Events</h3>
                <p>Find or host a wild House party or a cosy movie night.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Benefits;
