import React from 'react'
import campa from '../img/IMG_20140414_141424246_HDR.jpg'
import sura from '../img/88424899_2942112505854263_6908778164919468032_n.jpg'
import mohasion from '../img/348931603_259993733359207_948707312690456525_n.jpg'

const Carousel = () => {
  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={sura} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
            <img src={campa} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
            <img src={mohasion} class="d-block w-100" alt="..." />
            </div>
        </div>
    </div>
  )
}

export default Carousel