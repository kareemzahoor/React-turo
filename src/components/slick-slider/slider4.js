import './slider4.css'

import React, { Component } from "react";
import Slider from "react-slick";
import { StarFilled ,  } from '@ant-design/icons';




function Card({ tittle, url }) {
  return (
    <div className="card-slide4">
      <div className="card-slide4-prf">
        <div className="card-slide4-image">
<img src='https://images.turo.com/media/driver/f_VkwIWpQ-WIMrha_oRisQ.160x160.jpg' alt='profile'></img>
        </div>
        <div className="card-slide4-text">
          <div><b>Muhammad A.</b></div>
          <div>All star hosts<br></br>1114 trips <b>.</b> joined 2022 </div>
        

        </div>


      </div>
     <div className='icon-star'>
     <StarFilled />
     <StarFilled />
     <StarFilled />
     <StarFilled />
     <StarFilled />
      </div> 
      <div className='icon-bottom-text'>
      Mohammed  on enhanced cleaning and disinfection practices.
      </div>
      <div className='icon-bottom-text-2'>Lissa-2022</div>
    </div>
  )

}





export default class Slider4 extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: true,

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: true
          }
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            arrows: true

          }
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            arrows: true

          }
        },

      ]
    };
    return (
      <div className="slide-center">

        <div>
          <h5 style={{ fontWeight: "bold", margin: "0 0 20px 20px" }}> Browse by destination </h5>
          <Slider {...settings}>

            <div className="position">
              <Card tittle={"Limborghini"} url={"https://resources.turo.com/f/81934/240x240/a49b80f1ba/illo_city_atlanta-2x.png"} />
            </div>
            <div className="position">
              <Card tittle={"Toyota"} url={"https://resources.turo.com/f/81934/240x240/c00858690e/illo_city_sanfrancisco-2x.png"} />

            </div >
            <div className="position">
              <Card tittle={"Marcedez-benz"} url={"https://resources.turo.com/f/81934/240x240/101ea2791a/illo_city_jerseycity-2x.png"} />

            </div>
            <div className="position">
              <Card tittle={"BMW"} url={"https://resources.turo.com/f/81934/240x240/81f82e7068/illo_city_denver-2x.png"} />

            </div>
            <div className="position">
              <Card tittle={"Toyota"} url={"https://resources.turo.com/f/81934/240x240/1442627566/illo_city_london-2x.png"} />

            </div>
            <div className="position">

              <Card tittle={"Porache"} url={"https://resources.turo.com/f/81934/240x240/bbe188de38/illo_city_honolulu-2x.png"} />
            </div>
            <div className="position">
              <Card tittle={"Marcedez-benz"} url={"https://resources.turo.com/f/81934/240x240/101ea2791a/illo_city_jerseycity-2x.png"} />

            </div>
            <div className="position">
              <Card tittle={"BMW"} url={"https://resources.turo.com/f/81934/240x240/81f82e7068/illo_city_denver-2x.png"} />

            </div>
            <div className="position">
              <Card tittle={"Toyota"} url={"https://resources.turo.com/f/81934/240x240/1442627566/illo_city_london-2x.png"} />

            </div>        </Slider>
        </div>
      </div>
    );
  }
}

