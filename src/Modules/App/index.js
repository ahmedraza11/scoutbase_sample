import React from 'react';
import { Countries, CountriesDetail, Dashboard, Navigation, NotFound } from '../';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from "apollo-boost";


const client = new ApolloClient({
  uri: "https://countries.trevorblades.com"
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/countries" component={Countries} />
          <Route path="/countries/:code" component={CountriesDetail} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}