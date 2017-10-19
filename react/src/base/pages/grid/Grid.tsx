import React from 'react';
import { RouteComponentProps, match } from 'react-router-dom';
import { Row, Col, Visible } from 'react-sps/grid';
import { H1 } from 'react-sps/h1';
import { H2 } from 'react-sps/h2';
import { P } from 'react-sps/p';
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
            <H1>Grid</H1>
          </Col>
        </Row>
        <Row>
          <Col>
            <H2>Basics</H2>
          </Col>
        </Row>
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
        <Row>
          <Col>
            <H2>Responsive Breakpoints</H2>
          </Col>
        </Row>
        <Row>
          <Col>
            <P>
              <span>Current breakpoint: </span>
              <Visible xl={true}>X-Large</Visible>
              <Visible lg={true}>Large</Visible>
              <Visible md={true}>Medium</Visible>
              <Visible sm={true}>Small</Visible>
              <Visible xs={true}>X-Small</Visible>
            </P>
          </Col>
        </Row>
      </Col>
    </Row>
  );
});
