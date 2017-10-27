import themed, { withProps } from './themed-components';
import { withFonts, sourceSansPro } from 'react-sps/font';

interface ICardHeaderProps {
  sourceSansPro: any;
}

const styled = {
  cardHeader: withProps<ICardHeaderProps>()(themed.div),
};

export const CardHeader = withFonts({ sourceSansPro })(styled.cardHeader`
  background-color: ${({ theme }) => theme.color.white};
  border-bottom-color: ${({ theme }) => theme.color.gray200};
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.gray600};
  display: block;
  font-family: ${({ sourceSansPro }) => sourceSansPro.styles.fontFamily};
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 0px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  text-align: left;
  text-size-adjust: 100%;
  word-wrap: break-word;
`);
