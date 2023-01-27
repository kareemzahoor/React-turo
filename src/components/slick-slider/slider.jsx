
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React ,{Component} from "react";
import Slider from "react-slick";
import wall from '../../assets/images/wall.jpg'
import './slider.css'

function Card({tittle,url}){
return(
    <div className="card-slide">
    <div  className="card-slide-image">
      
        <img src={url} alt="dok" width={"190px"} height={'152px'}></img>
    </div>
    <div  className="card-slide-tittle">
      {tittle}
    </div>
</div>
)

}

export default class Slider1 extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows:true,

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows:true
          }
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2,
            arrows:true

          }
        },
         {
          breakpoint: 730,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            arrows:true

          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:true


          }
        }
      ]
    };
    return (
      <div className="slide-center">

      <div>
        <h5 style={{fontWeight:"bold", marginLeft:"20px"}}> Browse by make </h5>
        <Slider {...settings}>

        <div className="position">
    <Card tittle={"Limborghini"} url={"https://resources.turo.com/f/81934/386x308/a470b4f290/image_make_lambo-2x.jpg"}/>
         </div>
         <div className="position">
         <Card tittle={"Toyota"} url={"https://resources.turo.com/f/81934/386x308/2809ca8702/image_make_toyota-2x.jpg"}/>

         </div >
         <div className="position">
         <Card tittle={"Marcedez-benz"} url={"https://resources.turo.com/f/81934/386x308/065308f2c4/image_make_mb-2x.jpg"}/>

         </div>
         <div className="position">
         <Card tittle={"BMW"} url={"https://resources.turo.com/f/81934/386x308/0c4f5f5186/image_make_bmw-2x.jpg"}/>

         </div>
         <div className="position">
         <Card tittle={"Toyota"} url={"https://resources.turo.com/f/81934/386x308/2809ca8702/image_make_toyota-2x.jpg"}/>

         </div>
         <div className="position">

         <Card tittle={"Porache"} url={"https://resources.turo.com/f/81934/386x308/7e7ce60797/image_make_porsche-2x.jpg"}/>
         </div>
         <div className="position">
         <Card tittle={"Tesla"} url={"https://resources.turo.com/f/81934/386x308/7dcf9bff19/image_make_tesla-2x.jpg"}/>

         </div>
         <div className="position">
         <Card tittle={"Subaru"} url={"https://resources.turo.com/f/81934/386x308/ef857a4438/image_make_subaru-2x.jpg"}/>

         </div>
         <div className="position">
         <Card tittle={"Jeep"} url={"https://resources.turo.com/f/81934/386x308/9bf274f19e/image_make_jeep-2x.jpg"}/>

         </div>        </Slider>
      </div>
      </div>
    );
  }
}







