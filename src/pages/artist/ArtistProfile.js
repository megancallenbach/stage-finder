import React, { PureComponent } from 'react'
import '../../styles/Form.css'

export default class ArtistProfile extends PureComponent {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="background">
        <div className="wrapper artist-profile">
          <h1>Create Your Artist Profile</h1>
          <form>
            <div className="form-group row">
              <label className="col-2 col-form-label">Artist Name</label>
              <div className="col-10">
                <input className="form-control" type="text" id="artist-name"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">City</label>
              <div className="col-10">
                <input className="form-control" type="text" id="city"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label"> Upload Image </label>
              <div className="col-10">
                <label className="custom-file">
                  <input type="file" id="file2" className="custom-file-input"/>
                  <span className="custom-file-control"></span>
                </label>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Artist Description</label>
              <div className="col-10">
                <textarea className="form-control" id="description" rows="4"></textarea>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Bio</label>
              <div className="col-10">
                <textarea className="form-control" id="bio" rows="4"></textarea>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Quote</label>
              <div className="col-10">
                <input placeholder="Jouw meest tekenend songtekst of quote in 70 karakters" className="form-control" type="text" id="quote"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Video URL</label>
              <div className="col-10">
                <input placeholder="YouTube Embed URL" className="form-control" type="text" id="video"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
