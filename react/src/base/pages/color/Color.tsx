import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ColorDetail, {
  IColorDetail,
  IColorDetailRGB,
} from 'react-sps/colorDetail';
import * as Color from 'react-sps/color';
import { Row, Col } from 'react-sps/grid';
import { withFonts, sourceSansPro } from 'react-sps/font';
import { H1 } from 'react-sps/h1';
import { H2 } from 'react-sps/h2';
import { P } from 'react-sps/p';

// interface PageParams {
// }

interface PageProps extends RouteComponentProps<any> {
  // match: match<PageParams>;
}

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

export default ({  }: PageProps) => (
  <Row>
    <Col>
      <Row>
        <Col>
          <H1>Color</H1>
        </Col>
      </Row>
      <Row>
        <Col>
          <H2>Using Colors in your components</H2>
          <P>
            You should not use colors directly but rather get them off the theme
            prop. See the spinner component for an example of using the colors
            from a theme.
          </P>
        </Col>
      </Row>
      <Row>
        <Col>
          <H2>Changing or adding colors</H2>
          <P>
            Colors are defined in their theme. When a user selects a theme then
            those colors may be changed.
          </P>
        </Col>
      </Row>
      <Row>
        <Col>
          <H2>Blue</H2>
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
          <H2>White, Gray, Black</H2>
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={4} xl={3}>
          <Swatch colorDetail={ColorDetail.white} textColor={Color.gray600} />
        </Col>
        <Col sm={6} md={4} xl={3}>
          <Swatch colorDetail={ColorDetail.gray100} textColor={Color.gray600} />
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
        <Col sm={6} md={4} xl={3}>
          <Swatch colorDetail={ColorDetail.black} textColor={Color.white} />
        </Col>
      </Row>
      <Row>
        <Col>
          <H2>Orange</H2>
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
          <H2>Yellow</H2>
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
          <H2>Purple</H2>
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
          <H2>Green</H2>
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
          <H2>Red</H2>
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
    </Col>
  </Row>
);
