import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { IntlProvider } from 'react-intl';
import Layout from './Layout';
import Main from '../Main';
import Profiles from '../Profiles';
import Registration from '../Registration';
import ProfileCreate from '../Profiles/ProfileCreate';
import ProfileDetails from '../Profiles/ProfileDetails';
import routeHelper from '../../router/helper';
import intlMessagesKA from '../../lib/locales/ka.json';
import { langState } from '../../recoilState';
import { getLang } from '../../utils/cookies';

const AppInner = () => {
  const [lang, setLang] = useRecoilState(langState);
  const cookiesLang = getLang();
  
  useEffect(() => {
    if (cookiesLang && lang !== cookiesLang) setLang(cookiesLang);
  }, [cookiesLang]);

  const localeConfig = {
    locale: lang,
    messages: intlMessagesKA,
  };

  return (
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
          <Layout
            exact
            path={routeHelper.profiles.href()}
            component={Profiles}
          />
        </Switch>
      </Router>
    </IntlProvider>
  );
};

export default AppInner;
