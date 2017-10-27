import React from 'react';
import { RouteComponentProps, Row, Col, H1, H2, Spinner } from 'react-sps';

import {ItemGroup} from '../../ItemGroup';
import {ItemHeadingGroup} from '../../ItemHeadingGroup';

// interface PageParams {
// }

interface PageProps extends RouteComponentProps<any> {
  // match: match<PageParams>;
}

export default ({  }: PageProps) => (
  <Row>
    <Col>
      <H1>Spinner</H1>
      <ItemGroup>
        <ItemHeadingGroup>
          <H2>Standard Spinner</H2>
          <Spinner />
        </ItemHeadingGroup>
      </ItemGroup>
    </Col>
  </Row>
);
