import * as React from "react";
import {
  H1,
  H2,
  P,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  RouteComponentProps,
  Row,
  Col
} from "react-sps";

import { ItemGroup } from "../../ItemGroup";
import { ItemHeadingGroup } from "../../ItemHeadingGroup";

// interface PageParams {
// }

interface PageProps extends RouteComponentProps<any> {
  // match: match<PageParams>;
}

export default ({  }: PageProps) => (
  <Row>
    <Col>
      <H1>Cards</H1>
      <ItemGroup>
        
        <ItemHeadingGroup>
          <H2>Card</H2>
          <Card>
            <CardBody>
              <P>
                We'll play with clouds today. Let's go up in here, and start
                having some fun We tell people sometimes: we're like drug
                dealers, come into town and get everybody absolutely addicted to
                painting. It doesn't take much to get you addicted. The light is
                your friend. Preserve it. Let your imagination be your guide.
                Every time you practice, you learn more. If you overwork it you
                become a cloud killer. There's nothing worse than a cloud
                killer. When you do it your way you can go anywhere you choose.
                We need dark in order to show light. All you have to learn here
                is how to have fun. Trees grow in all kinds of ways. They're not
                all perfectly straight. Not every limb is perfect.
              </P>
            </CardBody>
          </Card>
        </ItemHeadingGroup>
        <ItemHeadingGroup>
          <H2>Card with Header</H2>
          <Card>
            <CardHeader>Yooooo</CardHeader>
            <CardBody>
              <P>
                We'll play with clouds today. Let's go up in here, and start
                having some fun We tell people sometimes: we're like drug
                dealers, come into town and get everybody absolutely addicted to
                painting. It doesn't take much to get you addicted. The light is
                your friend. Preserve it. Let your imagination be your guide.
                Every time you practice, you learn more. If you overwork it you
                become a cloud killer. There's nothing worse than a cloud
                killer. When you do it your way you can go anywhere you choose.
                We need dark in order to show light. All you have to learn here
                is how to have fun. Trees grow in all kinds of ways. They're not
                all perfectly straight. Not every limb is perfect.
              </P>
            </CardBody>
          </Card>
        </ItemHeadingGroup>
        <ItemHeadingGroup>
          <H2>Card with Header and Footer</H2>
          <Card>
            <CardHeader>Yooooo</CardHeader>
            <CardBody>
              <P>
                We'll play with clouds today. Let's go up in here, and start
                having some fun We tell people sometimes: we're like drug
                dealers, come into town and get everybody absolutely addicted to
                painting. It doesn't take much to get you addicted. The light is
                your friend. Preserve it. Let your imagination be your guide.
                Every time you practice, you learn more. If you overwork it you
                become a cloud killer. There's nothing worse than a cloud
                killer. When you do it your way you can go anywhere you choose.
                We need dark in order to show light. All you have to learn here
                is how to have fun. Trees grow in all kinds of ways. They're not
                all perfectly straight. Not every limb is perfect.
              </P>
            </CardBody>
            <CardFooter>Hodor hodor hodor</CardFooter>
          </Card>
        </ItemHeadingGroup>
      </ItemGroup>
    </Col>
  </Row>
);
