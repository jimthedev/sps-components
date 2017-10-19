import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Row, Col } from 'react-sps/grid';
import { H1 } from 'react-sps/h1';
import { H2 } from 'react-sps/h2';
import { H3 } from 'react-sps/h3';
import { H4 } from 'react-sps/h4';
import { H5 } from 'react-sps/h5';
import { H6 } from 'react-sps/h6';
import { P } from 'react-sps/p';

// interface PageParams {
// }

interface PageProps extends RouteComponentProps<any> {
  // match: match<PageParams>;
}

export default ({  }: PageProps) => (
  <Row>
    <Col>
      <Row>
        <Col>
          <H1>Typography</H1>
        </Col>
      </Row>
      <Row>
        <Col>
          <P>This is a paragraph.</P>
          <H1>{'Heading 1 <H1>'}</H1>
          <H2>{'Heading 2 <H2>'}</H2>
          <H3>{'Heading 3 <H3>'}</H3>
          <H4>{'Heading 4 <H4>'}</H4>
          <H5>{'Heading 5 <H5>'}</H5>
          <H6>{'Heading 6 <H6>'}</H6>
        </Col>
      </Row>
    </Col>
  </Row>
);
