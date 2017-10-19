import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Row, Col } from 'react-sps/grid';
import { H1 } from 'react-sps/h1';
import { Spinner } from 'react-sps/spinner';
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
          <H1>Spinner</H1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Spinner />
        </Col>
      </Row>
    </Col>
  </Row>
);
