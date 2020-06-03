import React from 'react';
import { Placeholder, VisitorIdentification } from '@sitecore-jss/sitecore-jss-react';
import Helmet from 'react-helmet';
import { placeholders } from './config';

const Layout = ({ route }) => {

  // console.log(route);

  return (
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
};

export default Layout;
