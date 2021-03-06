import themed, { withProps, keyframes } from './themed-components';

interface IProps {
  active?: boolean;
}

// Any html elements types you want to style
// should be listed here:
// Req'd due to: https://github.com/Microsoft/typescript-styled-plugin/issues/21
const styled = {
  spinner: withProps<IProps>()(themed.div),
};

// This will be put in the global stylesheet as needed
export const Rotate360 = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

// These styles will remain local
export const Spinner = styled.spinner`
  animation: ${Rotate360} 1.1s infinite linear;
  border-color: ${({ theme }) => theme.color.blue400}
    ${({ theme }) => theme.color.blue400} ${({ theme }) => theme.color.blue400}
    ${({ theme }) => theme.color.blue200};
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
