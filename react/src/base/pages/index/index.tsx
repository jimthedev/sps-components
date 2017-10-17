import * as React from 'react';
import { Row, Col } from 'react-sps/grid';
import { PageTitle, Heading } from 'react-sps/text';

interface IPageProps {}

export default class Hello extends React.Component<IPageProps> {
  render() {
    return (
      <Row>
        <Col>
          <Row>
            <Col>
              <PageTitle>React SPS</PageTitle>
            </Col>
          </Row>
          <Row>
            <Col>
              <Heading>Overview</Heading>
              <p>
                This project is a React, TypeScript, Webpack boilerplate
                including two major pieces:
              </p>
              <p>1. A component library (react-sps, in src/lib/react-sps).</p>
              <p>
                2. An app that relies on the component library (in src/base).
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Heading>Routing</Heading>
              <p>
                Lazy loading of application routes is accomplished out of the
                box using, react-router, react-loadable, and Webpack's import()
                syntax. Lazy loaded routes have a delay and timeout handling as
                well as loading indicator.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Heading>Bundling</Heading>
              <p>
                Optimized bundles are generated for loading a tree of components
                by lazy loaded pages using the Webpack Commons Chunked plugin,
                Webpack's import() syntax.
              </p>
              <p>
                Gzip bundles are generated using the Webpack compression plugin.
              </p>
              <p>
                The styled-components babel plugin and lodash plugins are used
                to keep bundle sizes tiny.
              </p>
              <p>
                The Bundle Analyzer plugin is run against prod builds. This
                means you can easily troubleshoot bundles if they suddenly grow
                in size.
              </p>
              <p>
                The npm script bundlesize is included to ensure that bundle
                sizes are capped by default so that bundle size increases become
                easier to approve, reject or track.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Heading>Testing</Heading>
              <p>
                Jest is used for testing, ts-jest provides typescript
                functionality during testing.
              </p>
              <p>
                The npm script bundlesize is run during testing to enforce
                bundle size policies.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Heading>Fonts</Heading>
              <p>
                Font loading is done asynchronously using
                react-with-async-fonts. The fonts are loaded exactly once and
                components may request information about the loading. Under the
                hood fontfaceobserver is used. There are timeouts and fallbacks
                in place. Additionally you may define fonts to be used until a
                given font is loaded.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Heading>Theme</Heading>
              <p>
                Color Theme is available to all components using ThemeProvider
                from styled-components. Currently there is a single theme called
                standard theme but others could be provided.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
