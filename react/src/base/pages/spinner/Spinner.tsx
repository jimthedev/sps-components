import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Row, Col } from 'react-sps/grid';
import { PageTitle } from 'react-sps/text';
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
          <PageTitle>Spinner</PageTitle>
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
