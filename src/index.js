import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import HomePage from './pages/HomePage'
import ArtistDetail from './pages/artist/ArtistDetail'
import ArtistPage from './pages/artist/ArtistPage'
import CreateArtistProfile from './pages/artist/CreateArtistProfile'
import VenuePage from './pages/venue/VenuePage'
import VenueDetail from './pages/venue/VenueDetail'
import CreateVenueProfile from './pages/venue/CreateVenueProfile'
import CreateProfile from './pages/CreateProfile'
import EditArtistProfile from './pages/artist/EditArtistProfile'
import CreateEvent from './pages/event/CreateEvent'
import EditVenueProfile from './pages/venue/EditVenueProfile'
import EventPage from './pages/event/EventPage'
import EventDetail from './pages/event/EventDetail'
import SearchResults from './pages/search/SearchResults'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={HomePage} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/create-profile" component={CreateProfile} />
          <Route path="/artists" component={ArtistPage} />
          <Route path="/create-artist" component={CreateArtistProfile} />
          <Route path="/artists/:artistId" component={ArtistDetail} />
          <Route path="/artists/:artistId/edit" component={EditArtistProfile} />
          <Route path="/venues/:venueId/edit" component={EditVenueProfile} />
          <Route path="/venues" component={VenuePage} />
          <Route path="/create-venue" component={CreateVenueProfile} />
          <Route path="/venues/:venueId" component={VenueDetail} />
          <Route path="/create-event" component={CreateEvent} />
          <Route path="/events" component={EventPage} />
          <Route path="/events/:eventId" component={EventDetail} />
          <Route path="/search-results" component={SearchResults} />
        </Route>
      </Router>
    </Provider>,
  document.getElementById('root'));
registerServiceWorker();
