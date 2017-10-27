import { withFonts, sourceSansPro, withProps, themed } from "react-sps";

interface IProps {
  sourceSansPro: any;
}

// Any html elements types you want to style
// should be listed here:
// Req'd due to: https://github.com/Microsoft/typescript-styled-plugin/issues/21
const styled = {
  itemHeadingGroup: withProps<IProps>()(themed.div)
};

// These styles will remain local
export const ItemHeadingGroup = withFonts({
  sourceSansPro
})(styled.itemHeadingGroup`
  box-sizing: border-box;
  color: ${({theme}) => theme.color.gray200};
  display: block;
  font-family: ${({sourceSansPro}) => sourceSansPro.styles.fontFamily};
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 32px;
  text-align: left;
  text-size-adjust: 100%;
  vertical-align: middle;
`);
