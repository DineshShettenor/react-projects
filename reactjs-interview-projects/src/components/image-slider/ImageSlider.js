import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export const ImageSlider = ({ url, page, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImages = async (getUrl) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        console.log(data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(true);
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  if (isLoading) {
    return <div>Loading data!. Please Wait....</div>;
  }

  if (errorMessage !== null) {
    return <div>Error Occured - {errorMessage}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrev}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItems, index) => (
            <img
              key={imageItems.id}
              alt={imageItems.download_url}
              src={imageItems.download_url}
              className={currentSlide === index ? "current-image": "current-image hide-current-image"}
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicator">
        {images && images.length
          ? images.map((_, index) => (
              <button 
              key={index}
              onClick={() => setCurrentSlide(index)} 
              className={currentSlide === index ? "current-indicator":" current-indicator inactive-indicator"}></button>
            ))
          : null}
      </span>
    </div>
  );
};
