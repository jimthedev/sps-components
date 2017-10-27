import * as React from "react";

// A pretty standard grid
import {
  withRouter,
  Container,
  Row,
  Col,
  ThemeProvider,
  Route,
  MessageBus,
  Redirect,
  Switch
} from "../lib/react-sps";

import {Router} from 'react-router';

import {createHashHistory} from 'history';

// Used for themeing
import { theme as standardTheme } from "react-sps/theme/standard";

// Navigation
import { Navigation } from "./Navigation";

// Used for creating lazy loadable components
import { LoadablePage } from "react-sps/loadable";

// Define which components can be lazy loaded
// Don't put these declarations in render
export const IndexPage = LoadablePage({
  loader: () => import("./pages/index/index")
});

export const ColorPage = LoadablePage({
  loader: () => import("./pages/color/Color")
});

export const GridPage = LoadablePage({
  loader: () => import("./pages/grid/Grid")
});

export const FormPage = LoadablePage({
  loader: () => import("./pages/form/Form")
});

export const TypographyPage = LoadablePage({
  loader: () => import("./pages/typography/Typography")
});

export const SpinnerPage = LoadablePage({
  loader: () => import("./pages/spinner/Spinner")
});

export const CardPage = LoadablePage({
  loader: () => import("./pages/card/Card")
});

export const RouterPage = LoadablePage({
  loader: () => import("./pages/router/Router")
});

export const MessagingPage = LoadablePage({
  loader: () => import("./pages/messaging/Messaging")
});

const PageWrapper = (props: any) => (
  <Row style={{ marginTop: "50px" }}>
    <Col>{props.children}</Col>
  </Row>
);

class RouterChangeListener extends React.Component<any, any> {
  unlisten = () => {};
  unblock = () => {};
  blocked = false;

  componentDidMount () {
    const mb = new MessageBus(window.parent);

    function defaultRouteState () {
      // If a page fails to set its title, what do you want to use?
      mb.send('setPageTitle', { title: 'React-SPS' });
      document.title = "React-SPS";
    }

    this.props.history.listen((location:any) => {
      if(location.pathname === '/router') { 
        this.unblock = this.props.history.block('Are you sure?');
      } else {
        this.unblock();
      }
      defaultRouteState();
      mb.send('appStateChange', { path: location.pathname });
    });

    defaultRouteState();

    // Destroy any block that might be in place
    this.unlisten = this.props.history.listen(() => {
      this.blocked = false;
    });
  }
  componentWillUnmount () {
    console.log('unmounting route change listener');
    this.unlisten();
  }
  render() {
    return this.props.children;
  }
}

const mb = new MessageBus(window.parent);

const setTitle = (title: string | null ) => {

  // Set commerce platform title
  mb.send('setPageTitle', {title});

  // Set page title
  if (title == null) { title = '' };
  document.title = title;
}

// HOC to add a router boundary for catching changes
const RouterBoundary = withRouter(RouterChangeListener);

const history = createHashHistory({
  basename: '',             // The base URL of the app (see below)
  hashType: 'slash',        // The hash type to use (see below)
  // A function to use to confirm navigation with the user (see below)
  getUserConfirmation: (message, callback) => callback(window.confirm(message))
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
      <Router history={history}>
        <ThemeProvider theme={standardTheme}>
          <RouterBoundary>
            <Container>
              <Navigation />
              <PageWrapper>
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
                  <Route path="/card" exact component={CardPage} />
                  <Route path="/router" exact component={RouterPage} />
                  <Route path="/messaging/:method?" render={() => (
                    <MessagingPage setTitle={setTitle} />
                  )} />
                  <Route
                    path="/"
                    exact
                    render={({ location }) => (
                      <Redirect
                        to={{
                          pathname: "/overview",
                          state: { from: location }
                        }}
                      />
                    )}
                  />
                </Switch>
              </PageWrapper>
            </Container>
          </RouterBoundary>
        </ThemeProvider>
      </Router>
    );
  }
}
