import React from 'react'
import { useNavigate } from 'react-router-dom'
import SwiperTitle from '../app_title/app_title'
import AppSwiperSlide from '../app_swiper/app_swiper_slide'
import SwiperCard from '../app_swiper/swiper_card'
import AppSwiper from '../app_swiper/app_swiper' 

const SwiperContainer = ({title, data}) => {
  const navigate = useNavigate()

  return (
    <div>
        <SwiperTitle>{title}</SwiperTitle>
        <AppSwiper >          
          {data?.map((e, index) => (
            <AppSwiperSlide key={index}>
              <div style={{
                backgroundImage: `url(${e.backdrop})`,
                height: "150px",
                width: "250px",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition:"center",
                borderRadius: "15px",
              }}
                onClick={()=>{navigate(`/${e.id}`)}}>
                <SwiperCard title={e.title}>
                </SwiperCard>
              </div>
            </AppSwiperSlide>
          ))}</AppSwiper>
    </div>
  )
}

export default SwiperContainer