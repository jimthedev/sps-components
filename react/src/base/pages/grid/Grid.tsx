import React from 'react';
import {
  H1,
  H2,
  P,
  Container,
  Row,
  Col,
  Visible,
  match,
  RouteComponentProps,
  withTheme,
  ITheme,
} from 'react-sps';

import { ItemGroup } from '../../ItemGroup';
import { ItemHeadingGroup } from '../../ItemHeadingGroup';

interface PageParams {
  name: string;
  value: string;
}

interface IPageProps extends RouteComponentProps<any> {
  match: match<PageParams>;
  theme: ITheme;
}

export default withTheme(({ theme }: IPageProps) => {
  //console.log(match, theme);
  return (
    <Row>
      <Col>
        <H1>Grid</H1>
        <ItemGroup>
          <ItemHeadingGroup>
            <H2>Basics</H2>
            <Container>
              <Row>
                <Col>
                  <P>1 of 3</P>
                </Col>
                <Col>
                  <P>2 of 3</P>
                </Col>
                <Col>
                  <P>3 of 3</P>
                </Col>
              </Row>
            </Container>
          </ItemHeadingGroup>
          <ItemHeadingGroup>
            <H2>With Border</H2>
            <Container>
              <Row>
                <Col style={{ border: '1px solid ' + theme.color.green300 }}>
                  <P>1 of 3</P>
                </Col>
                <Col>
                  <P>2 of 3</P>
                </Col>
                <Col>
                  <P>3 of 3</P>
                </Col>
              </Row>
            </Container>
          </ItemHeadingGroup>
          <ItemHeadingGroup>
            <H2>Responsive Breakpoints</H2>
            <P>
              <span>Current breakpoint: </span>
              <Visible xl={true}>X-Large</Visible>
              <Visible lg={true}>Large</Visible>
              <Visible md={true}>Medium</Visible>
              <Visible sm={true}>Small</Visible>
              <Visible xs={true}>X-Small</Visible>
            </P>
          </ItemHeadingGroup>
        </ItemGroup>
      </Col>
    </Row>
  );
});
