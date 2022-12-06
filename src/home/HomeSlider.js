import React from 'react'
import img1 from "../assets/Home_images/slideImg/slide1.webp";
import img2 from "../assets/Home_images/slideImg/slide2.jpg";
import img3 from "../assets/Home_images/slideImg/slide3.webp";
import img4 from "../assets/Home_images/slideImg/slide4.webp";
import img5 from "../assets/Home_images/slideImg/slide5.webp";
import { Carousel } from "react-bootstrap";
import "./HomeSlider.css";

function HomeSlider() {
  return (
      <div className="sliderimgdiv">
         <Carousel>
            <Carousel.Item>
               <img className="d-block w-100" src={img1} alt="First slide" />
            </Carousel.Item>

            <Carousel.Item>
               <img className="d-block w-100" src={img2} alt="Second slide" />
            </Carousel.Item>

            <Carousel.Item>
               <img className="d-block w-100" src={img3} alt="Third slide" />
            </Carousel.Item>

            <Carousel.Item>
               <img className="d-block w-100" src={img4} alt="forth slide" />
            </Carousel.Item>

            <Carousel.Item>
               <img className="d-block w-100" src={img5} alt="fifth slide" />
            </Carousel.Item>
         </Carousel>
      </div>
  )
}

export default HomeSlider





// export const Carousel1 = () => {
//    return (

//    );
// };