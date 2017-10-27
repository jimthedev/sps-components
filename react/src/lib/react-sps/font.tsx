import withAsyncFonts from 'jimthedev-react-with-async-fonts';
import { InputFont as Font } from 'jimthedev-react-with-async-fonts/lib/types';
export const withFonts = withAsyncFonts;
export {
  Font
};
export const sourceSansPro: Font = {
  family: 'Source Sans Pro',
  error: new Error('Could not load'),
  class: {
    initial: 'system-font',
    success: 'opensourcepro-font',
    fallback: 'system-font',
  },
  styles: {
    initial: {
      fontFamily: 'Helvetica, Arial, sans-serif',
    },
    success: {
      fontFamily: '"Source Sans Pro", Helvetica, Arial, sans-serif',
    },
    fallback: {
      // `initial` will be used instead if not set
      fontFamily: 'Helvetica, Arial, sans-serif',
    },
  },
};

// export enum fontWeight {
//   light = 300,
//   normal = 400,
//   semibold = 600,
//   bold = 700,
// }

// export enum fontStyle {
//   normal = 'normal',
//   italic = 'italic',
// }
