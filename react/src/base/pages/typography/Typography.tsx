import React from 'react';
import {
  RouteComponentProps,
  Row,
  Col,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
} from 'react-sps';

import { ItemGroup } from '../../ItemGroup';
import { ItemHeadingGroup } from '../../ItemHeadingGroup';

// interface PageParams {
// }

interface PageProps extends RouteComponentProps<any> {
  // match: match<PageParams>;
}

export default ({  }: PageProps) => (
  <Row>
    <Col>
      <H1>Typography</H1>
      <ItemGroup>
        <ItemHeadingGroup>
          <H1>{'Heading 1 <H1>'}</H1>
          <H2>{'Heading 2 <H2>'}</H2>
          <H3>{'Heading 3 <H3>'}</H3>
          <H4>{'Heading 4 <H4>'}</H4>
          <H5>{'Heading 5 <H5>'}</H5>
          <H6>{'Heading 6 <H6>'}</H6>
          <P>This is a paragraph.</P>
        </ItemHeadingGroup>
      </ItemGroup>
    </Col>
  </Row>
);
