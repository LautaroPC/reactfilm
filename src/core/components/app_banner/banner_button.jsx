import React from 'react'

const BannerButton = ({children, ...props}) => {
  return (
    <button style={{backgroundColor: "white", color:"black", border: "none", borderRadius: "5px", padding: "3px 10px", margin: "20px", fontSize: "25px", fontWeight: "bold"}}{...props}>{children}</button>
  )
}

export default BannerButton