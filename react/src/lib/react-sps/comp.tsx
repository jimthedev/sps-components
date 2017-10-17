// component
import styled, { withProps } from './themed-components';

interface IProps {
  active?: boolean;
}

export const Container = withProps<IProps, HTMLDivElement>(styled.div)`
  height: 100%;
  padding-right: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.color.blue100};
  background-color: ${props => {
    return props.theme.name === 'standard'
      ? props.theme.color.green200
      : props.theme.color.red300;
  }};
  `;
