import "./App.css";
import Accordian from "./components/accordian";
import { UseOnclickOutsideTest } from "./components/use-outside-modal/UseOnclickOutsideTest";
import { CustomModal } from "./components/custom-modal/CustomModal";
import { ModalTest } from "./components/custom-modal/ModalTest";
import { TabsTest } from "./components/custom-tabs/TabsTest";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import { FeatureFlags } from "./components/feature-flag/FeatureFlags";
import { GithubProfileFinder } from "./components/github-profile-founder/GithubProfileFinder";
import { ImageSlider } from "./components/image-slider/ImageSlider";
import { LightDarkMode } from "./components/light-dark-mode/LightDarkMode";
import { LoadMoreButton } from "./components/load-more-button/LoadMoreButton";
import { QRCodeGenerator } from "./components/qr-code-generator/QRCodeGenerator";
import { RandomColor } from "./components/random-color/RandomColor";
import { ScrollIndicator } from "./components/scroll-indicator/ScrollIndicator";
import { SearchAutoComplete } from "./components/search-auto-complete/SearchAutoComplete";
import { StarRating } from "./components/star-rating/StarRating";
import TicTacToe from "./components/tic-tact-toe";
import menus from "./components/tree-view/data";
import { TreeView } from "./components/tree-view/TreeView";
import { UseFetchCustomHookTest } from "./components/useFetch-hook/UseFetchCustomHookTest";
import { UseWindowResizeTest } from "./components/use-window-resize/UseWindowResizeTest";
import { ScrollToTopAndBottom } from "./components/scroll-top-to-bottom/ScrollToTopAndBottom";
import { ScrollToSection } from "./components/scroll-top-to-bottom/ScrollToSection";

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
      {/* <ScrollIndicator url={'https://dummyjson.com/products'}/> */}

      {/* custom tabs */}
      {/* <TabsTest /> */}

      {/* custom modal */}
      {/* <ModalTest /> */}

      {/* github profile founder */}
      {/* <GithubProfileFinder /> */}

      {/* search auto complete */}
      {/* <SearchAutoComplete /> */}

      {/* tic tact toe */}
      {/* <TicTacToe /> */}

      {/* Feature flag implementation */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* useFetch custom hook */}
      {/* <UseFetchCustomHookTest /> */}

      {/* useOnclick outside custom hook */}
      {/* <UseOnclickOutsideTest /> */}

      {/* useWindowResize Custom Hook */}
      {/* <UseWindowResizeTest /> */}

      {/* scroll to top and botttom */}
      {/* <ScrollToTopAndBottom /> */}

      {/* scroll to section */}
      <ScrollToSection />
    </div>
  );
}

export default App;
