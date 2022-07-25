import {THEME as commonTheme} from './theme';

export const COLORS = {
  // default text color
  text: '#252F40',
  darkTextColor:"#000000",
  activetext:"#08E0AD",
  verifiedText:"#05BE7B",
  lightTextColor:"#676767",
  identitytabtext:"#2E3358",
  identityselectedtabtext:"#21D4FD",

  primary:"#21D4FD",
  primaryText:"#2152FF",
  primaryradio:"#2152FF",
  primaryscannerline:"#2152FF",
  primaryqrmask:"#2152FF",
  lightborderColor:"#EDE7E7",
  closeiconcolor:"#827C7C",
  dropdownText:"#21D4FD",

  textColor:"#474747",
  borderColor:"#D3D3D3",
  placeholderTextColor:"#9B9B9B",
  lightText:"#7C7C7C",
  whiteText:"#FFFFFF",
  lightborderColor:"#C5C5C5",

  // Drawer header colors
  notificationbg:"#A426F3",
  notification:"#FF6666",

  // Drawer colors
  emailText:"#E0D1FF",
  activeicon:"#FFFFFF",
  inactiveicon:"#2152FF",
  inactivetext:"#21D4FD",
  activeimage:"#2152FF",

  // non-colors
  black: '#252F40',
  white: '#FFFFFF',

  // gray variations
  /** UI color for #gray */
  gray: '#A7A8AE',

   /** shadow color */
   cardShadow:"rgba(0, 0, 0, 0.6)",
   lightShadow:"rgba(0, 0, 0, 0.6)"
};

export const GRADIENTS = {
  primary: ['#21D4FD', '#2152FF'],
  activedrawer:["#2152FF","#21D4FD"],

  buttongradient:['#21D4FD', '#2152FF'],
  buttongradientoff: [String(COLORS.identitytabtext), String(COLORS.identitytabtext)],


  white: [String(COLORS.white), '#EBEFF4'],
  black: [String(COLORS.black), '#141727'],


  yellow:["#FF9533","#F1AE00"],
  blue:["#0BB7DD","#33C2FF"],
  orange:["#FE7941","#FF5A5A"],
  green:["#38E4DA","#11C16D"],
  lightblue:["#33CEFF","#097FD4"],
  viewbtn:["#2CB6F1","#3479FF"],

  revokegbtn:["#FF9533","#F1AE00"],
  suspendbtn:["#777777","#787076"]


};
export const THEME = {
  ...commonTheme,
  colors: COLORS,
  gradients: GRADIENTS,
};
