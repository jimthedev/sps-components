import React from "react";
import {
  H1,
  H2,
  H3,
  Container,
  Row,
  Col,
  RouteComponentProps,
  StackedFormGroup,
  Input,
  Label,
  Checkbox,
  Textarea,
  TextareaInstructions
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
      <H1>Form</H1>
      <ItemGroup>
        <H2>Input</H2>
        <ItemHeadingGroup>
          <H3>{"Simple"}</H3>
          <Container>
            <Row>
              <Col lg={3}>
                <StackedFormGroup
                  renderLabel={() => (
                    <Label htmlFor="errorinput1">
                      Company Name
                    </Label>
                  )}
                  renderField={() => (
                    <Input
                      placeholder="Enter a company name"
                      id="errorinput1"
                    />
                  )}
                />
              </Col>
            </Row>
          </Container>
        </ItemHeadingGroup>
        <ItemHeadingGroup>
          <H3>{"With Error"}</H3>
          <Container>
            <Row>
              <Col lg={3}>
                <StackedFormGroup
                  renderLabel={() => (
                    <Label htmlFor="errorinput1" error>
                      Company Name
                    </Label>
                  )}
                  renderField={() => (
                    <Input
                      placeholder="Enter a company name"
                      id="errorinput1"
                      error
                    />
                  )}
                />
              </Col>
            </Row>
          </Container>
        </ItemHeadingGroup>
        <ItemHeadingGroup>
          <H3>{"Required"}</H3>
          <Container>
            <Row>
              <Col lg={3}>
                <StackedFormGroup
                  renderLabel={() => (
                    <Label htmlFor="requiredinput1" required>
                      Company Name
                    </Label>
                  )}
                  renderField={() => (
                    <Input
                      placeholder="Enter a company name"
                      id="requiredinput1"
                      required
                    />
                  )}
                />
              </Col>
            </Row>
          </Container>
        </ItemHeadingGroup>
        <ItemHeadingGroup>
          <H3>{"Required + Error"}</H3>
          <Container>
            <Row>
              <Col lg={3}>
                <StackedFormGroup
                  renderLabel={() => (
                    <Label htmlFor="requiredwitherrorinput1" required error>
                      Company Name
                    </Label>
                  )}
                  renderField={() => (
                    <Input
                      placeholder="Enter a company name"
                      id="requiredwitherrorinput1"
                      required
                      error
                    />
                  )}
                />
              </Col>
            </Row>
          </Container>
        </ItemHeadingGroup>
        <ItemHeadingGroup>
          <H3>{"Disabled"}</H3>
          <Container>
            <Row>
              <Col lg={3}>
                <StackedFormGroup
                  renderLabel={() => (
                    <Label htmlFor="requiredwitherrorinput1" required error disabled>
                      Company Name
                    </Label>
                  )}
                  renderField={() => (
                    <Input
                      placeholder="Enter a company name"
                      id="requiredwitherrorinput1"
                      required
                      error
                      disabled
                    />
                  )}
                />
              </Col>
            </Row>
          </Container>
        </ItemHeadingGroup>
        <ItemHeadingGroup>
          <H3>{"With Grid"}</H3>
          {/* SHOW 12 StackedFormGroup */}
          <Container>
            <Row>
              {Array(12)
                .fill(0)
                .map((...args: any[]) => {
                  return (
                    <Col xs={12} sm={6} md={4} lg={3} key={args[1]}>
                      <StackedFormGroup
                        renderLabel={() => (
                          <Label htmlFor={"companyname" + args[1]}>
                            Company Name
                          </Label>
                        )}
                        renderField={() => (
                          <Input
                            placeholder="Enter a company name"
                            id={"companyname" + args[1]}
                          />
                        )}
                      />
                    </Col>
                  );
                })}
            </Row>
          </Container>
        </ItemHeadingGroup>

        <H2>Textarea</H2>
        <ItemHeadingGroup>
          <H3>{"Simple"}</H3>
          <Container>
            <Row>
              <Col lg={4}>
                <StackedFormGroup
                  renderLabel={() => <Label htmlFor="textarea1">Company Name</Label>}
                  renderField={() => (
                    <Textarea placeholder="Enter a company name" id="textarea1" />
                  )}
                />
              </Col>
            </Row>
          </Container>
        </ItemHeadingGroup>
        <ItemHeadingGroup>
          <H3>{"With Instuctions"}</H3>
          <Container>
            <Row>
              <Col lg={4}>
                <StackedFormGroup
                  renderLabel={() => <Label htmlFor="textarea1">Company Name</Label>}
                  renderField={() => (
                    <Textarea
                      placeholder="Enter a company name"
                      id="textarea1"
                      renderInstructions={() => (
                        <TextareaInstructions>
                          List any additional comments, questions or information about
                          this campaign below in the text area provided by this long
                          form.
                        </TextareaInstructions>
                      )}
                    />
                  )}
                />
              </Col>
            </Row>
          </Container>
        </ItemHeadingGroup>
        <ItemHeadingGroup>
          <H3>{"Required"}</H3>
          <Container>
            <Row>
              <Col lg={4}>
               <StackedFormGroup
                  renderLabel={() => (
                    <Label htmlFor="requiredtextarea1" required>
                      Company Name
                    </Label>
                  )}
                  renderField={() => (
                    <Textarea
                      placeholder="Enter a company name"
                      id="requiredtextarea1"
                      renderInstructions={() => (
                        <TextareaInstructions>
                          List any additional comments, questions or information about
                          this campaign below in the text area provided by this long
                          form.
                        </TextareaInstructions>
                      )}
                      required
                    />
                  )}
                />
              </Col>
            </Row>
          </Container>
        </ItemHeadingGroup>
        <ItemHeadingGroup>
          <H3>{"With Error"}</H3>
          <Container>
            <Row>
              <Col lg={4}>
                <StackedFormGroup
                  renderLabel={() => (
                    <Label htmlFor="errortextarea1" error>
                      Company Name
                    </Label>
                  )}
                  renderField={() => (
                    <Textarea
                      placeholder="Enter a company name"
                      id="errortextarea1"
                      renderInstructions={() => (
                        <TextareaInstructions>
                          List any additional comments, questions or information about
                          this campaign below in the text area provided by this long
                          form.
                        </TextareaInstructions>
                      )}
                      error
                    />
                  )}
                />
              </Col>
            </Row>
          </Container>
        </ItemHeadingGroup>
        <ItemHeadingGroup>
          <H3>{"Required + Error"}</H3>
          <Container>
            <Row>
              <Col lg={4}>
                <StackedFormGroup
                  renderLabel={() => (
                    <Label htmlFor="requiredwitherrortextarea1" error required>
                      Company Name
                    </Label>
                  )}
                  renderField={() => (
                    <Textarea
                      placeholder="Enter a company name"
                      id="requiredwitherrortextarea1"
                      renderInstructions={() => (
                        <TextareaInstructions>
                          List any additional comments, questions or information about
                          this campaign below in the text area provided by this long
                          form.
                        </TextareaInstructions>
                      )}
                      error
                      required
                    />
                  )}
                />
              </Col>
            </Row>
          </Container>
        </ItemHeadingGroup>
        <ItemHeadingGroup>
          <H3>{"Disabled"}</H3>
          <Container>
            <Row>
              <Col lg={4}>
                <StackedFormGroup
                  renderLabel={() => (
                    <Label htmlFor="disabledtextarea1" disabled error required>
                      Company Name
                    </Label>
                  )}
                  renderField={() => (
                    <Textarea
                      placeholder="Enter a company name"
                      id="disabledtextarea1"
                      renderInstructions={() => (
                        <TextareaInstructions>
                          List any additional comments, questions or information about
                          this campaign below in the text area provided by this long
                          form.
                        </TextareaInstructions>
                      )}
                      disabled
                      error
                      required
                    />
                  )}
                />
              </Col>
            </Row>
          </Container>
        </ItemHeadingGroup>
        <H2>Checkbox</H2>
        <ItemHeadingGroup>
          <H3>Simple</H3>
          <Checkbox label="Hello there" id="checkbox1" />
          <Checkbox label="Hello" id="checkbox2" />
          <Checkbox label="Hello there I am here" id="checkbox3" />
          <Checkbox label="Hello there I am a very long label I think" id="checkbox4" />
        </ItemHeadingGroup>
      </ItemGroup>
    </Col>
  </Row>
);
