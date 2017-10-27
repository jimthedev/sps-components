import React from 'react';
import {
  H1,
  H2,
  H3,
  P,
  Link,
  Container,
  Row,
  Col,
  RouteComponentProps,
  StackedFormGroup,
  Input,
  Label,
  Checkbox
} from 'react-sps';

import { ItemGroup } from '../../ItemGroup';
import { ItemHeadingGroup } from '../../ItemHeadingGroup';
// interface PageParams {
// }

interface PageProps extends RouteComponentProps<any> {
  // match: match<PageParams>;
  enableBlock:Function,
  blocked: boolean,
  disableBlock:Function
}

export default class RouterPage extends React.Component<PageProps> {
  toggleBlock() {
    if(this.props.blocked) {
      this.props.disableBlock();
    } else {
      this.props.enableBlock();
    }
  }
  render() {
    return (
  <Row>
    <Col>
      <H1>Router</H1>
      <ItemGroup>
        <H2>Route Navigation Blocking</H2>
        <ItemHeadingGroup>
          <Container>
            <Row>
              <Col lg={3}>
                <P>
                  Historically it has been challenging to conditionally block
                  navigation in single page apps. Luckily react-sps uses
                  react-router to conditionally block navigation.
                </P>
              </Col>
            </Row>
            <Row>
              <Col>
                <H3>{'1. Enter some text'}</H3>
              </Col>
            </Row>
            <Row>
              <Col lg={3}>
                <StackedFormGroup
                  renderLabel={() => (
                    <Label htmlFor="errorinput1">Enter some text</Label>
                  )}
                  renderField={() => (
                    <Input
                      placeholder="Enter a company name"
                      id="errorinput1"
                    />
                  )}
                />
                <Checkbox id="enable" label="Enable blocking" checked={this.props.blocked} onChange={this.toggleBlock.bind(this)} />
              </Col>
            </Row>
            <Row>
              <Col>
                <H3>{'2. Navigate to another page'}</H3>
              </Col>
            </Row>
            <Row>
              <Col lg={3}>
                <P>
                  Now <Link to="/overview">navigate away</Link> from this page
                  and you should see a prompt asking you if you're sure.
                </P>
                <P>
                  If you click 'Cancel' at the prompt then the text you entered
                  should not change.
                </P>
              </Col>
            </Row>
          </Container>
        </ItemHeadingGroup>
      </ItemGroup>
    </Col>
  </Row>
    )
  }
}
