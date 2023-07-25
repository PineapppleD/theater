import { useEffect, useState } from "react";
import axios from "axios";

import Carousel from "nuka-carousel";

import Performances from "../performances/performances";
import img2 from "./images/image 2.png";
import img3 from "./images/image 3.png";
import img4 from "./images/image 4.png";
import img5 from "./images/image 5.png";
import img6 from "./images/image 6.png";
import img7 from "./images/image 7.png";
import img8 from './images/image 8.webp'
import img9 from './images/image 9.webp'
import img10 from './images/image 10.webp'
import img11 from './images/image 11.webp'
import style from './slider.module.scss'

function Slider() {
  const images = [img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

  const [performances, setPerformances] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/performances')
    .then(res => res.data)
    .then(data => {
      setPerformances(data.response)
    })
  }, [])

  return (
    <>
      <h2 className={style.performances_title}>Performances coming</h2>
      <Carousel className={style.carousel}>
        {performances.map((item, index) => (
          <Performances image={images[Math.floor(Math.random() * 10)]} key={index} name={item[1]}/>
        ))}
      </Carousel>
    </>
  );
}

export default Slider;
