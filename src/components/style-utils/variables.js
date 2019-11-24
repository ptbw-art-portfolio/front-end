//*** Constants ***/
export const MAX_WIDTH = "1040px";
export const MIN_WIDTH = "400px";

//*** Fonts ***//
export const headerFont = `'Roboto Condensed', Sans-Serif`;
export const bodyFont = `'Cabin', Sans-Serif`;

//*** Colors ***//
const palette = ["#464655", "#94958b", "#b7b6c1", "#d5cfe1", "#eddfef"];
const alpha = "b2";

//*** Named Colors ***//
const attentionColor = palette[0];
const attentionBorder = palette[1];
const subtleBorder = palette[2];
const bgColor = palette[2];
const accent = palette[4];
const darkText = palette[0];
const lightText = palette[3];
const headerColor = darkText;
const bodyColor = darkText;
const overlayBackground = [accent+alpha, attentionBorder+alpha, attentionColor+alpha];
const formBackground = darkText;
const link = darkText;
const linkVisited = darkText;
const linkHover = subtleBorder;

export const colors = {
   attentionColor,
   attentionBorder,
   subtleBorder,
   bgColor,
   accent,
   darkText,
   lightText,
   headerColor,
   bodyColor,
   overlayBackground,
   formBackground,
   link,
   linkVisited,
   linkHover
};