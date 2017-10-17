import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createArtist from '../../actions/artists/create'
import '../../styles/Form.css'

class CreateArtistProfile extends PureComponent {
  constructor() {
    super()
    this.state = {}
  }

  submitForm(event){
    event.preventDefault()
    const { name, city, image, description, bio, quote, video, soundcloud, spotify, youtube, facebook } = this.refs
    const newArtist = {
      name: name.value,
      photo: image.value,
      description: description.value,
      city: city.value,
      quote: quote.value,
      video: video.value,
      bio: bio.value,
      soundcloud: soundcloud.value,
      spotify: spotify.value,
      youtube: youtube.value,
      facebook: facebook.value
    }
    this.props.createArtist(newArtist)
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
                  placeholder="Naam"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">City</label>
              <div className="col-10">
                <input
                  className="form-control"
                  type="text"
                  ref="city"
                  placeholder="Je thuisbasis"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Image URL</label>
              <div className="col-10">
                <input
                  className="form-control"
                  type="text"
                  ref="image"
                  placeholder="Link naar je bandfoto"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Description</label>
              <div className="col-10">
                <textarea
                  className="form-control"
                  ref="description"
                  rows="2"
                  placeholder="Een korte beschrijving van je muziek"></textarea>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Bio</label>
              <div className="col-10">
                <textarea
                  className="form-control"
                  ref="bio"
                  rows="4"
                  placeholder="Je avontuur tot nu toe"></textarea>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Quote</label>
              <div className="col-10">
                <input placeholder="Jouw meest tekenende songtekst of quote in 70 karakters" className="form-control" type="text" ref="quote"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Video URL</label>
              <div className="col-10">
                <input placeholder="YouTube video link" className="form-control" type="text" ref="video"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Soundcloud</label>
              <div className="col-10">
                <input placeholder="Your Soundcloud" className="form-control" type="text" ref="soundcloud"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Spotify</label>
              <div className="col-10">
                <input placeholder="Your Spotify" className="form-control" type="text" ref="spotify"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Youtube</label>
              <div className="col-10">
                <input placeholder="Your Youtube channel" className="form-control" type="text" ref="youtube"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Facebook</label>
              <div className="col-10">
                <input placeholder="Your Facebook page" className="form-control" type="text" ref="facebook"/>
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

export default connect(mapStateToProps, { createArtist })(CreateArtistProfile)
