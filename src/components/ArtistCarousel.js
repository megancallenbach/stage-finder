import React from 'react'
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel'
import '../styles/EventCarousel.css'
import { Link } from 'react-router'



class ArtistCarousel extends React.Component {
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

    renderEvent(artistEvent, index) {
      return(
        <Link to={`/events/${artistEvent._id}`}>
          <div style={{height:230,width:"100%",backgroundColor:"white"}}>
            <div className="carousel-center">
              <h1 className="artist-event-title">{artistEvent.title}</h1>
            </div>
            <div className="carousel-caption">
              <p className="artist-event-paragraph">{artistEvent.date.split("T")[0]}</p>
            </div>
          </div>
        </Link>
      )
    }

    render() {
      let {leftIcon,rightIcon}=this.state;
      return(
        <div className="artist-carousel col-sm-5">
          <div className="black-background">
            <h1 className="upcoming">UPCOMING EVENTS</h1>
          </div>
              <React_Bootstrap_Carousel
                animation={true}
                slideshowSpeed={3000}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                onSelect={this.onSelect}
                ref={r=>this.slider=r}
                indicators={false}
                className="carousel"
              >
              {this.props.events.map(this.renderEvent.bind(this))}

              </React_Bootstrap_Carousel>
          </div>
      );
    }
};

export default ArtistCarousel
