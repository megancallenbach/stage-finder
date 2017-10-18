import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createEvent from '../../actions/events/create'
import DatePicker from 'material-ui/DatePicker';
import '../../styles/Form.css'
import Navbar from '../../components/Navbar'

class CreateEvent extends PureComponent {
  constructor() {
    super()
    this.state = {}
  }

  submitForm(event){
    event.preventDefault()
    const { title, description, photo, time, paid, artistCount } = this.refs
    const newEvent = {
      title: title.value,
      description: description.value,
      photo: photo.value,
      time: time.value,
      date: this.refs.date.refs.input.input.value,
      paid: paid.value,
      artistCount: artistCount.value
    }
    this.props.createEvent(newEvent)
  }

  render() {
    if(!this.props.currentUser.venueProfileId) return null
    return (
      <div className="background">
        <Navbar />
        <div className="wrapper artist-profile">
          <h1>Create An Event</h1>
          <form onSubmit={this.submitForm.bind(this)}>
            <div className="form-group row">
              <label className="col-2 col-form-label">Event Title</label>
              <div className="col-10">
                <input
                  className="form-control"
                  type="text"
                  ref="title"
                  placeholder="Titel van het event"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Description</label>
              <div className="col-10">
                <textarea
                  className="form-control"
                  ref="description"
                  rows="2"
                  placeholder="Een korte beschrijving van het event"></textarea>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Photo</label>
              <div className="col-10">
                <input
                  className="form-control"
                  type="text"
                  ref="photo"
                  placeholder="(Optioneel) Link naar een afbeelding"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Time</label>
              <div className="col-10">
                <input
                  className="form-control"
                  type="time"
                  ref="time"
                  placeholder="Begintijd van het event"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Date</label>
              <div className="col-10">
                <DatePicker
                  ref="date"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Payment</label>
              <div className="col-10">
                <input
                  className="form-control"
                  type="number"
                  ref="paid"
                  placeholder="(Optioneel) vergoeding voor de artiest"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Aantal artiesten</label>
              <div className="col-10">
                <input
                  className="form-control"
                  type="number"
                  ref="artistCount"
                  placeholder="Het maximum aantal artiesten wat op dit event kunnen optreden"/>
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

export default connect(mapStateToProps, { createEvent })(CreateEvent)
