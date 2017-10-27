import * as React from 'react';
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom';
import themed, { withProps } from './themed-components';
import { withFonts, sourceSansPro } from './font';

const activeClassName = 'nav-item-active';

interface IProps {
  sourceSansPro: any;
  activeClassName?: string;
}

// This is a weird one, we have to stripped off the theme props
// we don't want passed through until this gets resolved:
// https://github.com/styled-components/styled-components/issues/439#issuecomment-327251673
const StrippedLink = (props: any) => {
  const { sourceSansPro, ...rest } = props;
  return <RouterLink {...rest} />;
};
const StrippedNavLink = (props: any) => {
  const { sourceSansPro, ...rest } = props;
  return <RouterNavLink {...rest} />;
};

// HOCs, Themes, Types, Fonts
const styled = {
  RouterLink: withProps<IProps>()(themed(StrippedLink)).attrs({
    activeClassName,
  }),
  RouterNavLink: withProps<IProps>()(themed(StrippedNavLink)).attrs({
    activeClassName,
  }),
  a: withProps<IProps>()(themed.a),
};

export const A = withFonts({ sourceSansPro })(styled.a`
  background-color: transparent;
  background-image: none;
  border-bottom-color: transparent;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image-outset: 0px;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: transparent;
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: transparent;
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: transparent;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: none;
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.blue200};
  cursor: auto;
  display: inline;
  font-family: ${({ sourceSansPro }) => sourceSansPro.styles.fontFamily};
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  text-align: center;
  text-decoration-color: ${({ theme }) => theme.color.blue200};
  text-decoration-line: none;
  text-decoration-skip: objects;
  text-decoration-style: solid;
  text-size-adjust: 100%;
  touch-action: manipulation;
  transition-delay: 0s, 0s, 0s;
  transition-duration: 0.15s, 0.15s, 0.15s;
  transition-property: background-color, border-color, box-shadow;
  transition-timing-function: ease-in-out, ease-in-out, ease-in-out;
  user-select: none;
  white-space: nowrap;
`);

export const Link = withFonts({ sourceSansPro })(styled.RouterLink`
  background-color: transparent;
  background-image: none;
  border-bottom-color: transparent;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image-outset: 0px;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: transparent;
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: transparent;
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: transparent;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: none;
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.blue200};
  cursor: auto;
  display: inline;
  font-family: ${({ sourceSansPro }) => sourceSansPro.styles.fontFamily};
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  text-align: center;
  text-decoration-color: ${({ theme }) => theme.color.blue200};
  text-decoration-line: none;
  text-decoration-skip: objects;
  text-decoration-style: solid;
  text-size-adjust: 100%;
  touch-action: manipulation;
  transition-delay: 0s, 0s, 0s;
  transition-duration: 0.15s, 0.15s, 0.15s;
  transition-property: background-color, border-color, box-shadow;
  transition-timing-function: ease-in-out, ease-in-out, ease-in-out;
  user-select: none;
  white-space: nowrap;
`);

/*
  display: inline-block;
  padding-bottom: 4px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 4px;
*/

export const NavLink = withFonts({ sourceSansPro })(styled.RouterNavLink`
  background-color: transparent;
  background-image: none;
  border-bottom-color: transparent;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image-outset: 0px;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: transparent;
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: transparent;
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: transparent;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: none;
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.blue200};
  cursor: auto;
  display: inline;
  font-family: ${({ sourceSansPro }) => sourceSansPro.styles.fontFamily};
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 19.992px;
  text-align: center;
  text-decoration-color: ${({ theme }) => theme.color.blue200};
  text-decoration-line: none;
  text-decoration: none;
  text-decoration-skip: objects;
  text-decoration-style: solid;
  text-size-adjust: 100%;
  touch-action: manipulation;
  transition-delay: 0s, 0s, 0s;
  transition-duration: 0.15s, 0.15s, 0.15s;
  transition-property: background-color, border-color, box-shadow;
  transition-timing-function: ease-in-out, ease-in-out, ease-in-out;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  &.${activeClassName} {
    color: red;
  }
`);
