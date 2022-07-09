import { THEME as commonTheme } from './theme';
export const COLORS = {
  // default text color
  text: '#FFFFFF',
  darkTextColor:"#000000",

  textColor:"#474747",
  borderColor:"#D3D3D3",
  placeholderTextColor:"#9B9B9B",
  // base colors
  /** UI color for #primary */
  primary: '#9827F3',
  /** UI color for #secondary */
  secondary: '#627594', // '#8392AB',
  /** UI color for #tertiary */
  tertiary: '#E8AE4C',

  // non-colors
  black: '#252F40',
  white: '#FFFFFF',

  dark: '#252F40',
  light: '#E9ECEF',

  // gray variations
  /** UI color for #gray */
  gray: '#A7A8AE',

  // colors variations
  /** UI color for #danger */
  danger: '#EA0606',
  /** UI color for #warning */
  warning: '#FFC107',
  /** UI color for #success */
  success: '#82D616',
  /** UI color for #info */
  info: '#17C1E8',

  /** UI colors for navigation & card */
  card: '#292C3A',
  background: '#1B1D22',

  /** UI color for shadowColor */
  shadow: '#627594',
  overlay: 'rgba(0,0,0,0.3)',

  /** UI color for input borderColor on focus */
  focus: '#E293D3',
  input: '#FFFFFF',

  /** UI color for switch checked/active color */
  switchOn: '#CB0C9F',
  switchOff: '#181A1F',

  /** UI color for checkbox icon checked/active color */
  checkbox: ['#3A416F', '#141727'],
  checkboxIcon: '#FFFFFF',

  /** social colors */
  facebook: '#3B5998',
  twitter: '#55ACEE',
  dribbble: '#EA4C89',

  /** icon tint color */
  icon: '#FFFFFF',

  /** blur tint color */
  blurTint: 'dark',

  /** product link color */
  link: '#FFFFFF',

  /** shadow color */
  cardShadow: "rgba(0, 0, 0, 0.03)"
};

export const GRADIENTS = {
  primary: ['#B94FFA', '#9D18F0'],
  secondary: ['#A8B8D8', '#627594'],
  info: ['#21D4FD', '#2152FF'],
  success: ['#98EC2D', '#17AD37'],
  warning: ['#FBCF33', '#F53939'],
  danger: ['#FF667C', '#EA0606'],

  light: ['#EBEFF4', '#CED4DA'],
  dark: ['#3A416F', '#141727'],

  white: [String(COLORS.white), '#EBEFF4'],
  black: [String(COLORS.black), '#141727'],

  divider: ['rgba(255,255,255,0)', 'rgba(102, 116, 142, 0.6)'],
  menu: [
    'rgba(255, 255, 255, 0.0)',
    'rgba(255, 255, 255, 0.5)',
    'rgba(255, 255, 255, 0.0)',
  ],
};
export const ICONS = {

};
export const THEME = {
  ...commonTheme,
  colors: COLORS,
  gradients: GRADIENTS,
};
