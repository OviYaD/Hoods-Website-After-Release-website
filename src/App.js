import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import Benefits from "./components/Benefits/Benefits";
import ScreenshotPage from "./components/ScreenshotsPage/ScreenshotsPage";
import Download from "./components/Download/Download";
import Waitlist from "./components/Waitlist/Waitlist";
import Contact from "./components/contact/contact";
import DemoCarousel from "./components/Caarousel/Carousel";
import Test from "./components/Caarousel/Carousel";
// import Contact from "./components/contact/contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <DemoCarousel /> */}
      {/* <Test /> */}
      <Features />
      <Benefits />
      <ScreenshotPage />
      <Download />
      <Waitlist />
      <Contact />
      {/* <Waitlist /> */}
      {/* <Navbar /> */}
      {/* <Home /> */}

      {/* <Features /> */}
      {/* <Benefits /> */}
      {/* <ScreenshotPage /> */}
      {/* <Download /> */}
      {/* <Waitlist /> */}
      {/* 
      <Home />
       
      
      <ScreenshotPage />
      <Download />
       */}
      {/* */}
    </div>
  );
}

export default App;
