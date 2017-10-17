// component
import styled, { withProps, keyframes } from './themed-components';

interface IProps {
  active?: boolean;
}

export const Rotate360 = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = withProps<IProps, HTMLDivElement>(styled.div)`
  animation: ${Rotate360} 1.1s infinite linear;
  border-color: ${props => props.theme.color.blue400} ${props =>
  props.theme.color.blue400} ${props => props.theme.color.blue400} ${props =>
  props.theme.color.blue200};
  border-radius: 50%;
  border-style: solid;
  border-width: 1.1em;
  display: inline-block;
  font-size: 10px;
  height: 10em;
  margin: 60px auto;
  overflow: hidden;
  position: relative;
  text-indent: -9999px;
  transform: translateZ(0);
  width: 10em;
`;
