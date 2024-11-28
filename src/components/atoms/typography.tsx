import {TextStyle} from 'react-native';
import {fonts} from './Fonts.ts';

type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

export function customTextStyle(
  fontSize: number,
  lineHeight: number,
  fontFamily: string,
  fontWeight?: FontWeight,
): TextStyle {
  const style: TextStyle = {
    fontSize: fontSize,
    lineHeight: lineHeight,
    fontFamily: fontFamily,
  };

  if (fontWeight) {
    style.fontWeight = fontWeight;
  }

  return style;
}

export type Typography = {
  style: {
    TypographyParagraphRegular: TextStyle;
    TypographyParagraphMedium: TextStyle;
    TypographyParagraphSemiBold: TextStyle;
    TypographyParagraphBold: TextStyle;

    TypographyBold40: TextStyle;
  };
};

export const typography: Typography = {
  style: {
    TypographyParagraphRegular: customTextStyle(
      14,
      20,
      fonts.regular.fontFamily,
    ),
    TypographyParagraphMedium: customTextStyle(14, 20, fonts.medium.fontFamily),
    TypographyParagraphSemiBold: customTextStyle(
      14,
      20,
      fonts.semi_bold.fontFamily,
    ),
    TypographyParagraphBold: customTextStyle(14, 20, fonts.bold.fontFamily),

    TypographyBold40: customTextStyle(40, 56, fonts.bold.fontFamily),
  },
};
