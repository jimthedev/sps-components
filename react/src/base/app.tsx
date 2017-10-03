import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {Loader} from './Loadable';

export const Index = Loader({
  loader: () => import('../pages/index/index')
});

export const About = Loader({
  loader: () => import('../pages/about/about')
});

export const AboutTwo = Loader({
  loader: () => import('../pages/about/about/about')
});

export default class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact render={() => <Index name="Zach" value="Hi" />} />
          <Route path="/about/:name" exact component={About} />
          <Route path="/about/about/:name" component={AboutTwo} />
        </Switch>
      </HashRouter>
    );
  }
}
  