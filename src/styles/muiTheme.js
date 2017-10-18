import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Colors
export const orange       = '#F6903D'
export const blue         = '#2196F3'
export const green        = '#43A67C'
export const red          = '#D32F2F'
export const darkRed      = '#C1272D'
export const white        = '#ffffff'
export const black        = '#000000'
export const darkGrey     = '#757575'
export const grey         = '#DEDEDE'
export const grey50       = 'rgba(222, 222, 222, 0.5)'
export const grey30       = 'rgba(222, 222, 222, 0.7)'

// Palette
export const palette = {
  primary1Color: white,
  primary2Color: green,
  primary3Color: green,
  accent1Color: green,
  textColor: white,
  alternateTextColor: white,
  canvasColor: green,
  borderColor: grey,
  disabledColor: grey30
}

export default getMuiTheme({ palette })
