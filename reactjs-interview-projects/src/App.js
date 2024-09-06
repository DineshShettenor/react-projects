import "./App.css";
import Accordian from "./components/accordian";
import { RandomColor } from "./components/random-color/RandomColor";
import { StarRating } from "./components/star-rating/StarRating";

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian /> */}

      {/* Random color component */}
      {/* <RandomColor /> */}

      {/* Star Rating */}
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
