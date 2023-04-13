import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Button from "../Button/Button";

import "../../style/slider.css";

// import required modules
import { Zoom, Navigation, Pagination, Autoplay } from "swiper";
import { useState } from "react";
import { sliderImg } from "../../data/itemDetails";

const Img = sliderImg;

export default function App() {
  const [onMouse, setonMouse] = useState(false);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "var(--mainColor)",
          "--swiper-pagination-color": "#var(--mainColor)",
        }}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {Img.map((img) => {
          return (
            <SwiperSlide key={img.id}>
              <h1>{img.title}</h1>
              <div className="swiper-zoom-container">
                <Link
                  to="/itemrecipe"
                  onMouseEnter={() => setonMouse(true)}
                  onMouseLeave={() => setonMouse(false)}
                >
                  <img src={img.img} className="img" />
                  <Button
                    className={`view-button ${onMouse ? "show" : ""}`}
                    title="view details"
                  />
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
