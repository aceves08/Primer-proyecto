import React from 'react'
import campa from '../img/IMG_20140414_141424246_HDR.jpg'
import sura from '../img/88424899_2942112505854263_6908778164919468032_n.jpg'
import mohasion from '../img/348931603_259993733359207_948707312690456525_n.jpg'

const Carousel = () => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={sura} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
            <img src={campa} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
            <img src={mohasion} className="d-block w-100" alt="..." />
            </div>
        </div>
    </div>
  )
}

export default Carousel