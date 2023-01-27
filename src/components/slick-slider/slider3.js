import React , {Component} from "react";
import Slider from "react-slick";
import './slider3.css'



function Card({tittle,url}){
    return(
        <div className="card-slide3">
        <div  className="card-slide3-image">
          
            <img src={url} alt="dok" width={"190px"} height={'152px'}></img>
        </div>
        <div  className="card-slide3-tittle">
          {tittle}
        </div>
    </div>
    )
    
    }
    




    export default class Slider3 extends Component {
        render() {
          var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows:true,
      
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  arrows:true
                }
              },
              {
                breakpoint: 950,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  initialSlide: 2,
                  arrows:true
      
                }
              },
               {
                breakpoint: 730,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  initialSlide: 2,
                  arrows:true
      
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows:true
      
      
                }
              }
            ]
          };
          return (
            <div className="slide-center">
      
            <div>
              <h5 style={{fontWeight:"bold", margin:"0 0 20px 20px"}}> Browse by destination </h5>
              <Slider {...settings}>
      
              <div className="position">
          <Card tittle={"Limborghini"} url={"https://resources.turo.com/f/81934/240x240/a49b80f1ba/illo_city_atlanta-2x.png"}/>
               </div>
               <div className="position">
               <Card tittle={"Toyota"} url={"https://resources.turo.com/f/81934/240x240/c00858690e/illo_city_sanfrancisco-2x.png"}/>
      
               </div >
               <div className="position">
               <Card tittle={"Marcedez-benz"} url={"https://resources.turo.com/f/81934/240x240/101ea2791a/illo_city_jerseycity-2x.png"}/>
      
               </div>
               <div className="position">
               <Card tittle={"BMW"} url={"https://resources.turo.com/f/81934/240x240/81f82e7068/illo_city_denver-2x.png"}/>
      
               </div>
               <div className="position">
               <Card tittle={"Toyota"} url={"https://resources.turo.com/f/81934/240x240/1442627566/illo_city_london-2x.png"}/>
      
               </div>
               <div className="position">
      
               <Card tittle={"Porache"} url={"https://resources.turo.com/f/81934/240x240/bbe188de38/illo_city_honolulu-2x.png"}/>
               </div>
               <div className="position">
               <Card tittle={"Marcedez-benz"} url={"https://resources.turo.com/f/81934/240x240/101ea2791a/illo_city_jerseycity-2x.png"}/>
      
               </div>
               <div className="position">
               <Card tittle={"BMW"} url={"https://resources.turo.com/f/81934/240x240/81f82e7068/illo_city_denver-2x.png"}/>
      
               </div>
               <div className="position">
               <Card tittle={"Toyota"} url={"https://resources.turo.com/f/81934/240x240/1442627566/illo_city_london-2x.png"}/>
      
               </div>        </Slider>
            </div>
            </div>
          );
        }
      }
      
      