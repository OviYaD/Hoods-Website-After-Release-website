import React, { Component } from "react";
import "../Style.css";
import logo from "./logo.png";

class Download extends Component {
  render() {
    return (
      <>
        <div className="dl">
          <div className="container-fluid">
            <div className="row justify-content-around">
              <div className="col-md-1 lg-1 sm-1 xs-1 dtx">
                <span class="dot"></span>
              </div>
              <div className="col-md-4 lg-5 sm-12 xs-12 dtx">
                <h1>
                  Our App Available <br /> For Any Device <br /> Download now
                </h1>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate <br />{" "}
                  velit esse cillum dolore fug.
                </p>

                <div className="row">
                  <div className="col-md-12 sm-12 xs-12 lg-6 app">
                    <img
                      class="img-fluid app"
                      src="https://preview.colorlib.com/theme/appco/assets/img/shape/xapp_btn1.png.pagespeed.ic.YpLN5QcG95.webp"
                      alt="logo"
                    />
                    <img
                      class="img-fluid app"
                      src="https://preview.colorlib.com/theme/appco/assets/img/shape/xapp_btn2.png.pagespeed.ic._NK39AKizi.webp"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-5 lg-6 sm-12 xs-12 dimg">
                <img class="img-fluid" src={logo} alt="logo" width="100%" />
              </div>
            </div>

            {/* <div className="wait p-3">
            <h2>Join The Waitlist</h2>
            <form>
              <div class="form-row ">
                <div class="justify-content-center ">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Email or Phone Number"
                  />
                </div>
                <div class="col-auto p-3">
                  <button type="submit" class=" btn btn-primary mb-2">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div> */}
          </div>
        </div>
        {/* <div class="search-job text-center">
          <div className=" p-3">
            <h2>Join The Waitlist</h2>
            <form>
              <div class="form-row ">
                <div class="justify-content-center ">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Email or Phone Number"
                  />
                </div>
                <div class="col-auto p-3">
                  <button type="submit" class=" btn btn-primary mb-2">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div> */}
      </>
    );
  }
}

export default Download;
