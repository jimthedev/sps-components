import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Row, Col } from 'react-sps/grid';
import { PageTitle } from 'react-sps/text';
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
          <PageTitle>Form</PageTitle>
        </Col>
      </Row>
    </Col>
  </Row>
);
