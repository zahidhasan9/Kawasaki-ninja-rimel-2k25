import React from "react";
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ReactPlayer from "react-player"; // For video playback

// Import images and video
import Slide from "../Assets/Slide.jpg";
import Slide1 from "../Assets/Slide1.jpg";
import Slide2 from "../Assets/Slide2.jpg";
import Slide3 from "../Assets/Slide3.jpg";
import Slide4 from "../Assets/Slide4.jpg";
import Slide5 from "../Assets/Slide5.jpg";
import Slide6 from "../Assets/Slide6.jpg";
import Slide7 from "../Assets/Slide7.jpg";
import Slide8 from "../Assets/Slide8.jpg";
import Slide9 from "../Assets/Slide9.jpg";
import Slide10 from "../Assets/Slide10.jpg";
import VideoSlide from "../Assets/VideoSlider.mp4";

// Sample slides data (both images and videos)
const slides = [
  {
    type: "video",
    src: VideoSlide,
    title: "GROUNDBREAKING 4-CYLINDER ENGINE",
    des: "92-HP RIDGE® / 116-HP RIDGE® XR",
    price: "STARTING AT $23,999 MSRP",
  },
  {
    type: "image",
    src: Slide,
    title: "BE NEXT",
    des: "LEAD THE PACK WITH THE MOST COMPETITIVE RACING PACKAGE",
    price: "STARTING AT $8,999 MSRP",
  },
  {
    type: "image",
    src: Slide1,
    title: "SAVE UP TO $3,000*",
    des: "LEAD THE PACK WITH THE MOST COMPETITIVE RACING PACKAGE",
    price: "STARTING AT $5,999 MSRP",
  },
  {
    type: "image",
    src: Slide2,
    title: "DESTINATION: EVERYWHERE",
    des: "SPORT TOURING PERFORMANCE FOR COMFORTABLE COMMUTES AND LONG-RANGE ADVENTURES",
    price: "STARTING AT $19,499 MSRP",
  },
  {
    type: "image",
    src: Slide3,
    title: "ADVENTURE AWAITS",
    des: "THE PERFECT RIDE FOR ADVENTURERS",
    price: "STARTING AT $14,999 MSRP",
  },
];

const Carousel = () => {
  return (
    <div className="carousel-container">
      <Splide
        options={{
          type: 'fade', // Use fade effect between slides
          height: 'auto',
          autoplay: true,
          interval: 3000,
          arrows: true,
          pagination: true,
          pauseOnHover: true,
          gap: '1rem',
          focus: 'center', // Keeps the active slide in the center
          breakpoints: {
            600: {
              gap: '0.5rem',
            },
          },
        }}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div className="slide-container">
              {slide.type === 'image' ? (
                <img
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  className="slide-image"
                />
              ) : (
                <ReactPlayer
                  url={slide.src}
                  playing={true}
                  loop={true}
                  muted={true}
                  width="100%"
                  height="auto"
                />
              )}

              {/* Text Content */}
              <div className="slide-content">
                <h3>{slide.title}</h3>
                <p>{slide.des}</p>
                <span>{slide.price}</span>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carousel;
