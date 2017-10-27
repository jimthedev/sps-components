import * as React from 'react';
import { NavLink, Row, Col } from 'react-sps';

export const Navigation = () => (
  <Row>
    <Col>
      <Row>
        <Col lg={3}>
          <NavLink
            to="/overview"
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            Overview
          </NavLink>
        </Col>
        <Col lg={3}>
          <NavLink
            to="/color"
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            Color
          </NavLink>
        </Col>
        <Col lg={3}>
          <NavLink to="/grid">Grid</NavLink>
        </Col>
        <Col lg={3}>
          <NavLink to="/form">Form</NavLink>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>
          <NavLink to="/typography">Typography</NavLink>
        </Col>
        <Col lg={3}>
          <NavLink to="/spinner">Spinner</NavLink>
        </Col>
        <Col lg={3}>
          <NavLink to="/card">Card</NavLink>
        </Col>
        <Col lg={3}>
          <NavLink to="/router">Router</NavLink>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>
          <NavLink to="/messaging">Messaging</NavLink>
        </Col>
      </Row>
    </Col>
  </Row>
);
