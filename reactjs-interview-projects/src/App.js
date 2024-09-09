import "./App.css";
import Accordian from "./components/accordian";
import { ImageSlider } from "./components/image-slider/ImageSlider";
import { LoadMoreButton } from "./components/load-more-button/LoadMoreButton";
import { RandomColor } from "./components/random-color/RandomColor";
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
      <TreeView menus={menus}/>
    </div>
  );
}

export default App;
