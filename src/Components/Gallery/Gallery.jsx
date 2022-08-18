import React from 'react'
import './styles.css'

// Images
import image1 from "../../assets/carps.jpg"
import clean from "../../assets/cleans.jpg"
import paint from "../../assets/p.jpg"
import paint1 from "../../assets/p1.jpg"
import laundry from "../../assets/laudarys.jpg"

const Gallery = () => {
  return (
    <div className="Gallery">
      <div className="gallery-header">
        <span></span>
        <span>Gallery</span>
        <span></span>
      </div>
      <div className="gallery">
      <div className="first">
         <img src={paint1} alt="" />
         <img src={paint} alt="" />
      </div>
      <div className="second">
      <img src={clean} alt="" />
      <img src={laundry} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Gallery