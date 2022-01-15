import React, { Component } from "react";
import "../Style.css";
import Test from "../Caarousel/Carousel";
import logo from "../../assets/ss-logo.png";

class ScreenshotPage extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-md-4 lg-5 sm-12 xs-12 stxt">
              <h2>
                Applic Apps <br /> Screenshot
              </h2>
              <p>
                There's always that one thing that you're passionate about but
                imagine it being even better when you can actually share it
                along with other fanatics just like you. No matter what the
                interest, create niche, nicher, nichest hood and find people to
                geek together.
              </p>
            </div>
            <div className="col-md-6 lg-7 sm-12 xs-12 simg">
              <img class="img-fluid" src={logo} alt="logo" />
              {/* <Test /> */}
              {/* <img
                class="img-fluid"
                src="https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp2.png.pagespeed.ic.JbwxSe9pMq.webp"
                alt="logo"
              />
              <img
                class="img-fluid"
                src="https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp2.png.pagespeed.ic.JbwxSe9pMq.webp"
                alt="logo"
              />
              <img
                class="img-fluid"
                src="https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp2.png.pagespeed.ic.JbwxSe9pMq.webp"
                alt="logo"
              /> */}
              {/* <img
                  class="img-fluid"
                  src="https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp2.png.pagespeed.ic.JbwxSe9pMq.webp"
                  alt="logo"
                /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScreenshotPage;
