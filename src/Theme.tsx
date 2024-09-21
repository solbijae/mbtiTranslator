const colors = {
  white: '#fff',
  cream: '#f7f9fc',
  dark: '#25262b',
  gray: '#ccc',
  orange: '#ff7b3a',
  lightOrange: '#e59560',
  blue: '#3498db',
};

export type ColorsTypes = typeof colors;

export interface Theme {
  color: ColorsTypes;
}

const theme: Theme = {
  color: colors,
};

export default theme;