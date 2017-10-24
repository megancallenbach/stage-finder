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
              <h2 className="header-text">Iedereen verdient <br/>een eigen podium.</h2>
            </div>
            </div>
            <div className="row">
              <div className="search-bar col-md-6">
                <SearchBar showSearch={true}/>
              </div>
            </div>
          </div> {
        }
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps)(HomePage)
