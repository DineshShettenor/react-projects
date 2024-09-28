import React, { useRef } from "react";
import { useFetch } from "../useFetch-hook/useFetch";

export const ScrollToTopAndBottom = () => {
  const { data, pending, error } = useFetch(
    "https://dummyjson.com/products?limit=1000",
    {}
  );
  const bottomRef = useRef(null);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  if (pending) {
    return <h1>Data fetching please wait....</h1>;
  }
  if (error !== null) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      <h1>Scroll to top and bottom feature</h1>
      <h2>This is top section</h2>
      <button onClick={handleScrollToBottom}>scroll to bottom</button>
      {data && data.length
        ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
        : null}
      <div ref={bottomRef}>
        <button onClick={handleScrollToTop}>scroll to top</button>
        <h2>This is bottom section</h2>
      </div>
    </div>
  );
};
