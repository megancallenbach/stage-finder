import React from 'react'
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel'
import '../styles/EventCarousel.css'
import { Link } from 'react-router'



class EventCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    onSelect= (active,direction)=>{
        console.log(`active=${active} && direction=${direction}`);
    }
    slideNext=()=>{
      this.slider.slideNext();
    }
    slidePrev=()=>{
      this.slider.slidePrev();
    }
    goToSlide=()=>{
      this.slider.goToSlide(4);
    }
    _changeIcon=()=>{
      let {leftIcon,rightIcon}=this.state;
      if(leftIcon && rightIcon){
        this.setState({
          leftIcon:undefined,
          rightIcon:undefined
        });
      }
      else{
        this.setState({
          leftIcon:<span className="glyphicon glyphicon-glass"></span>,
          rightIcon:<span className="glyphicon glyphicon-music"></span>
        });
      }
    }

    renderEvent(venueEvent, index) {
      return(
        <Link to={`/events/${venueEvent._id}`}>
          <div style={{height:250,width:"100%",backgroundColor:"rgba(0,0,0,0.8)"}}>
            <div className="carousel-center">
              <h1 className="venue-event-title">{venueEvent.title}</h1>
            </div>
            <div className="carousel-caption">
              <p className="paragraph">{venueEvent.date.split("T")[0]}</p>
              <p className="paragraph">{venueEvent.artistCount - venueEvent.artistIds.length} spots available!</p>
            </div>
          </div>
        </Link>
      )
    }

    render() {
      let {leftIcon,rightIcon}=this.state;
      return(
          <div className="carousel-row">
            <div className="col-md-12">
              <React_Bootstrap_Carousel
                animation={true}
                slideshowSpeed={3000}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                onSelect={this.onSelect}
                ref={r=>this.slider=r}
                indicators={false}
                className="carousel-fade"
              >
              {this.props.events.map(this.renderEvent.bind(this))}

              </React_Bootstrap_Carousel>
            </div>
          </div>
      );
    }
};

export default EventCarousel
