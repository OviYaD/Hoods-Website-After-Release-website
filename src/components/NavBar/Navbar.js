import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "../Style.css";
import logo from "../../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div>
        <nav className=" NavbarItems">
          <h1 className="navbar-logo ">
            <img
              src={logo}
              alt=""
              // className="img-fluid rounded mx-auto"
              width="100px"
              style={{ marginLeft: "-200px", padding: "20px" }}
            />
          </h1>
          {/* <a href="#" class="navbar-brand ">
            <img src={logo} height="100" alt="CoolBrand" />
          </a> */}

          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>

          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              //console.log(item.cName, item.url, item.title);
              return (
                <li className="nav-item hover-underline-animation" key={index}>
                  {/* <a className={item.cName} href={item.url}>
                    {item.title}
                  </a> */}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
