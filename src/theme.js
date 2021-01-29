import { createMuiTheme } from '@material-ui/core/styles';

// Cores
export const vermelho = "#990000"
export const branco = "#ffffff"
export const amarelo = "#ffd900"
export const amareloClaro = "#ffe760"
export const laranja = "#ef8332"
export const preto = "#161a1a"
export const pretoTransparente = "#161a1a99"
export const cinza = "#333333"
export const lilas = "#e6e6ff"
export const bege = "#ebf2d9"
// Fontes
export const barlow = "'Barlow Condensed', sans-serif"
export const cuprum = "'Cuprum', sans-serif"
export const montserrat = "'Montserrat', sans-serif"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: vermelho,
    },
  },
})

export default theme;
