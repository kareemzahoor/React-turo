import React, { Component } from "react";
import Slider from "react-slick";
import './slider2.css'

function Card({image}){
return(

    <div className="slider2-card">
<div className="slider2-image">
<img src={image} width={390} height={270}></img>
</div>
<div className="slider2-text">
<p className="slider2-text-heading">
    Find the perfect car <span>
     for scenic corners & curves

    </span>
</p>
<p className="slider2-text-para">
Get your fill of high-performance thrills, with the richest selection of luxury and exotic vehicles anywhere.
<button className="slider2-btn">Browse car</button>
</p>
</div>
    </div>
)

}


export default class Slider2 extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
       
        <Slider {...settings}>
          <div>
           <Card image={"https://resources.turo.com/f/81934/832x569/fc2d557667/image_scenic_416x285-2x.jpg"}/>
          </div>
          <div>
          <Card image={"https://resources.turo.com/f/81934/832x569/215cc09afd/image_try_416x285-2x.jpg"}/>
          </div>
          <div>
          <Card image={"https://resources.turo.com/f/81934/832x569/ed58b0c447/image_errand_416x285-2x.jpg"}/>
          </div>
        
        </Slider>
      </div>
    );
  }
}