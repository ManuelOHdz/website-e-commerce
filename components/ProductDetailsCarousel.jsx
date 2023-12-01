import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = () => {
  return <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
        <Carousel 
            infiniteLoop={true}
            showIndicators={false}
            showStatus={false}
            thumbWidth={60}
            className="productCarousel"
        >
            <img src="/c1.webp"/>
            <img src="/c2.webp"/>
            <img src="/c3.webp"/>
            <img src="/c4.webp"/>
            <img src="/c5.webp"/>
            <img src="/c6.jpg"/>
            <img src="/c7.jpg"/>
        </Carousel>
  </div>
};

export default ProductDetailsCarousel;
