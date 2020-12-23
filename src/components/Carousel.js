import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Carousel.css'
export default class Car extends React.Component{
    state = {
        color: 'white',
        elements :[{name:'one',age:45}, {name:'one',age:45}, {name:'one',age:45}],
        itemList:[]
    }

    

    render() {
        return(
          <div style={{display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
          }}>
              <Carousel showThumbs={false} useKeyboardArrows swipeable verticalSwipe={'natural'} autoPlay={true}>
                  <div>
                      <img alt="" src="/images/stackburger.jpg" height={'45%'} />
                      {/*<p className="legend">Legend 1</p>*/}
                  </div>
                  <div>
                      <img alt="" src="/images/caesarsalad.jpg" height={'45%'}/>
                    
                  </div>
                  <div>
                      <img alt="" src="/images/nuggets.jpg" height={'45%'}/>
                     
                  </div>
                  <div>
                      <img alt="" src="/images/mcflurry.jpg" height={'45%'}/>
                      
                  </div>
                  <div>
                      <img alt="" src="/images/frenchfries.jpg" height={'45%'}/>
                     
                  </div>

              </Carousel>
          </div>
         

           
        )
    }
}