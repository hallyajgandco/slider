import React, { useState } from "react";
import "./Slider.css";
import dataSlider from "./dataSlider";
import BtnSlider from "./btnSlider";

export default function Slider() {
  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false,
  });
  const nextSlide = () => {
    if (slideAnim.index !== dataSlider.length) {
      setSlideAnim({ index: slideAnim.index + 1, inProgress: true });
    } else if (slideAnim.index === dataSlider.length) {
      setSlideAnim({ index: 1, inProgress: true });
    }
  };

  const prevSlide = () => {
    if (slideAnim.index !== 1) {
      setSlideAnim({ index: slideAnim.index - 1, inProgress: true });
    } else if (slideAnim.index === 1) {
      setSlideAnim({ index: 5, inProgress: true });
    }
  };

  const moveDot = (index) => {
    setSlideAnim({ index: index, inProgress: false });
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideAnim.index === index + 1 ? "slide active-anim" : "slide"
            }
          >
            <img src={`/Imgs/img${index + 1}.jpg`} alt="" />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => {
          return (
            <div
              className={slideAnim.index === index + 1 ? "dot active" : "dot"}
              onClick={() => moveDot(index + 1)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

{
  /* <div className={slideAnim.index === 1 ? "dot active" : "dot"}></div>
<div className={slideAnim.index === 2 ? "dot active" : "dot"}></div>
<div className={slideAnim.index === 3 ? "dot active" : "dot"}></div>
<div className={slideAnim.index === 4 ? "dot active" : "dot"}></div>
<div className={slideAnim.index === 5 ? "dot active" : "dot"}></div> */
}
