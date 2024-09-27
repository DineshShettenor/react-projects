import React, { useRef, useState } from "react";
import { useOutSideClick } from "./useOutSideClick";

export const UseOnclickOutsideTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutSideClick(ref, () => setShowContent(false));
  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>click out side div to hide</h1>
          <h2>it won't close if click inside the div</h2>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show content</button>
      )}
    </div>
  );
};
