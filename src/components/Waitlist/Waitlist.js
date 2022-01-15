import React, { Component } from "react";

class Waitlist extends Component {
  render() {
    return (
      <>
        <div class="waitlist text-center" id="waitlist">
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
        </div>
      </>
    );
  }
}

export default Waitlist;
