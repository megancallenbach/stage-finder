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
import ArtistPage from './pages/artist/ArtistPage'
import ArtistDetail from './pages/artist/ArtistDetail'
import ArtistProfile from './pages/artist/ArtistProfile'
import VenuePage from './pages/venue/VenuePage'
import VenueDetail from './pages/venue/VenueDetail'
import VenueProfile from './pages/venue/VenueProfile'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={HomePage} />
          <Route path="/artists/profile" component={ArtistProfile} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/artists" component={ArtistPage} />
          <Route path="/stages" component={VenuePage} />

          <Route path="/artists/:artistId" component={ArtistDetail} />
          <Route path="/stages/:venueId" component={VenueDetail} />

          <Route path="/stages/:venueId/profile" component={VenueProfile} />
        </Route>
      </Router>
    </Provider>,
  document.getElementById('root'));
registerServiceWorker();
