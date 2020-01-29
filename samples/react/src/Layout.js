import React from 'react';
import { VisitorIdentification } from '@sitecore-jss/sitecore-jss-react';
import Helmet from 'react-helmet';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { placeholders } from 'Config';
import './css/app.css';

const Layout = ({ route }) => (
  <>
    <Helmet>
      <title>
        {route?.fields?.pageTitle?.value ?? 'Page'}
      </title>
    </Helmet>
    <VisitorIdentification />
    <Placeholder name={placeholders.pagehead} rendering={route} />
    <main className="site-main" id="site-main" role="main">
      <Placeholder name={placeholders.pagebody} rendering={route} />
    </main>
    <Placeholder name={placeholders.pagefoot} rendering={route} />
  </>
);

export default Layout;
