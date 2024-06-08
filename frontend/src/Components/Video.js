import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const settings = {
    infinite: true,
    speed: 6000,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  const reverseSettings = {
    ...settings,
    rtl: true,
  };

  return (
    <div className=" mx-auto py-10 overflow-x-hidden bg-black px-2 ">
      <div className="mb-2">
        <Slider {...settings}>
          {[...Array(8)].map((_, index) => (
            <div key={index} className="px-2">
              <img src={`/images/bg-1.jpg`} alt={`Image ${index + 1}`} className="w-full h-auto" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="mb-8">
        <Slider {...reverseSettings}>
          {[...Array(8)].map((_, index) => (
            <div key={index} className="px-2">
              <img src={`/images/bg-2.jpg`} alt={`Image ${index + 9}`} className="w-full h-auto" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;
