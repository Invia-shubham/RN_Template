export type Fonts = {
  [key: string]: {
    fontFamily: string;
  };
};

export const fonts: Fonts = {
  regular: {
    fontFamily: 'MarkOT',
  },
  medium: {
    fontFamily: 'MarkOT-Medium',
  },
  semi_bold: {
    fontFamily: 'Mark-Pro-Bold',
  },
  bold: {
    fontFamily: 'MarkOT-Heavy',
  },
};
