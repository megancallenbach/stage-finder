import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createVenue from '../../actions/venues/create'
import '../../styles/Form.css'

class CreateVenueProfile extends PureComponent {
  constructor() {
    super()
    this.state = {}
  }

  submitForm(event){
    event.preventDefault()
    const { name, city, address, image, description } = this.refs
    const newVenue = {
      name: name.value,
      photo: image.value,
      city: city.value,
      address: address.value,
      description: description.value,
    }
    this.props.createVenue(newVenue)
  }

  render() {
    if(!this.props.currentUser) return null
    return (
      <div className="background">
        <div className="wrapper artist-profile">
          <h1>Create Your Artist Profile</h1>
          <form onSubmit={this.submitForm.bind(this)}>
            <div className="form-group row">
              <label className="col-2 col-form-label">Artist Name</label>
              <div className="col-10">
                <input
                  className="form-control"
                  type="text"
                  ref="name"
                  placeholder="Naam van je stage"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">City</label>
              <div className="col-10">
                <input
                  className="form-control"
                  type="text"
                  ref="city"
                  placeholder="Plaatsnaam"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">City</label>
              <div className="col-10">
                <input
                  className="form-control"
                  type="text"
                  ref="address"
                  placeholder="Straatnaam en huisnummer"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Image URL</label>
              <div className="col-10">
                <input
                  className="form-control"
                  type="text"
                  ref="image"
                  placeholder="Link naar een foto van je stage"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Description</label>
              <div className="col-10">
                <textarea
                  className="form-control"
                  ref="description"
                  rows="2"
                  placeholder="Een korte beschrijving van je stage"></textarea>
              </div>
            </div>
            <input className="btn-submit formItem" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps, { createVenue })(CreateVenueProfile)
