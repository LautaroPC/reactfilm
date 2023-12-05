import { useRef } from "react";

const AppSwiper = ({children}) => {
  const swiperElRef = useRef(null);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="5"
      navigation="true"
      loop
    >
      {children}
    </swiper-container>
  );
};

export default AppSwiper;