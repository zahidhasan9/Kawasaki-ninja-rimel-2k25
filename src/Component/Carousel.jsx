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
    model:"RIDGE",
    src: VideoSlide,
    title: "GROUNDBREAKING 4-CYLINDER ENGINE",
    des: "92-HP RIDGE® / 116-HP RIDGE® XR",
    price: "STARTING AT $23,999 MSRP",
  },
  {
    type: "image",
    model:"KX 450SR",
    src: Slide,
    title: "BE NEXT",
    des: "LEAD THE PACK WITH THE MOST COMPETITIVE RACING PACKAGE",
    price: "STARTING AT $8,999 MSRP",
  },
  {
    type: "image",
    Button:"VIEW OFFER",
    src: Slide1,
    title: "SAVE UP TO $3,000*",
    des: "LEAD THE PACK WITH THE MOST COMPETITIVE RACING PACKAGE",
    price: "STARTING AT $5,999 MSRP",
  },
  {
    type: "image",
    model:"VERSYS 1100 SE",
    src: Slide2,
    title: "DESTINATION: EVERYWHERE",
    des: "SPORT TOURING PERFORMANCE FOR COMFORTABLE COMMUTES AND LONG-RANGE ADVENTURES",
    price: "STARTING AT $19,499 MSRP",
  },
  {
    type: "image",
    model:"KX 450SR",
    src: Slide3,
    title: "ADVENTURE AWAITS",
    des: "THE PERFECT RIDE FOR ADVENTURERS",
    price: "STARTING AT $14,999 MSRP",
  },
  {
    type: "image",
    model:"VERSYS 1250 HR",
    src: Slide4,
    title: "PERFORMANCE TO TAKE YOU FURTHER",
    des: "ADVANCED SPORT TOURER FOR WEEKEND ESCAPES",
    price: "STARTING AT $13,699 MSRP",
  },
  {
    type: "image",
    model:"W230",
    src: Slide5,
    title: "THE ORIGINAL ICON",
    des: "RETRO-STYLED MOTORCYCLE WITH MODERN PERFORMANCE",
    price: "STARTING AT $5,999 MSRP",
  },
  {
    type: "image",
    model:"RIDGE XR DELUX HVAC",
    src: Slide6,
    title: "PEAK PREMIUM PERFORMANCE",
    des: "4-CYLINDER POWER FOR THE WHOLE CREW",
    price: "STARTING AT $30,699 MSRP",
  },
  {
    type: "image",
    model:"ELECTRODE 20FS",
    src: Slide7,
    title: "EVERY DAY IS ELECTRIC",
    des: "2 EXCITING NEW ELECTRIC BALANCE BIKES FOR KIDS AND TEENS",
    price: "STARTING AT $2,699 MSRP",
  },
  {
    type: "image",
    src: Slide8,
    title: "NEW LOWER PRICE",
    des: "ON SELECT KAWASAKI MOTORCYCLES",
    price: "*Price reduction varies by model and year. Availability and pricing is subject to change.",
  },
  {
    type: "image",
    model:"KS 480",
    src: Slide9,
    title: "BUILT TO WIN",
    des: "450-CLASS LIMITED-EDITION SPECIAL RACER",
    price: "STARTING AT $13,999 MSRP",
  },
  {
    type: "image",
    model:"NINJA Z900",
    src: Slide10,
    title: "PERFORMANCE. REFINEMENT. SUGOMI™.",
    des: "PREMIUM SUPERNAKED WITH RAW PERFORMANCE",
    price: "STARTING AT $9,999 MSRP",
  },
];

const Carousel = () => {
  return (
    <>
    <div className="carousel-container ">
      <Splide 
        options={{
          type: 'fade', // Use fade effect between slides
          height: 'auto',
          autoplay: true,
          rewind:true,
          interval: 3000,
          arrows: true,
          // pagination: true,
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
          <SplideSlide className='' key={index}>
            <div className=" bg-black h-[550px] flex flex-col justify-center items-center">
              {slide.type === 'image' ? (
                <img
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  className="slide-image h-[550px] max-[700px]:h-[200px] w-auto object-cover"
                />
              ) : (
               <div className='bg-black h-[550px] w-auto flex justify-center items-center '>
               <ReactPlayer
                  url={slide.src}
                  playing={true}
                  loop={true}
                  muted={true}
                  width="100%"
                  height="auto"
                  className= 'bg-black '
                />
               </div>
              )}

              {/* Text Content */}
              <div className="lg:absolute md:absolute md:top-[20%] lg:top-[20%] md:left-[6%] lg:left-[6%] text-white  px-2 font-Nd_Loogos max-[700px]:p-10">
                <h4 className='font-Nd_Loogos font-normal text-[40px] lg:text-[60px] lg:w-[70%] leading-16 max-[700px]:text-[30px] max-[700px]:leading-8 '>{slide.model}</h4>
                <h3 className='font-Oswal_dSerif text-[30px] w-[70%] py-2 lg:text-[50px] lg:leading-[55px] leading-10 max-[700px]:text-[20px] max-[700px]:leading-5 max-[700px]:w-full'>{slide.title}</h3>
                <p className='font-Fira_Serif font-normal text-[25px] leading-5 py-1 max-[700px]:text-[16px] max-[700px]:leading-5'>{slide.des}</p>
                <div className='font-Fira_Serif font-normal text-[13px] leading-5 py-1 '>{slide.price}</div>
                <div className='box'>Explore {slide.model}</div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
    </>
  );
};
export default Carousel;