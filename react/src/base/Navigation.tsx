import * as React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-sps/grid';

export const Navigation = () => (
  <Row>
    <Col>
      <Row>
        <Col lg={3}>
          <Link to="/">Overview</Link>
        </Col>
        <Col lg={3}>
          <Link to="/color">Color</Link>
        </Col>
        <Col lg={3}>
          <Link to="/grid">Grid</Link>
        </Col>
        <Col lg={3}>
          <Link to="/form">Form</Link>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>
          <Link to="/spinner">Spinner</Link>
        </Col>
      </Row>
    </Col>
  </Row>
);
