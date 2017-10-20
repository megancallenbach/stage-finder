import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import '../styles/HomePage.css'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'

class HomePage extends PureComponent {
  render() {
    return (
      <div className="home-page">
        <Navbar />
          <div className="jumbotron">
           <div className="row">
            <div className="text-container col-md-6">
              <h2 className="header-text">Iedereen verdient een eigen podium.</h2>
            </div>
            </div>
            <div className="row">
              <div className="search-bar col-md-6">
                <SearchBar />
              </div>
            </div>
          </div> {
          // <div className="two-columns row">
          //   <div className="image-two col-sm-6">
          //     <h3 className="white-text"> Heb jij het lef? </h3>
          //     <button className="btn-orange"><Link to={'/venues'} className="link">Find your stage</Link></button>
          //   </div>
          //   <div className="text-three col-sm-6">
          //     <h3 className="black-text"> Wij gunnen elke musikant het lef om op een podium te gaan staan. </h3>
          //     <button className="btn-white"><Link to={'/inspiration'} className="link">Inspiration</Link></button>
          //   </div>
          // </div>

          // < Footer />
        }
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps)(HomePage)
