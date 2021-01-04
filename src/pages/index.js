import React from "react"
import CssBaseline from '@material-ui/core/CssBaseline'
import { Helmet } from "react-helmet";
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import "../styles/global.css"
import IntroImg from "../images/fundo.jpg"


const useStyles = makeStyles((theme) => {
  const appBarHeight = theme.spacing(7)
  const vermelho = "#990000"
  const branco = "#ffffff"
  const amarelo = "#ffd900"
  const pretoTransparente = "#161a1a99"

  return ({
    appBar: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      backgroundColor: "rgba(255, 255, 255, 0.64)",
      height: appBarHeight,
    },
    introImgBox: {
      width: "100vw",
      height: "60vh",
      backgroundImage: `url(${IntroImg})`,
      backgroundSize: "auto 100%",
      backgroundPosition: "left",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#ccc",
      paddingTop: appBarHeight,
    },
    introTextBox: {
      width: "100vw",
      height: "40vh",
      backgroundColor: vermelho,
      fontFamily: "'Montserrat', sans-serif",
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    introTitle: {
      color: amarelo,
      textTransform: "uppercase",
      fontWeight: "bold",
    },
    introBody: {
      color: branco,
    },
    titleText: {
      fontFamily: "'Cuprum', sans-serif",
      padding: `${theme.spacing(0.2)}px ${theme.spacing(0.5)}px`,
      textTransform: "uppercase",
    },
    titleMain: {
      backgroundColor: vermelho,
      color: branco,
    },
    titleSecondary: {
      color: vermelho,
    },
    callForAction: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: "800",
      fontSize: "1.2rem",
      color: branco,
      textTransform: "uppercase",
      marginTop: theme.spacing(4),
      padding: theme.spacing(1),
      width: "85vw",
      backgroundColor: pretoTransparente,
    },
  })
});


// markup
const IndexPage = () => {
  const classes = useStyles()

  return (
    <main>
      <CssBaseline />
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cuprum:wght@700&family=Montserrat:wght@100;400;700;800&display=swap" rel="stylesheet" />
      </Helmet>
      <title>Agente - Campanha NFP</title>
      <AppBar className={classes.appBar} position="absolute">
        <Typography variant="h5">
          <span className={clsx(classes.titleText, classes.titleMain)}>
            Agente
          </span>
          <span className={clsx(classes.titleText, classes.titleSecondary)}>
            Valorizando Gente
          </span>
        </Typography>
      </AppBar>
      <Box className={classes.introImgBox}>
        <Typography className={classes.callForAction}>Transforme seus gastos em impacto social</Typography>
      </Box>
      <Box className={classes.introTextBox}>
        <Typography className={classes.introTitle}>Doe suas notas fiscais.</Typography>
        <Typography className={classes.introBody}>É simples.</Typography>
        <Typography className={classes.introBody}>É rápido.</Typography>
        <Typography className={classes.introBody}>Não custa nada para você.</Typography>
        <Typography className={classes.introBody}>E ajuda muita gente!</Typography>
      </Box>
    </main>
  )
}

export default IndexPage
