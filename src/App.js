import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IntlProvider } from 'react-intl';
import Page from './components/core/Page';
import Main from './components/Main';
import Profiles from './components/Profiles';
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
      <Page>
        <Switch>
          <Route exact path={routeHelper.root.href()} component={Main} />
          <Route
            exact
            path={routeHelper.profiles.href()}
            component={Profiles}
          />
        </Switch>
      </Page>
    </Router>
  </IntlProvider>
);

export default App;
