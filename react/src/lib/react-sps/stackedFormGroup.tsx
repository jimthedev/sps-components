import * as React from 'react';
import { Row, Col } from 'react-sps/grid';

export const StackedFormGroup = (props: any) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>{props.renderLabel(props)}</Col>
        </Row>
        <Row>
          <Col>{props.renderField(props)}</Col>
        </Row>
      </Col>
    </Row>
  );
};
