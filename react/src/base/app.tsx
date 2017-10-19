import * as React from 'react';

// A pretty standard grid
import { Container } from 'react-sps/grid';

// Used for themeing
import { ThemeProvider } from 'react-sps/themed-components';
import { theme as standardTheme } from 'react-sps/theme/standard';

// Navigation
import { Navigation } from './Navigation';

// Used for routing
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

// Used for creating lazy loadable components
import { LoadablePage } from 'react-sps/loadable';

// Define which components can be lazy loaded
// Don't put these declarations in render
export const IndexPage = LoadablePage({
  loader: () => import('./pages/index/index'),
});

export const ColorPage = LoadablePage({
  loader: () => import('./pages/color/Color'),
});

export const GridPage = LoadablePage({
  loader: () => import('./pages/grid/Grid'),
});

export const FormPage = LoadablePage({
  loader: () => import('./pages/form/Form'),
});

export const TypographyPage = LoadablePage({
  loader: () => import('./pages/typography/Typography'),
});

export const SpinnerPage = LoadablePage({
  loader: () => import('./pages/spinner/Spinner'),
});

/**
 * Create the app
 * 
 * ThemeProvider
 * 
 *   Makes it possible for components to get theme info
 *   by being wrapped in withTheme.
 * 
 * HashRouter
 * 
 *   Makes it possible to have urls in the style of
 *   #/about instead of /about. Preferred for static
 *   sites or those hosted off CDNs.
 */
export default class App extends React.Component {
  componentWillMount() {
    document.body.style.backgroundColor = standardTheme.color.gray100;
  }
  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }
  render() {
    return (
      <ThemeProvider theme={standardTheme}>
        <HashRouter>
          <Container>
            <Navigation />
            <Switch>
              <Route
                path="/overview"
                exact
                render={() => <IndexPage name="Zach" value="Hi" />}
              />
              <Route path="/color" exact component={ColorPage} />
              <Route path="/grid" exact component={GridPage} />
              <Route path="/form" exact component={FormPage} />
              <Route path="/typography" exact component={TypographyPage} />
              <Route path="/spinner" exact component={SpinnerPage} />
              <Route
                path="/"
                exact
                render={props => (
                  <Redirect
                    to={{
                      pathname: '/overview',
                      state: { from: props.location },
                    }}
                  />
                )}
              />
            </Switch>
          </Container>
        </HashRouter>
      </ThemeProvider>
    );
  }
}
