import React, { Component } from "react";
import "../Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/home-logo.png";
import heading from "../../assets/heading.png";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container ">
          <div className="row ">
            <div className="col-lg-6 md-6 sm-12 xm-12  mx-auto home-txt">
              {/* <p>KNOW YOUR AREA</p>
              <h1>Get Things Done with Hoods</h1> */}
              <img src={heading} alt="" className="img-fluid" width={250} />
              <p className="guid">
                Word on the street is that your city is soon gonna have its own
                exclusive social network.
              </p>
              <a href="#waitlist">
                <button className="bt1">Join the waitlist</button>
              </a>
              {/* <button className="play">
                <i class="fas fa-play"></i>
              </button> */}
            </div>
            <div className="col-lg-6 md-6 sm-12 xm-12 himg">
              <img
                class="img-fluid rounded mx-auto d-block"
                src={logo}
                alt="logo"
                width="500"
                height="100"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
