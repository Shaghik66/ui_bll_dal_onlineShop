import { useContext } from "react";
import { MyContext } from "../../../context/context";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import gif from "../../../shared/assets/gifs/loading.gif";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import style from "./Slider.module.css";

export function Slider() {
  const products = useContext(MyContext);

  return (
    <>
      {products.products?.length ? (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {products.products?.map((product) => (
            <SwiperSlide className={style.sliderContainer} key={product._id}>
              <img className={style.image} src={product.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <img src={gif} alt="gif" />
      )}
    </>
  );
}
