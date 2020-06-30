import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IntlProvider } from 'react-intl';
import Layout from './components/core/Layout';
import Main from './components/Main';
import Profiles from './components/Profiles';
import Registration from './components/Registration';
import ProfileCreate from './components/Profiles/ProfileCreate';
import ProfileDetails from './components/Profiles/ProfileDetails';
import routeHelper from './router/helper';
import intlMessagesKA from './lib/locales/ka.json';
import './assets/styles/main.scss';

const localeConfig = {
  locale: 'ka',
  messages: intlMessagesKA,
};

const App = () => (
  <IntlProvider
    key={localeConfig.locale}
    locale={localeConfig.locale}
    messages={localeConfig.messages}
  >
    <Router>
      <Switch>
        <Layout exact path={routeHelper.root.href()} component={Main} />
        <Layout
          exact
          path={routeHelper.registration.href()}
          component={Registration}
        />
        <Layout
          exact
          path={routeHelper.profileCreate.href()}
          component={ProfileCreate}
        />
        <Layout
          exact
          path={routeHelper.profileDetails.href(':profileId')}
          component={ProfileDetails}
        />
        <Layout exact path={routeHelper.profiles.href()} component={Profiles} />
      </Switch>
    </Router>
  </IntlProvider>
);

export default App;
