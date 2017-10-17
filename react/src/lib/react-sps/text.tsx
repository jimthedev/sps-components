import * as React from 'react';
import { sourceSansPro, withFonts } from './font';

export const PageTitle = withFonts({
  sourceSansPro,
})(({ sourceSansPro, children }: any) => (
  <h1 style={sourceSansPro.styles}>{children}</h1>
));

export const Heading = withFonts({
  sourceSansPro,
})(({ sourceSansPro, children }: any) => (
  <h2 style={sourceSansPro.styles}>{children}</h2>
));
