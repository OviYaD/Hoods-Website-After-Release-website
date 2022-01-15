import React from "react";
import ItemsCarousel from "react-items-carousel";
import range from "lodash/range";
// import { Description } from "../Benefits/Description";

export default class Test extends React.Component {
  Description = [
    "https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp1.png.pagespeed.ic.Iz5rAscd9N.webp",
    "https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp2.png.pagespeed.ic.JbwxSe9pMq.webp",
    "https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp3.png.pagespeed.ic.AlofEJC5tu.webp",
    "https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp1.png.pagespeed.ic.Iz5rAscd9N.webp",
    "https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp2.png.pagespeed.ic.JbwxSe9pMq.webp",
    "https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp3.png.pagespeed.ic.AlofEJC5tu.webp",
    "https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp1.png.pagespeed.ic.Iz5rAscd9N.webp",
    "https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp2.png.pagespeed.ic.JbwxSe9pMq.webp",
    "https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp3.png.pagespeed.ic.AlofEJC5tu.webp",
    "https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp1.png.pagespeed.ic.Iz5rAscd9N.webp",
    "https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp2.png.pagespeed.ic.JbwxSe9pMq.webp",
    "https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp3.png.pagespeed.ic.AlofEJC5tu.webp",
    "https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp1.png.pagespeed.ic.Iz5rAscd9N.webp",
    "https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp2.png.pagespeed.ic.JbwxSe9pMq.webp",
    "https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp3.png.pagespeed.ic.AlofEJC5tu.webp",
    "https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp1.png.pagespeed.ic.Iz5rAscd9N.webp",
    "https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp2.png.pagespeed.ic.JbwxSe9pMq.webp",
    "https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp3.png.pagespeed.ic.AlofEJC5tu.webp",
    "https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp1.png.pagespeed.ic.Iz5rAscd9N.webp",
    "https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp2.png.pagespeed.ic.JbwxSe9pMq.webp",
  ];
  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });

    setTimeout(() => {
      this.setState({
        children: this.createChildren(10),
      });
    }, 100);
  }

  createChildren = (n) =>
    range(n).map((i) => (
      <div key={i}>
        <img src={this.Description[i]} alt="" />
      </div>
    ));

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    const { activeItemIndex, children } = this.state;

    return (
      <ItemsCarousel
        // Placeholder configurations
        style={{ userSelect: "none" }}
        enablePlaceholder
        numberOfPlaceholderItems={5}
        minimumPlaceholderTime={1000}
        // placeholderItem={
        //   <div style={{ height: 200, background: "#900" }}>Placeholder</div>
        // }
        // Carousel configurations
        numberOfCards={3.5}
        gutter={12}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={false}
        // Active item configurations
        requestToChangeActive={this.changeActiveItem}
        activeItemIndex={activeItemIndex}
        activePosition={"center"}
        chevronWidth={24}
        rightChevron={">"}
        leftChevron={"<"}
        outsideChevron={false}
      >
        {children}
      </ItemsCarousel>
    );
  }
}
