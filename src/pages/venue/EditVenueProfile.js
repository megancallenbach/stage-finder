import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import updateVenue from '../../actions/venues/update'
import Navbar from '../../components/Navbar'
import '../../styles/Form.css'

class EditVenueProfile extends PureComponent {
  constructor() {
    super()
    this.state = {}
  }

  submitForm(event){
    event.preventDefault()
    const { venueProfileId } = this.props.currentUser
    const { name, city, image, description, address } = this.refs
    const venueData = {
      name: name.value,
      photo: image.value,
      city: city.value,
      address: address.value,
      description: description.value,
    }
    this.props.updateVenue(venueProfileId, venueData)
  }

  render() {
    const { currentUser } = this.props
    if(!currentUser) return null
    return (
      <div className="background">
      < Navbar />
      <br />
        <div className="wrapper venue-profile">
          <h1>Update Your Venue Profile</h1>
          <form onSubmit={this.submitForm.bind(this)}>
            <div className="form-group row">
              <label className="col-2 col-form-label">Venue Name</label>
              <div className="col-10">
                <input
                  className="form-control"
                  type="text"
                  ref="name"
                  placeholder="Naam van je stage"
                  defaultValue={currentUser.venueProfile.name}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">City</label>
              <div className="col-10">
                <input
                  className="form-control"
                  type="text"
                  ref="city"
                  placeholder="Plaatsnaam"
                  defaultValue={currentUser.venueProfile.city}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Address</label>
              <div className="col-10">
                <input
                  className="form-control"
                  type="text"
                  ref="address"
                  placeholder="Straatnaam en huisnummer"
                  defaultValue={currentUser.venueProfile.address}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Image URL</label>
              <div className="col-10">
                <input
                  className="form-control"
                  type="text"
                  ref="image"
                  placeholder="Link naar een foto van je stage"
                  defaultValue={currentUser.venueProfile.photo}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Description</label>
              <div className="col-10">
                <textarea
                  className="form-control"
                  ref="description"
                  rows="2"
                  placeholder="Een korte beschrijving van je stage"
                  defaultValue={currentUser.venueProfile.description}></textarea>
              </div>
            </div>

            <input className="btn-submit formItem" type="submit" value="Update" />
          </form>

        </div>
        <br />
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps, { updateVenue })(EditVenueProfile)
