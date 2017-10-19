import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Row, Col } from 'react-sps/grid';
import { H1 } from 'react-sps/h1';
import { H2 } from 'react-sps/h2';
import { Input } from 'react-sps/input';
import { StackedFormGroup } from 'react-sps/stackedFormGroup';
import { Label } from 'react-sps/label';
import { Textarea } from 'react-sps/textarea';

// interface PageParams {
// }

interface PageProps extends RouteComponentProps<any> {
  // match: match<PageParams>;
}

export default ({  }: PageProps) => (
  <Row>
    <Col>
      <Row>
        <Col>
          <H1>Form</H1>
        </Col>
      </Row>
      <Row>
        <Col>
          <H2>{'<StackedFormGroup/> <Label /> & <Input/>'}</H2>
        </Col>
      </Row>
      <Row>
        {/* SHOW 12 StackedFormGroup */}
        {Array(12)
          .fill(0)
          .map((...args: any[]) => {
            return (
              <Col xs={12} sm={6} md={4} lg={3} key={args[1]}>
                <StackedFormGroup
                  renderLabel={() => (
                    <Label htmlFor={'companyname' + args[1]}>
                      Company Name
                    </Label>
                  )}
                  renderField={() => (
                    <Input
                      placeholder="Enter a company name"
                      id={'companyname' + args[1]}
                    />
                  )}
                />
              </Col>
            );
          })}
      </Row>
      <Row>
        <Col>
          <H2>{'<Input/> with Error'}</H2>
        </Col>
      </Row>
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
      <Row>
        <Col>
          <H2>{'<Input /> Required'}</H2>
        </Col>
      </Row>
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
      <Row>
        <Col>
          <H2>{'<Input /> Required with Error'}</H2>
        </Col>
      </Row>
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
      <Row>
        <Col>
          <H2>{'<Input /> Disabled'}</H2>
        </Col>
      </Row>
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
      <Row>
        <Col>
          <H2>{'<Textarea>'}</H2>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>
          <StackedFormGroup
            renderLabel={() => <Label htmlFor="textarea1">Company Name</Label>}
            renderField={() => (
              <Textarea placeholder="Enter a company name" id="textarea1" />
            )}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <H2>{'<Textarea> Required'}</H2>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>
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
                required
              />
            )}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <H2>{'<Textarea> with Error'}</H2>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>
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
                error
              />
            )}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <H2>{'<Textarea> Required with Error'}</H2>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>
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
                error
                required
              />
            )}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <H2>{'<Textarea> Disabled'}</H2>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>
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
                disabled
                error
                required
              />
            )}
          />
        </Col>
      </Row>
    </Col>
  </Row>
);
