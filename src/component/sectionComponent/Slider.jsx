import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "../../style/slider.css";

// import required modules
import { Zoom, Navigation, Pagination, Autoplay } from "swiper";

const sliderImg = [
  {
    title: "expresso",
    img: "https://source.unsplash.com/QxL6R8_bQ_4",
  },
  {
    title: "cappuccino",
    img: "https://source.unsplash.com/47cW0To8dQY",
  },
  {
    title: "latte",
    img: "https://source.unsplash.com/7CwiC9GFzxA",
  },
  {
    title: "mocha",
    img: "https://source.unsplash.com/j2SZHDrMgsE",
  },

  {
    title: "americano",
    img: "https://source.unsplash.com/SKoZa7rcLlU",
  },
  {
    title: "macciato",
    img: "https://source.unsplash.com/bbNssNJlsrk",
  },
];

export default function App() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "var(--mainColor)",
          "--swiper-pagination-color": "#var(--mainColor)",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {sliderImg.map((img) => {
          return (
            <SwiperSlide>
              <h1>{img.title}</h1>
              <div className="swiper-zoom-container">
                <a href="#">
                  <img src={img.img} />
                  <button>click here</button>
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
