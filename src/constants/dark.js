import { THEME as commonTheme } from './theme';

export const COLORS = {
  // default text color
  text: '#252F40',
  darkTextColor: "#000000",
  activetext: "#08E0AD",
  verifiedText: "#05BE7B",
  lightTextColor: "#676767",
  identitytabtext: "#2E3358",
  identityselectedtabtext: "#AF3CF6",

  primary: "#AD37F6",
  primaryText: "#B03EF7",
  primaryradio: "#9D18F0",
  primaryscannerline: "#D573F7",
  primaryqrmask: "#B364FF",
  lightborderColor: "#EDE7E7",
  closeiconcolor: "#827C7C",
  dropdownText: "#9B31DD",
  cardKeyText: "#E3B7FF",

  textColor: "#474747",
  borderColor: "#D3D3D3",
  placeholderTextColor: "#9B9B9B",
  lightText: "#7C7C7C",
  whiteText: "#FFFFFF",
  lightborderColor: "#C5C5C5",
  seperatorLineColor: "#ECECEC",
  fido2valueText: "#1E1E1E",
  cardborderColor: "#EBEBEB",
  selectedCardView: "#1BC54A",
  grayText: "#6D6D6D",
  orangeText: "#E48F26",
  redText: "#F04D59",

  // Drawer header colors
  notificationbg: "#A426F3",
  notification: "#FF6666",

  // Drawer colors
  emailText: "#E0D1FF",
  activeicon: "#FFFFFF",
  inactiveicon: "#BC51FF",
  inactivetext: "#E5BFFD",
  activeimage: "#8D4CFA",

  // non-colors
  black: '#252F40',
  white: '#FFFFFF',

  // gray variations
  /** UI color for #gray */
  gray: '#A7A8AE',

  /** shadow color */
  cardShadow: "rgba(0, 0, 0, 0.6)",
  lightShadow: "rgba(0, 0, 0, 0.6)"
};

export const GRADIENTS = {
  primary: ['#B94FFA', '#9D18F0'],
  activedrawer: ["#BC52FD", "#B43DFF"],

  buttongradient: ["#C544F1", "#E031C1"],
  buttongradientoff: [String(COLORS.identitytabtext), String(COLORS.identitytabtext)],
  readgradient: ["#585858", "#656565",],


  white: [String(COLORS.white), '#EBEFF4'],
  black: [String(COLORS.black), '#141727'],


  yellow: ["#FF9533", "#F1AE00"],
  blue: ["#0BB7DD", "#33C2FF"],
  orange: ["#FE7941", "#FF5A5A"],
  green: ["#38E4DA", "#11C16D"],
  lightblue: ["#33CEFF", "#097FD4"],
  viewbtn: ["#2CB6F1", "#3479FF"],
  red: ["#EC4444", "#FB6DA0"],
  darkblue: ["#6968A1", "#3F3D85"],
  lightorange: ["#DEB111", "#E8651B"],
  reportBtn:["#FA4FE9","#D0109B"],
  consentBtn:["#33C2FF","#0BB7DD"],


  revokegbtn: ["#FF9533", "#F1AE00"],
  suspendbtn: ["#777777", "#787076"],

  notegradient: ["#FFF9FF", "#FFF9FF00"]


};
export const THEME = {
  ...commonTheme,
  colors: COLORS,
  gradients: GRADIENTS,
};
