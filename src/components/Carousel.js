import React from "react";
import CarouselSlide from "./CarouselSlide";
import "../styles/partials/_carousel.scss";

const Carousel = props => {
  // Find the currently centered slide (middle)
  const middleIndex = Math.floor(props.slides.length / 2);
  const currentSlide = props.slides[middleIndex] || props.slides[0];
  return (
    <>
      <div className="carousel__buttons">
        <button aria-label="Previous Slide" className="carousel__control--prev carousel__control">
          <img src="/media/img/icons/icon--chevron-left.svg" alt=""/>
        </button>
        <div className="carousel__indicator">Name</div>
        <button aria-label="Next Slide" className="carousel__control--next carousel__control">
          <img src="/media/img/icons/icon--chevron-right.svg" alt=""/>
        </button>
      </div>
      {currentSlide && currentSlide.description && (
        <div className="carousel__description" style={{margin: '1.5rem 0', textAlign: 'center', color: '#222'}}>
          Description
        </div>
      )}
      <a className="btn carousel__link" href={currentSlide.link} target="_blank" rel="noopener noreferrer">View Site</a>
      <div className="carousel">
        <div className="carousel__mask" id="carousel__mask">
            <div className="carousel__track" id="carousel__track">
            {props.slides.map((slide, index) => {
              const cls = index === 3 ? "middle" : (index === 2 || index === 4) ? "edge" : "";
              return <CarouselSlide className={cls} image={slide.image} description={slide.description} name={slide.name} link={slide.link} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;