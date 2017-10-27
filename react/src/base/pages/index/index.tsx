import * as React from 'react';
import { H1, H2, H4, P, A, Row, Col } from 'react-sps';

interface IPageProps {}

export default class Hello extends React.Component<IPageProps> {
  render() {
    return (
      <Row>
        <Col>
          <Row>
            <Col>
              <H1>React SPS</H1>
            </Col>
          </Row>
          <Row>
            <Col>
              <H2>Overview</H2>
              <P>
                This project is a React, TypeScript, Webpack guide, library and
                boilerplate including two major pieces:
              </P>
              <ol>
                <li>A component library (react-sps, in src/lib/react-sps).</li>
                <li>
                  An app that relies on the component library (in src/base).
                </li>
              </ol>
            </Col>
          </Row>
          <Row>
            <Col>
              <H2>Routing</H2>
              <P>
                Lazy loading of application routes is accomplished out of the
                box using, react-router, react-loadable, and Webpack's import()
                syntax. Lazy loaded routes have a delay and timeout handling as
                well as loading indicator.
              </P>
            </Col>
          </Row>
          <Row>
            <Col>
              <H2>Bundling</H2>
              <P>
                Optimized bundles are generated for loading a tree of components
                by lazy loaded pages using the Webpack Commons Chunked plugin,
                Webpack's import() syntax.
              </P>
              <P>
                Gzip bundles are generated using the Webpack compression plugin.
              </P>
              <P>
                The styled-components babel plugin and lodash plugins are used
                to keep bundle sizes tiny.
              </P>
              <P>
                The Bundle Analyzer plugin is run against prod builds. This
                means you can easily troubleshoot bundles if they suddenly grow
                in size.
              </P>
              <P>
                The npm script bundlesize is included to ensure that bundle
                sizes are capped by default so that bundle size increases become
                easier to approve, reject or track.
              </P>
            </Col>
          </Row>
          <Row>
            <Col>
              <H2>Testing</H2>
              <P>
                Jest is used for testing, ts-jest provides typescript
                functionality during testing.
              </P>
              <P>
                The npm script bundlesize is run during testing to enforce
                bundle size policies.
              </P>
            </Col>
          </Row>
          <Row>
            <Col>
              <H2>Fonts</H2>
              <P>
                Font loading is done asynchronously using
                react-with-async-fonts. The fonts are loaded exactly once and
                components may request information about the loading. Under the
                hood fontfaceobserver is used. There are timeouts and fallbacks
                in place. Additionally you may define fonts to be used until a
                given font is loaded.
              </P>
            </Col>
          </Row>
          <Row>
            <Col>
              <H2>Theme</H2>
              <P>
                Color Theme is available to all components using ThemeProvider
                from styled-components. Currently there is a single theme called
                standard theme but others could be provided.
              </P>
            </Col>
          </Row>
          <Row>
            <Col>
              <H2>Grid</H2>
              <P>
                There is a fixed and fluid grid provided using {'<Col>'} and{' '}
                {'<Row>'} syntax. The grid is from the react-grid-system
                package.
              </P>
            </Col>
          </Row>
          <Row>
            <Col>
              <H2>FAQ / Known Issues</H2>
              <H4>Hash history cannot PUSH the same path</H4>
              <P>
                Sometimes when clicking a link you may see an error "Hash
                history cannot PUSH the same path; a new entry will not be added
                to the history stack". You can ignore this error as there is an{' '}
                <A href="https://github.com/ReactTraining/history/issues/488">
                  open issue
                </A>{' '}
                and is mostly there for developers to debug with full stack
                traces.
              </P>
              <H4>What are {"<Aux>"} components?</H4>
              <P>
                Aux components are components that do not add a new pointless element to the DOM. Instead they put only their children into the DOM. They use a feature of React 16 (multiple root children) to ensure that an array of elements is returned without having to use the ugly array syntax of React 16. See <A href="https://github.com/gajus/react-aux">https://github.com/gajus/react-aux</A>
              </P>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
