import React from 'react'
 import BannerTitle from '../app_banner/banner_title'
import BannerOptions from '../app_banner/banner_options'
import BannerDescription from '../app_banner/banner_description'
import BannerButton from '../app_banner/banner_button' 

import { useNavigate } from 'react-router-dom'

const BannerContainer = ({data}) => {
    const bannerMovie = data[Math.floor(Math.random()*20)]
    const {title, description, poster, id} = bannerMovie
    const navigate = useNavigate()

  return (
    <div style={{
        backgroundImage: `url(${poster})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "500px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        padding:"2.5rem",
    }}>
        <BannerTitle>{title}</BannerTitle>
        <BannerDescription>{description}</BannerDescription>
        <BannerOptions>
            <BannerButton onClick={()=>{navigate(`/${id}`)}}>Más Información
            </BannerButton>
        </BannerOptions>
    </div>
  )
}

export default BannerContainer