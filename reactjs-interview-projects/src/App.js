import "./App.css";
import Accordian from "./components/accordian";
import { ImageSlider } from "./components/image-slider/ImageSlider";
import { LightDarkMode } from "./components/light-dark-mode/LightDarkMode";
import { LoadMoreButton } from "./components/load-more-button/LoadMoreButton";
import { QRCodeGenerator } from "./components/qr-code-generator/QRCodeGenerator";
import { RandomColor } from "./components/random-color/RandomColor";
import { ScrollIndicator } from "./components/scroll-indicator/ScrollIndicator";
import { StarRating } from "./components/star-rating/StarRating";
import menus from "./components/tree-view/data";
import { TreeView } from "./components/tree-view/TreeView";

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian /> */}

      {/* Random color component */}
      {/* <RandomColor /> */}

      {/* Star Rating */}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image Slider */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10}/> */}

      {/* load more button */}
      {/* <LoadMoreButton /> */}

      {/* tree view */}
      {/* <TreeView menus={menus}/> */}

      {/* qr code generator */}
      {/* <QRCodeGenerator /> */}

      {/* light dark mode */}
      {/* <LightDarkMode /> */}

      {/* scroll indicator */}
      <ScrollIndicator url={'https://dummyjson.com/products'}/>
    </div>
  );
}

export default App;
