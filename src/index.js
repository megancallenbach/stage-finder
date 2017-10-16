import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={HomePage}>
          <IndexRoute component={HomePage} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/artist" component={ArtistPage} />
          <Route path="/stages" component={VenuePage} />
          <Route path="/artist/:artistId" component={ArtistDetail} />
          <Route path="/stages/:venueId" component={VenueDetail} />
          <Route path="/artist/:artistId/profile" component={ArtistProfile} />
          <Route path="/stages/:venueId/profile" component={VenueProfile} />
        </Route>
      </Router>
    </Provider>,
  document.getElementById('root'));
registerServiceWorker();
