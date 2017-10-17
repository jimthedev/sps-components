import React from 'react';
import { RouteComponentProps, match } from 'react-router-dom';
import { Row, Col, Visible } from 'react-sps/grid';
import { PageTitle, Heading } from 'react-sps/text';
import { withTheme, ITheme } from 'react-sps/themed-components';

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
        <Row>
          <Col>
            <PageTitle>Grid</PageTitle>
          </Col>
        </Row>
        <Row>
          <Col>
            <Heading>Basics</Heading>
          </Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col style={{ border: '1px solid ' + theme.color.green300 }}>
            1 of 3
          </Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>
            <Heading>Responsive Breakpoints</Heading>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>Current breakpoint: </span>
            <Visible xl={true}>X-Large</Visible>
            <Visible lg={true}>Large</Visible>
            <Visible md={true}>Medium</Visible>
            <Visible sm={true}>Small</Visible>
            <Visible xs={true}>X-Small</Visible>
          </Col>
        </Row>
      </Col>
    </Row>
  );
});
