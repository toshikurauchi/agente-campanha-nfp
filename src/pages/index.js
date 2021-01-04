import React, { useState } from "react"
import CssBaseline from '@material-ui/core/CssBaseline'
import { Helmet } from "react-helmet";
import clsx from 'clsx'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import MobileStepper from '@material-ui/core/MobileStepper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'

import "../styles/global.css"
import IntroImg from "../images/fundo.jpg"
import CelPasso1Icone from "../images/celular-passo1-icone.png"
import CelPasso1 from "../images/celular-passo1.png"
import CelPasso2Icone from "../images/celular-passo2-icone.png"
import CelPasso2 from "../images/celular-passo2.png"
import CelPasso3Icone from "../images/celular-passo3-icone.png"
import CelPasso3 from "../images/celular-passo3.png"
import CelPasso4Icone from "../images/celular-passo4-icone.png"
import CelPasso4 from "../images/celular-passo4.png"
import CelPasso5Icone from "../images/celular-passo5-icone.png"
import CelPasso5 from "../images/celular-passo5.png"
import CelPasso6Icone from "../images/celular-passo6-icone.png"
import CelPasso6 from "../images/celular-passo6.png"
import PCPasso1 from "../images/pc-passo1.png"
import PCPasso6 from "../images/pc-passo6.png"

// Cores
const vermelho = "#990000"
const branco = "#ffffff"
const amarelo = "#ffd900"
const preto = "#161a1a"
const pretoTransparente = "#161a1a99"
// Fontes
const barlow = "'Barlow Condensed', sans-serif"
const cuprum = "'Cuprum', sans-serif"
const montserrat = "'Montserrat', sans-serif"

const slideDecks = [
  // Celular
  [
    {
      icone: CelPasso1Icone,
      passo: CelPasso1,
      titulo: "Acesse o site da receita",
      texto: <>
        <Typography>Acesse/crie sua conta (clique no link) <Link>www.nfp.fazenda.sp.gov.br/login</Link></Typography>
        <Typography>O cadastro pode ser feito pelo celular se você possuir o aplicativo da Receita.</Typography>
      </>,
    },
    {
      icone: CelPasso2Icone,
      passo: CelPasso2,
      titulo: "Acesse XXXXXXXXXXXX",
      texto: <>
        <Typography>Se estiver no site, clique em "Entidades" e depois em "Doação de cupons com CPF (automático)".</Typography>
        <Typography>Se estiver no aplicativo, clique em "Doação Cupom com CPF".</Typography>
      </>,
    },
    {
      icone: CelPasso3Icone,
      passo: CelPasso3,
      titulo: "Acesse XXXXXXXXXXXX",
      texto: <>
        <Typography>No campo "Período", selecione o prazo pelo qual deseja doar suas notas.</Typography>
        <Typography>Após esse prazo, caso queira continuar doando você precisará refazer esse passo-a-passo.</Typography>
      </>,
    },
    {
      icone: CelPasso4Icone,
      passo: CelPasso4,
      titulo: "Acesse XXXXXXXXXXXX",
      texto: <>
        <Typography>Procure a ASSOCIACAO METODISTA LIVRE AGENTE com nosso CNPJ 04.955.194/0001-30</Typography>
        <Typography>Haverá mais de uma opção, selecione aquela que aparece ativa e clique em confirmar doação automática.</Typography>
      </>,
    },
    {
      icone: CelPasso5Icone,
      passo: CelPasso5,
      titulo: "Pronto!",
      texto: <>
        <Typography>Pronto! Agora quando fizer suas compras, não se esqueça de pedir o CPF e seus créditos irão para a AGENTE de forma automática!</Typography>
      </>,
    },
    {
      icone: CelPasso6Icone,
      passo: CelPasso6,
      titulo: "Compartilhe",
      texto: <>
        <Typography>Compartilhe essa ideia com seus pais, irmãos, primos, amigos da facul, tios, vizinhos e vamos juntos ser agentes de transformação!</Typography>
      </>,
    },
  ],
  // PC
  [
    {
      icone: CelPasso1Icone,
      passo: PCPasso1,
      titulo: "Acesse o site da receita",
      texto: <>
        <Typography>Acesse/crie sua conta (clique no link) <Link>www.nfp.fazenda.sp.gov.br/login</Link></Typography>
        <Typography>O cadastro pode ser feito pelo celular se você possuir o aplicativo da Receita.</Typography>
      </>,
    },
    {
      icone: CelPasso2Icone,
      passo: PCPasso1,
      titulo: "Acesse XXXXXXXXXXXX",
      texto: <>
        <Typography>Se estiver no site, clique em "Entidades" e depois em "Doação de cupons com CPF (automático)".</Typography>
        <Typography>Se estiver no aplicativo, clique em "Doação Cupom com CPF".</Typography>
      </>,
    },
    {
      icone: CelPasso3Icone,
      passo: PCPasso1,
      titulo: "Acesse XXXXXXXXXXXX",
      texto: <>
        <Typography>No campo "Período", selecione o prazo pelo qual deseja doar suas notas.</Typography>
        <Typography>Após esse prazo, caso queira continuar doando você precisará refazer esse passo-a-passo.</Typography>
      </>,
    },
    {
      icone: CelPasso4Icone,
      passo: PCPasso1,
      titulo: "Acesse XXXXXXXXXXXX",
      texto: <>
        <Typography>Procure a ASSOCIACAO METODISTA LIVRE AGENTE com nosso CNPJ 04.955.194/0001-30</Typography>
        <Typography>Haverá mais de uma opção, selecione aquela que aparece ativa e clique em confirmar doação automática.</Typography>
      </>,
    },
    {
      icone: CelPasso5Icone,
      passo: PCPasso1,
      titulo: "Pronto!",
      texto: <>
        <Typography>Pronto! Agora quando fizer suas compras, não se esqueça de pedir o CPF e seus créditos irão para a AGENTE de forma automática!</Typography>
      </>,
    },
    {
      icone: CelPasso6Icone,
      passo: PCPasso6,
      titulo: "Compartilhe",
      texto: <>
        <Typography>Compartilhe essa ideia com seus pais, irmãos, primos, amigos da facul, tios, vizinhos e vamos juntos ser agentes de transformação!</Typography>
      </>,
    },
  ],
]

const theme = createMuiTheme({
  palette: {
    primary: {
      main: vermelho,
    },
  },
})


const useStyles = makeStyles((theme) => {
  // Medidas
  const appBarHeight = theme.spacing(7)

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
      fontFamily: montserrat,
      padding: theme.spacing(2, 4),
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
      fontFamily: cuprum,
      padding: theme.spacing(0.2, 0.5),
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
      fontFamily: montserrat,
      fontWeight: "800",
      fontSize: "1.2rem",
      color: branco,
      textTransform: "uppercase",
      marginTop: theme.spacing(4),
      padding: theme.spacing(1),
      width: "85vw",
      backgroundColor: pretoTransparente,
    },
    titulo: {
      fontFamily: cuprum,
      color: vermelho,
      fontSize: "1.5rem",
      fontWeight: "bold",
      textAlign: "center",
    },
    conteudo: {
      padding: theme.spacing(6, 4, 1),
    },
    tutorial: {
      marginTop: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    tituloTutorialContainer: {
      marginTop: theme.spacing(4),
      height: theme.spacing(10),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      position: "relative",
    },
    tituloTutorial: {
      fontFamily: barlow,
      textTransform: "uppercase",
      color: branco,
      display: "flex",
    },
    tituloTutorialNumero: {
      fontSize: "1.5rem",
      backgroundColor: vermelho,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: theme.spacing(4),
      fontWeight: "bold",
    },
    tituloTutorialTexto: {
      fontSize: "1.1rem",
      backgroundColor: preto,
      flexGrow: 1,
      display: "inline-flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
    },
    tituloTutorialIcone: {
      height: "100%",
      position: "absolute",
      right: 0,
    },
    slide: {
      padding: theme.spacing(1),
    },
    slideImg: {
      display: 'block',
      maxWidth: 400,
      overflow: 'hidden',
      width: '100%',
    },
    slideText: {
      textAlign: "center",
    },
  })
});

// markup
const IndexPage = () => {
  const classes = useStyles()
  const [currentTab, setCurrentTab] = useState(0)
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0)

  const handleTabChange = (event, newTab) => {
    setCurrentTab(newTab)
    setCurrentSlideIdx(0)
  }

  const handleSlideChange = (slide) => {
    setCurrentSlideIdx(slide)
  }

  const handleNext = () => {
    setCurrentSlideIdx((prevSlideIdx) => prevSlideIdx + 1)
  }

  const handleBack = () => {
    setCurrentSlideIdx((prevSlideIdx) => prevSlideIdx - 1)
  }

  const currentSlideDeck = slideDecks[currentTab]
  const currentSlide = currentSlideDeck[currentSlideIdx]
  const maxSteps = currentSlideDeck.length

  const tutorial = (
    <Box>
      <Box
        className={classes.tituloTutorialContainer}
      >
        <Typography className={classes.tituloTutorial}>
          <span className={classes.tituloTutorialNumero}>{currentSlideIdx + 1}</span>
          <span className={classes.tituloTutorialTexto}>{currentSlide.titulo}</span>
        </Typography>
        <img src={currentSlide.icone} className={classes.tituloTutorialIcone} />
      </Box>
      <Box>
        <SwipeableViews
          axis="x"
          index={currentSlideIdx}
          onChangeIndex={handleSlideChange}
          enableMouseEvents
        >
          {currentSlideDeck.map((step, index) => (
            <div key={index} className={classes.slide}>
              {Math.abs(currentSlideIdx - index) <= 2 ? (
                <img className={classes.slideImg} src={step.passo} alt={step.titulo} />
              ) : null}
            </div>
          ))}
        </SwipeableViews>
        <Box className={classes.slideText}>
          {currentSlide.texto}
        </Box>
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={currentSlideIdx}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={currentSlideIdx === maxSteps - 1}>
              Próximo
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={currentSlideIdx === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Anterior
            </Button>
          }
        />
      </Box>
    </Box>
  )

  return (
    <main>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Helmet>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Cuprum:wght@700&family=Montserrat:wght@100;400;700;800&display=swap" rel="stylesheet" />
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
        <Box className={classes.conteudo}>
          <Typography className={classes.titulo}>Legal! :-)</Typography>
          <Typography className={classes.titulo}>Como posso fazer a doação?</Typography>
          <Box
            className={classes.tutorial}
          >
            <Tabs
              value={currentTab}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleTabChange}
              aria-label="tutorial de doação"
            >
              <Tab label="Celular" />
              <Tab label="Computador" />
            </Tabs>
            {tutorial}
          </Box>
        </Box>
      </ThemeProvider>
    </main>
  )
}

export default IndexPage
