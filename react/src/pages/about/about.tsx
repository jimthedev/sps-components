import React from 'react';
import { RouteComponentProps, match, Link } from 'react-router-dom';
import { get } from 'lodash';
import ColorDetail, {
  IColorDetail,
  IColorDetailRGB,
} from '../../lib/ColorDetail';
import * as Color from '../../lib/Color';
import { Row, Col, Container, Visible } from '../../lib/Grid';
import { sourceSansPro, withFonts } from '../../lib/Font';

interface AboutParams {
  name: string;
  value: string;
}

interface AboutProps extends RouteComponentProps<any> {
  match: match<AboutParams>;
}

const yo = {
  my: {
    name: 'asdfa',
  },
};

export interface ISwatch {
  sourceSansPro: any;
  colorDetail: IColorDetail;
  shadowColorRGB?: IColorDetailRGB;
  shadowOpacity?: string;
  textColor: string;
}

export const Swatch = withFonts({
  sourceSansPro,
})(
  ({
    sourceSansPro,
    colorDetail,
    shadowColorRGB = ColorDetail.gray600.rgb,
    shadowOpacity = '0.25',
    textColor,
  }: ISwatch) => {
    const { fontFamily } = sourceSansPro.styles;
    const { friendlyName, hex, rgb } = colorDetail;
    return (
      <div
        style={{
          borderRadius: '50%',
          width: '130px',
          height: '130px',
          backgroundColor: hex,
          color: textColor,
          textAlign: 'center',
          boxShadow: `0 0 3px 1px rgba(${shadowColorRGB.red},${shadowColorRGB.green},${shadowColorRGB.blue},${shadowOpacity})`,
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          flexDirection: 'column',
          fontSize: '18px',
          fontWeight: 100,
          fontFamily,
          margin: '20px auto',
        }}
      >
        <div>{friendlyName}</div>
        <div>{hex}</div>
        <div>
          {rgb.red}, {rgb.green}, {rgb.blue}
        </div>
      </div>
    );
  }
);

const PageTitle = withFonts({
  sourceSansPro,
})(({ sourceSansPro, children }: any) => (
  <h1 style={sourceSansPro.styles}>{children}</h1>
));

const Heading = withFonts({
  sourceSansPro,
})(({ sourceSansPro, children }: any) => (
  <h2 style={sourceSansPro.styles}>{children}</h2>
));

export default ({ match }: AboutProps) => (
  <div>
    <Container>
      <Row>
        <Col>
          <Visible xl={true}>X-Large</Visible>
          <Visible lg={true}>Large</Visible>
          <Visible md={true}>Medium</Visible>
          <Visible sm={true}>Small</Visible>
          <Visible xs={true}>X-Small</Visible>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/">Index</Link> hi, {match.params.name} {get(yo, 'my.name')}
        </Col>
      </Row>
      <Row>
        <Col>
          <PageTitle>Color</PageTitle>
        </Col>
      </Row>
      <Row>
        <Col>
          <Heading>Blues</Heading>
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={4} xl={3}>
          <Swatch colorDetail={ColorDetail.blue100} textColor={Color.gray600} />
        </Col>
        <Col sm={6} md={4} xl={3}>
          <Swatch colorDetail={ColorDetail.blue200} textColor={Color.white} />
        </Col>
        <Col sm={6} md={4} xl={3}>
          <Swatch colorDetail={ColorDetail.blue300} textColor={Color.white} />
        </Col>
        <Col sm={6} md={4} xl={3}>
          <Swatch colorDetail={ColorDetail.blue400} textColor={Color.white} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Heading>Whites, Grays, Black</Heading>
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={4} xl={3}>
          <Swatch colorDetail={ColorDetail.white} textColor={Color.gray600} />
        </Col>
        <Col sm={6} md={4} xl={3}>
          <Swatch colorDetail={ColorDetail.gray200} textColor={Color.gray600} />
        </Col>
        <Col sm={6} md={4} xl={3}>
          <Swatch colorDetail={ColorDetail.gray300} textColor={Color.gray600} />
        </Col>
        <Col sm={6} md={4} xl={3}>
          <Swatch colorDetail={ColorDetail.gray400} textColor={Color.gray600} />
        </Col>
        <Col sm={6} md={4} xl={3}>
          <Swatch colorDetail={ColorDetail.gray500} textColor={Color.white} />
        </Col>
        <Col sm={6} md={4} xl={3}>
          <Swatch colorDetail={ColorDetail.gray600} textColor={Color.white} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Heading>Oranges</Heading>
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={4} xl={3}>
          <Swatch
            colorDetail={ColorDetail.orange100}
            textColor={Color.gray600}
          />
        </Col>
        <Col sm={6} md={4} xl={3}>
          <Swatch colorDetail={ColorDetail.orange200} textColor={Color.white} />
        </Col>
        <Col sm={6} md={4} xl={3}>
          <Swatch colorDetail={ColorDetail.orange300} textColor={Color.white} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Heading>Yellows</Heading>
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={4} xl={3}>
          <Swatch
            colorDetail={ColorDetail.yellow100}
            textColor={Color.gray600}
          />
        </Col>
        <Col sm={6} md={4} xl={3}>
          <Swatch
            colorDetail={ColorDetail.yellow200}
            textColor={Color.gray600}
          />
        </Col>
        <Col sm={6} md={4} xl={3}>
          <Swatch
            colorDetail={ColorDetail.yellow300}
            textColor={Color.gray600}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Heading>Purples</Heading>
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={4} xl={3}>
          <Swatch
            colorDetail={ColorDetail.purple100}
            textColor={Color.gray600}
          />
        </Col>
        <Col sm={6} md={4} xl={3}>
          <Swatch colorDetail={ColorDetail.purple200} textColor={Color.white} />
        </Col>
        <Col sm={6} md={4} xl={3}>
          <Swatch colorDetail={ColorDetail.purple300} textColor={Color.white} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Heading>Greens</Heading>
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={4} xl={3}>
          <Swatch
            colorDetail={ColorDetail.green100}
            textColor={Color.gray600}
          />
        </Col>
        <Col sm={6} md={4} xl={3}>
          <Swatch colorDetail={ColorDetail.green200} textColor={Color.white} />
        </Col>
        <Col sm={6} md={4} xl={3}>
          <Swatch colorDetail={ColorDetail.green300} textColor={Color.white} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Heading>Reds</Heading>
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={4} xl={3}>
          <Swatch colorDetail={ColorDetail.red100} textColor={Color.gray600} />
        </Col>
        <Col sm={6} md={4} xl={3}>
          <Swatch colorDetail={ColorDetail.red200} textColor={Color.white} />
        </Col>
        <Col sm={6} md={4} xl={3}>
          <Swatch colorDetail={ColorDetail.red300} textColor={Color.white} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Heading>Grid</Heading>
        </Col>
      </Row>
      <Row style={{ backgroundColor: Color.blue100 }}>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row style={{ backgroundColor: Color.blue300 }}>
        <Col style={{ border: '1px solid red' }}>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  </div>
);
