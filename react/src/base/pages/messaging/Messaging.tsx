import React from "react";
import { RouteComponentProps, Row, Col, H1, H2, P } from "react-sps";

import { ItemGroup } from "../../ItemGroup";
import { ItemHeadingGroup } from "../../ItemHeadingGroup";

// interface PageParams {
// }

interface PageProps extends RouteComponentProps<any> {
  // match: match<PageParams>;
  setTitle: Function
}

export default class MessagingPage extends React.Component<PageProps> {
  componentDidMount() {
    this.props.setTitle("Banana");
  //   mb.send('appStateChange', { path: "/messaging/componentDidMount" });
  //   // window.parent.postMessage(
  //   //   "RUBICON_" +
  //   //     JSON.stringify({
  //   //       type: "",
  //   //       params: {
  //   //         title: "yooooooo"
  //   //       }
  //   //     }),
  //   //   "*"
  //   // );
  }
  componentWillReceiveProps() {
    // mb.send('appStateChange', { path: "/messaging/componentWillReceiveProps" })
  }
  render() {
    return (
      <Row>
        <Col>
          <H1>Messaging</H1>
          <ItemGroup>
            <ItemHeadingGroup>
              <H2>Using MessageBus</H2>
              <P>If viewed through Commerce Platform this page sets the Page Title and Url of the parent frame.</P>
            </ItemHeadingGroup>
          </ItemGroup>
        </Col>
      </Row>
    );
  }
}
