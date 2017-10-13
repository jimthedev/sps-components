import * as Color from './Color';

export interface IColorDetailRGB {
  red: number;
  green: number;
  blue: number;
}

export interface IColorDetail {
  friendlyName: string;
  hex: string;
  rgb: IColorDetailRGB;
}

export interface IColorDetails {
  // Blues
  blue100: IColorDetail;
  blue200: IColorDetail;
  blue300: IColorDetail;
  blue400: IColorDetail;

  // Grays
  white: IColorDetail;
  gray200: IColorDetail;
  gray300: IColorDetail;
  gray400: IColorDetail;
  gray500: IColorDetail;
  gray600: IColorDetail;

  // Oranges
  orange100: IColorDetail;
  orange200: IColorDetail;
  orange300: IColorDetail;

  // Yellows
  yellow100: IColorDetail;
  yellow200: IColorDetail;
  yellow300: IColorDetail;

  // Purples
  purple100: IColorDetail;
  purple200: IColorDetail;
  purple300: IColorDetail;

  // Greens
  green100: IColorDetail;
  green200: IColorDetail;
  green300: IColorDetail;

  // Reds
  red100: IColorDetail;
  red200: IColorDetail;
  red300: IColorDetail;
}

const ColorDetail: IColorDetails = {
  // Blues
  blue100: {
    friendlyName: 'Blue 100',
    hex: Color.blue100,
    rgb: {
      red: 217,
      green: 240,
      blue: 250,
    },
  },
  blue200: {
    friendlyName: 'Blue 200',
    hex: Color.blue200,
    rgb: {
      red: 0,
      green: 170,
      blue: 229,
    },
  },
  blue300: {
    friendlyName: 'Blue 300',
    hex: Color.blue300,
    rgb: {
      red: 0,
      green: 151,
      blue: 204,
    },
  },
  blue400: {
    friendlyName: 'Blue 400',
    hex: Color.blue400,
    rgb: {
      red: 0,
      green: 119,
      blue: 170,
    },
  },

  // Grays
  white: {
    friendlyName: 'White',
    hex: Color.white,
    rgb: {
      red: 232,
      green: 233,
      blue: 233,
    },
  },
  gray200: {
    friendlyName: 'Gray 200',
    hex: Color.gray200,
    rgb: {
      red: 210,
      green: 212,
      blue: 213,
    },
  },
  gray300: {
    friendlyName: 'Gray 300',
    hex: Color.gray300,
    rgb: {
      red: 210,
      green: 212,
      blue: 213,
    },
  },
  gray400: {
    friendlyName: 'Gray 400',
    hex: Color.gray400,
    rgb: {
      red: 165,
      green: 169,
      blue: 171,
    },
  },
  gray500: {
    friendlyName: 'Gray 500',
    hex: Color.gray500,
    rgb: {
      red: 98,
      green: 104,
      blue: 107,
    },
  },
  gray600: {
    friendlyName: 'Gray 600',
    hex: Color.gray600,
    rgb: {
      red: 31,
      green: 40,
      blue: 44,
    },
  },

  // Oranges
  orange100: {
    friendlyName: 'Orange 100',
    hex: Color.orange100,
    rgb: {
      red: 255,
      green: 244,
      blue: 234,
    },
  },
  orange200: {
    friendlyName: 'Orange 200',
    hex: Color.orange200,
    rgb: {
      red: 255,
      green: 150,
      blue: 50,
    },
  },
  orange300: {
    friendlyName: 'orange300',
    hex: Color.orange300,
    rgb: {
      red: 191,
      green: 112,
      blue: 37,
    },
  },

  // Yellows
  yellow100: {
    friendlyName: 'Yellow 100',
    hex: Color.yellow100,
    rgb: {
      red: 255,
      green: 248,
      blue: 224,
    },
  },
  yellow200: {
    friendlyName: 'Yellow 200',
    hex: Color.yellow200,
    rgb: {
      red: 255,
      green: 240,
      blue: 179,
    },
  },
  yellow300: {
    friendlyName: 'Yellow 300',
    hex: Color.yellow300,
    rgb: {
      red: 255,
      green: 204,
      blue: 0,
    },
  },

  // Purples
  purple100: {
    friendlyName: 'Purple 100',
    hex: Color.purple100,
    rgb: {
      red: 241,
      green: 232,
      blue: 239,
    },
  },
  purple200: {
    friendlyName: 'Purple 200',
    hex: Color.purple200,
    rgb: {
      red: 136,
      green: 54,
      blue: 101,
    },
  },
  purple300: {
    friendlyName: 'Purple 300',
    hex: Color.purple300,
    rgb: {
      red: 116,
      green: 56,
      blue: 101,
    },
  },

  // Greens

  green100: {
    friendlyName: 'Green 100',
    hex: Color.green100,
    rgb: {
      red: 234,
      green: 248,
      blue: 240,
    },
  },
  green200: {
    friendlyName: 'Green 200',
    hex: Color.green200,
    rgb: {
      red: 50,
      green: 190,
      blue: 111,
    },
  },
  green300: {
    friendlyName: 'Green 300',
    hex: Color.green300,
    rgb: {
      red: 37,
      green: 143,
      blue: 83,
    },
  },

  // Reds

  red100: {
    friendlyName: 'Red 100',
    hex: Color.red100,
    rgb: {
      red: 255,
      green: 234,
      blue: 236,
    },
  },
  red200: {
    friendlyName: 'Red 200',
    hex: Color.red200,
    rgb: {
      red: 255,
      green: 31,
      blue: 42,
    },
  },
  red300: {
    friendlyName: 'Red 300',
    hex: Color.red300,
    rgb: {
      red: 192,
      green: 37,
      blue: 52,
    },
  },
};

export default ColorDetail;
