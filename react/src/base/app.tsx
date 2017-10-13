import * as React from 'react';

// Used for routing
import { HashRouter, Route, Switch } from 'react-router-dom';

// Used for creating lazy loadable components
import { LoadablePage } from '../lib/Loadable';

// Define which components can be lazy loaded
// Don't put these declarations in render
export const Index = LoadablePage({
  loader: () => import('../pages/index/index'),
});

export const About = LoadablePage({
  loader: () => import('../pages/about/about'),
});

export const AboutTwo = LoadablePage({
  loader: () => import('../pages/about/about/about'),
});

// Create the app
// Hash router makes sure to use #/about style urls
export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Index name="Zach" value="Hi" />}
          />
          <Route path="/about/:name" exact component={About} />
          <Route path="/about/about/:name" component={AboutTwo} />
        </Switch>
      </HashRouter>
    );
  }
}
