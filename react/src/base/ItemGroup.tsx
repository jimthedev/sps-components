import { withFonts, sourceSansPro, withProps, themed } from "react-sps";

interface IProps {
  sourceSansPro: any;
}

// Any html elements types you want to style
// should be listed here:
// Req'd due to: https://github.com/Microsoft/typescript-styled-plugin/issues/21
const styled = {
  itemGroup: withProps<IProps>()(themed.div)
};

// These styles will remain local
export const ItemGroup = withFonts({ sourceSansPro })(styled.itemGroup`
  border-bottom-color: ${({theme}) => theme.color.gray200};
  border-bottom-style: solid;
  border-bottom-width: 1px;
  box-sizing: border-box;
  color: ${({theme}) => theme.color.gray600};
  display: block;
  font-family: ${({sourceSansPro}) => sourceSansPro.styles.fontFamily};
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 48px;
  margin-top: 48px;
  padding-bottom: 48px;
  text-align: left;
  text-size-adjust: 100%;
`);
