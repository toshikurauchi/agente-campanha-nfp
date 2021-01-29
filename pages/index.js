import React, { useState } from "react"
import Scrollspy from 'react-scrollspy'
import CssBaseline from '@material-ui/core/CssBaseline'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Head from 'next/head'
import clsx from 'clsx'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AppBar from '@material-ui/core/AppBar'
import Backdrop from '@material-ui/core/Backdrop'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import MobileStepper from '@material-ui/core/MobileStepper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import FacebookIcon from '@material-ui/icons/Facebook'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import InstagramIcon from '@material-ui/icons/Instagram'
import LanguageIcon from '@material-ui/icons/Language';
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import MenuIcon from '@material-ui/icons/Menu'
import theme, { vermelho, branco, amarelo, amareloClaro, laranja, preto, pretoTransparente, cinza, lilas, bege, barlow, cuprum, montserrat } from '../src/theme';

// Seções
const intro = "intro"
const comoDoar = "como-doar"
const sobre = "sobre"
const faq = "faq"

const SlideText = (props) => {
  const classes = useStyles()
  return <Typography className={classes.slideText} {...props}></Typography>
}

const slideDecks = [
  // Celular
  [
    {
      icone: "/images/celular-passo1-icone.png",
      passo: "/images/celular-passo1.png",
      titulo: "Acesse o site da receita",
      texto: <>
        <SlideText>Acesse/crie sua conta (clique no link) <Link>www.nfp.fazenda.sp.gov.br/login</Link></SlideText>
        <SlideText>O cadastro pode ser feito pelo celular se você possuir o aplicativo da Receita.</SlideText>
      </>,
    },
    {
      icone: "/images/celular-passo2-icone.png",
      passo: "/images/celular-passo2.png",
      titulo: "Acesse XXXXXXXXXXXX",
      texto: <>
        <SlideText>Se estiver no site, clique em "Entidades" e depois em "Doação de cupons com CPF (automático)".</SlideText>
        <SlideText>Se estiver no aplicativo, clique em "Doação Cupom com CPF".</SlideText>
      </>,
    },
    {
      icone: "/images/celular-passo3-icone.png",
      passo: "/images/celular-passo3.png",
      titulo: "Acesse XXXXXXXXXXXX",
      texto: <>
        <SlideText>No campo "Período", selecione o prazo pelo qual deseja doar suas notas.</SlideText>
        <SlideText>Após esse prazo, caso queira continuar doando você precisará refazer esse passo-a-passo.</SlideText>
      </>,
    },
    {
      icone: "/images/celular-passo4-icone.png",
      passo: "/images/celular-passo4.png",
      titulo: "Acesse XXXXXXXXXXXX",
      texto: <>
        <SlideText>Procure a ASSOCIACAO METODISTA LIVRE AGENTE com nosso CNPJ 04.955.194/0001-30</SlideText>
        <SlideText>Haverá mais de uma opção, selecione aquela que aparece ativa e clique em confirmar doação automática.</SlideText>
      </>,
    },
    {
      icone: "/images/celular-passo5-icone.png",
      passo: "/images/celular-passo5.png",
      titulo: "Pronto!",
      texto: <>
        <SlideText>Pronto! Agora quando fizer suas compras, não se esqueça de pedir o CPF e seus créditos irão para a AGENTE de forma automática!</SlideText>
      </>,
    },
    {
      icone: "/images/celular-passo6-icone.png",
      passo: "/images/celular-passo6.png",
      titulo: "Compartilhe",
      texto: <>
        <SlideText>Compartilhe essa ideia com seus pais, irmãos, primos, amigos da facul, tios, vizinhos e vamos juntos ser agentes de transformação!</SlideText>
      </>,
    },
  ],
  // PC
  [
    {
      icone: "/images/celular-passo1-icone.png",
      passo: "/images/pc-passo1.png",
      titulo: "Acesse o site da receita",
      texto: <>
        <SlideText>Acesse/crie sua conta (clique no link) <Link>www.nfp.fazenda.sp.gov.br/login</Link></SlideText>
        <SlideText>O cadastro pode ser feito pelo celular se você possuir o aplicativo da Receita.</SlideText>
      </>,
    },
    {
      icone: "/images/celular-passo2-icone.png",
      passo: "/images/pc-passo1.png",
      titulo: "Acesse XXXXXXXXXXXX",
      texto: <>
        <SlideText>Se estiver no site, clique em "Entidades" e depois em "Doação de cupons com CPF (automático)".</SlideText>
        <SlideText>Se estiver no aplicativo, clique em "Doação Cupom com CPF".</SlideText>
      </>,
    },
    {
      icone: "/images/celular-passo3-icone.png",
      passo: "/images/pc-passo1.png",
      titulo: "Acesse XXXXXXXXXXXX",
      texto: <>
        <SlideText>No campo "Período", selecione o prazo pelo qual deseja doar suas notas.</SlideText>
        <SlideText>Após esse prazo, caso queira continuar doando você precisará refazer esse passo-a-passo.</SlideText>
      </>,
    },
    {
      icone: "/images/celular-passo4-icone.png",
      passo: "/images/pc-passo1.png",
      titulo: "Acesse XXXXXXXXXXXX",
      texto: <>
        <SlideText>Procure a ASSOCIACAO METODISTA LIVRE AGENTE com nosso CNPJ 04.955.194/0001-30</SlideText>
        <SlideText>Haverá mais de uma opção, selecione aquela que aparece ativa e clique em confirmar doação automática.</SlideText>
      </>,
    },
    {
      icone: "/images/celular-passo5-icone.png",
      passo: "/images/pc-passo1.png",
      titulo: "Pronto!",
      texto: <>
        <SlideText>Pronto! Agora quando fizer suas compras, não se esqueça de pedir o CPF e seus créditos irão para a AGENTE de forma automática!</SlideText>
      </>,
    },
    {
      icone: "/images/celular-passo6-icone.png",
      passo: "/images/pc-passo6.png",
      titulo: "Compartilhe",
      texto: <>
        <SlideText>Compartilhe essa ideia com seus pais, irmãos, primos, amigos da facul, tios, vizinhos e vamos juntos ser agentes de transformação!</SlideText>
      </>,
    },
  ],
]

const projetos = [
  {
    nome: "Agente",
    logo: "/images/00-Agente.jpg",
    descricao: "Animação com todos os nossos projetos",
    link: "https://youtu.be/avonElF7lnk",
  },
  {
    nome: "PAPO Jovem",
    logo: "/images/01-PAPO-Jovem.jpg",
    descricao: "Programa de Apoio ao Jovem",
    link: "https://youtu.be/8c1bP__mmk4",
  },
  {
    nome: "Espaço Girassol",
    logo: "/images/02-Espaco-Girassol.jpg",
    descricao: "Contra-turno para crianças de 6-12 anos",
    link: "https://youtu.be/cYOENq6R1_Y",
  },
  {
    nome: "MOVA",
    logo: "/images/03-MOVA.jpg",
    descricao: "Educação de jovens e adultos",
    link: "https://youtu.be/HEupPwGm8Pw",
  },
  {
    nome: "Acompanhamento Nutricional",
    logo: "/images/04-Acompanhamento-Nutricional.jpg",
    descricao: "Acompanhamento físico e nutricional (parceria com Pastoral da Criança)",
    link: "",
  },
  {
    nome: "Agente Joga",
    logo: "/images/06-Agente-Joga.jpg",
    descricao: "Aulas de futebol para crianças e adolescentes",
    link: "https://youtu.be/ClyW4t87uPQ",
  },
  {
    nome: "Voz D'Agente",
    logo: "/images/07-Voz-DAgente.jpg",
    descricao: "Aulas e apresentações musicais",
    link: "https://youtu.be/_8Zb7PjCgrI",
  },
  {
    nome: "Delinearte",
    logo: "/images/08-Delinearte.jpg",
    descricao: "Aulas de artesanato para mulheres",
    link: "https://youtu.be/8kWxfSUMUt4",
  },
]

const menuItems = [
  {
    text: "Como doar?",
    anchor: comoDoar,
  },
  {
    text: "Sobre a Agente",
    anchor: sobre,
  },
  {
    text: "FAQ",
    anchor: faq,
  },
]

const useStyles = makeStyles((theme) => {
  // Medidas
  const appBarHeight = theme.spacing(7)

  return ({
    flex: {
      display: "flex",
    },
    hide: {
      display: "none",
    },
    fillParent: {
      flexGrow: 1,
    },
    dim: {
      opacity: "30%",
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    responsiveContainer: {
      [theme.breakpoints.up('md')]: {
        display: "flex",
        flexDirection: "row",
      },
    },
    fullImg: {
      padding: theme.spacing(3),
      maxWidth: '100vw',
      maxHeight: '100vh',
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    appBar: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      backgroundColor: "rgba(255, 255, 255, 0.64)",
      height: appBarHeight,
      color: vermelho,
      [theme.breakpoints.up('md')]: {
        backgroundColor: branco,
      },
    },
    navButton: {
      "&.is-current p": {
        color: vermelho,
      }
    },
    appTitle: {
      fontSize: "1.3rem",
      flexGrow: 1,
      [theme.breakpoints.up('md')]: {
        fontSize: "1.5rem",
      },
    },
    introImgBox: {
      width: "100vw",
      height: "60vh",
      display: "flex",
      flexDirection: "column",
      backgroundImage: `url("/images/fundo.jpg")`,
      backgroundSize: "auto 100%",
      backgroundPosition: "left bottom",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#ccc",
      paddingTop: appBarHeight,
      [theme.breakpoints.up('md')]: {
        paddingTop: 0,
        marginTop: appBarHeight,
        width: "50vw",
        height: `calc(100vh - ${appBarHeight}px)`,
        backgroundImage: `url("/images/fundo-orig.jpg")`,
        backgroundPosition: "center bottom",
      },
    },
    callForAction: {
      fontFamily: montserrat,
      fontWeight: "800",
      fontSize: "1.2rem",
      color: branco,
      textTransform: "uppercase",
      marginTop: theme.spacing(4),
      padding: theme.spacing(1),
      maxWidth: "85%",
      backgroundColor: pretoTransparente,
      [theme.breakpoints.up('md')]: {
        fontSize: "2rem",
        margin: theme.spacing(3),
        maxWidth: "50%",
      },
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
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(4),
        marginTop: appBarHeight,
        width: "50vw",
        height: "inherit",
        justifyContent: "start",
        alignItems: "center",
      },
    },
    introTitle: {
      color: amarelo,
      textTransform: "uppercase",
      fontWeight: "bold",
      [theme.breakpoints.up('md')]: {
        fontSize: "2rem",
        lineHeight: "2",
      }
    },
    introBody: {
      color: branco,
      [theme.breakpoints.up('md')]: {
        fontSize: "2rem",
        lineHeight: "2",
      }
    },
    introLogo: {
      display: "none",
      [theme.breakpoints.up('md')]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    introLogoImg: {
      maxWidth: "50%",
      maxHeight: "50%",
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
    titulo: {
      fontFamily: cuprum,
      color: vermelho,
      fontSize: "1.5rem",
      fontWeight: "bold",
      textAlign: "center",
      [theme.breakpoints.up('md')]: {
        fontSize: "2rem",
      },
    },
    subtitulo: {
      fontFamily: cuprum,
      color: vermelho,
      fontSize: "1.2rem",
      fontWeight: "bold",
      textAlign: "center",
      [theme.breakpoints.up('md')]: {
        marginTop: theme.spacing(2),
        fontSize: "1.5rem",
      },
    },
    conteudo: {
      padding: theme.spacing(0, 4, 1),
    },
    tutorial: {
      marginTop: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    tutorialTabs: {
      [theme.breakpoints.up('md')]: {
        minWidth: "20vw",
      },
    },
    tutorialTab: {
      [theme.breakpoints.up('md')]: {
        height: "40vh",
        maxWidth: "none",
        padding: 0,
        marginBottom: theme.spacing(2),
      },
    },
    tabButton: {
      padding: 0,
      width: "100%",
      display: "flex",
      flexGrow: 1,
      "& span": {
        height: "100%",
        display: "flex",
        flexGrow: 1,
      }
    },
    tabContainer: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
    },
    tabDesktopContainer: {
      flexGrow: 1,
      flexWrap: "inherit",
    },
    tituloTutorialTab: {
      fontFamily: barlow,
      color: branco,
      fontSize: "1.5rem",
      backgroundColor: vermelho,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      width: "100%",
      textAlign: "center"
    },
    tabImageContainer: {
      width: "100%",
      height: "20vh",
      padding: theme.spacing(2),
      display: "flex",
      flexGrow: 1,
      justifyContent: "center",
      backgroundColor: bege,
    },
    tabImage: {
      maxWidth: "100%",
      maxHeight: "100%",
    },
    tutorialContainer: {
      padding: theme.spacing(2),
    },
    tituloTutorialContainer: {
      height: theme.spacing(6),
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
      [theme.breakpoints.up('md')]: {
        fontSize: "2rem",
        width: "3rem",
        marginRight: theme.spacing(1),
      },
    },
    tituloTutorialTexto: {
      fontSize: "1.1rem",
      backgroundColor: preto,
      flexGrow: 1,
      display: "inline-flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      [theme.breakpoints.up('md')]: {
        fontSize: "2rem",
        backgroundColor: amarelo,
        color: preto,
      },
    },
    tituloTutorialIcone: {
      height: "100%",
      position: "absolute",
      right: 0,
    },
    stepperContainer: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    slide: {
      padding: theme.spacing(0, 1),
    },
    slideDesktopContainer: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
    },
    slideDesktopImgContainer: {
      marginTop: theme.spacing(1),
      flexGrow: 1,
      backgroundColor: lilas,
    },
    slideDesktopImgBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50vh",
    },
    slideImgContainer: {
      height: "30vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: theme.spacing(1),
      [theme.breakpoints.up('md')]: {
        marginTop: theme.spacing(0),
        height: "100%",
      },
    },
    slideImgButton: {
      "& span": {
        height: "30vh",
      },
    },
    slideImgButtonDesktop: {
      width: "50%",
    },
    slideButton: {
      padding: 0,
      height: "100%",
    },
    slideImg: {
      display: 'block',
      overflow: 'hidden',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    slideTextContainer: {
      paddingTop: theme.spacing(1),
      textAlign: "center",
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(2),
        textAlign: "left",
        width: "60%",
      },
    },
    slideText: {
      [theme.breakpoints.up('md')]: {
        fontSize: "1.5rem",
      },
    },
    foto: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      width: "100%",
      [theme.breakpoints.up('md')]: {
        margin: theme.spacing(0, 1, 0, 0),
      },
    },
    highlight: {
      backgroundColor: amarelo,
      [theme.breakpoints.up('md')]: {
        backgroundColor: laranja,
      }
    },
    separatorContainer: {
      display: "flex",
      justifyContent: "center",
      color: vermelho,
      [theme.breakpoints.up('md')]: {
        color: "transparent",
      },
    },
    separator: {
      writingMode: "vertical-rl",
      fontSize: "1.2rem",
    },
    projetosContainer: {
      display: "flex",
      flexDirection: "row",
      overflow: "scroll",
      [theme.breakpoints.up('md')]: {
        flexWrap: "wrap",
        overflow: "auto",
        justifyContent: "center",
      },
    },
    projetoContainer: {
      minWidth: 200,
      maxWidth: 200,
      [theme.breakpoints.up('md')]: {
        display: "flex",
        alignItems: "center",
        maxWidth: 400,
        margin: theme.spacing(2),
      },
    },
    logoProjeto: {
      [theme.breakpoints.up('md')]: {
        width: "40%",
      },
    },
    descricaoProjeto: {
      textAlign: "center",
      color: cinza,
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(1, 0, 1, 2),
        fontSize: "1.2rem",
        textAlign: "left",
        width: "50%",
      },
    },
    invertido: {
      backgroundColor: vermelho,
      color: branco,
    },
    iconsContainer: {
      display: "flex",
      flexDirection: "column",
      marginTop: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        flexDirection: "row",
        justifyContent: "center",
      },
    },
    bigIcon: {
      display: "block",
      fontSize: "4rem",
      color: branco,
      padding: theme.spacing(2),
    },
    fullHeight: {
      height: "100vh",
      paddingTop: 0,
    },
    faq: {
      backgroundColor: amarelo,
      paddingTop: theme.spacing(8),
      paddingBottom: "30vh",
      minHeight: "100vh",
      [theme.breakpoints.up('md')]: {
        minHeight: "auto",
        paddingBottom: theme.spacing(4),
      },
    },
    faqEntry: {
      backgroundColor: amareloClaro,
    },
    textoPreto: {
      color: preto,
    },
    pergunta: {
      fontWeight: "bold",
    },
    resposta: {
      marginBottom: theme.spacing(2),
    },
    espacoExtra: {
      paddingBottom: theme.spacing(2),
    },
    menu: {
      minWidth: 200,
      backgroundColor: lilas,
      height: "100%",
    },
    tituloMenu: {
      color: preto,
      fontFamily: barlow,
      textTransform: "uppercase",
      [theme.breakpoints.up('md')]: {
        fontSize: "1.2rem",
      },
    },
    menuButton: {
      justifyContent: "center",
    },
    videoContainer: {
      padding: theme.spacing(3),
    },
    quemSomosContainer: {
      [theme.breakpoints.up('md')]: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: amarelo,
        padding: theme.spacing(3),
        "& p": {
          padding: theme.spacing(1),
          fontSize: "1.2rem",
        }
      }
    },
    accordionDetails: {
      display: "block",
    },
  })
});

const Separator = (props) => {
  const { invertido } = props
  const classes = useStyles()
  return (
    <Box className={clsx(classes.separatorContainer, invertido && classes.invertido)}>
      <Typography className={classes.separator}>--------</Typography>
    </Box>
  )
}

const TutorialTabButton = (props) => {
  const { label, image, selected, onClick } = props
  const classes = useStyles()
  const isMobile = !useMediaQuery(theme.breakpoints.up('md'))

  if (isMobile) return label
  return (
    <Button className={classes.tabButton} onClick={onClick} >
      <div className={clsx(classes.tabContainer, !selected && classes.dim)}>
        <Typography className={classes.tituloTutorialTab}>{label}</Typography>
        <Box className={classes.tabImageContainer}>
          <img className={classes.tabImage} src={image} alt="" />
        </Box>
      </div>
    </Button>
  )
}

// markup
const IndexPage = () => {
  const classes = useStyles()
  const [currentTab, setCurrentTab] = useState(0)
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0)
  const [showMenu, setShowMenu] = useState(false)
  const [showFullImg, setShowFullImg] = useState(false)

  const handleTabChange = (event, newTab) => {
    setCurrentTab(newTab)
    setCurrentSlideIdx(0)
  }

  const handleNext = () => {
    setCurrentSlideIdx((prevSlideIdx) => prevSlideIdx + 1)
  }

  const handleBack = () => {
    setCurrentSlideIdx((prevSlideIdx) => prevSlideIdx - 1)
  }

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu)
  }

  const handleShowFullImg = () => {
    setShowFullImg(true)
  }

  const handleHideFullImg = () => {
    setShowFullImg(false)
  }

  const currentSlideDeck = slideDecks[currentTab]
  const currentSlide = currentSlideDeck[currentSlideIdx]
  const maxSteps = currentSlideDeck.length

  const isMobile = !useMediaQuery(theme.breakpoints.up('md'));

  const tutorialMobile = (
    <>
      <Tabs
        className={classes.tutorialTabs}
        value={currentTab}
        orientation={isMobile ? "horizontal" : "vertical"}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleTabChange}
        aria-label="tutorial de doação"
      >
        <Tab className={classes.tutorialTab} label="Celular" />
        <Tab className={classes.tutorialTab} label="Computador" />
      </Tabs>
      <Box className={classes.tutorialContainer}>
        <Box className={classes.stepperContainer}>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="dots"
            activeStep={currentSlideIdx}
          />
        </Box>
        <Box className={classes.tituloTutorialContainer}>
          <Typography className={classes.tituloTutorial}>
            <span className={classes.tituloTutorialNumero}>{currentSlideIdx + 1}</span>
            <span className={classes.tituloTutorialTexto}>{currentSlide.titulo}</span>
          </Typography>
          <img src={currentSlide.icone} className={classes.tituloTutorialIcone} alt="" />
        </Box>
        <Box>
          <Box className={classes.slideImgContainer}>
            <Button className={classes.slideButton} size="small" onClick={handleBack} disabled={currentSlideIdx === 0}>
              <KeyboardArrowLeft />
            </Button>
            <Button className={classes.slideImgButton} onClick={handleShowFullImg}>
              <img className={classes.slideImg} src={currentSlideDeck[currentSlideIdx].passo} alt={currentSlideDeck[currentSlideIdx].titulo} />
            </Button>
            <Button className={classes.slideButton} size="small" onClick={handleNext} disabled={currentSlideIdx === maxSteps - 1}>
              <KeyboardArrowRight />
            </Button>
          </Box>
          <Backdrop className={classes.backdrop} open={showFullImg} onClick={handleHideFullImg}>
            <img className={classes.fullImg} src={currentSlideDeck[currentSlideIdx].passo} alt={currentSlideDeck[currentSlideIdx].titulo} />
          </Backdrop>
          <Box className={classes.slideTextContainer}>
            {currentSlide.texto}
          </Box>
        </Box>
      </Box >
    </>
  )

  const tutorialDesktop = (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Grid container direction="column" spacing={2} className={classes.tabDesktopContainer}>
            <Grid item xs={12} className={classes.flex}>
              <TutorialTabButton
                label="Celular"
                image="/images/celular.png"
                selected={currentTab === 0}
                onClick={(event) => handleTabChange(event, 0)}
              />
            </Grid>
            <Grid item xs={12} className={classes.flex}>
              <TutorialTabButton
                label="Computador"
                image="/images/pc.png"
                selected={currentTab === 1}
                onClick={(event) => handleTabChange(event, 1)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={9} className={classes.flex}>
          <Box className={classes.slideDesktopContainer}>
            <Typography className={classes.tituloTutorial}>
              <span className={classes.tituloTutorialNumero}>{currentSlideIdx + 1}</span>
              <span className={classes.tituloTutorialTexto}>{currentSlide.titulo}</span>
            </Typography>
            <Box className={classes.slideDesktopImgContainer}>
              <Box className={classes.slideImgContainer}>
                <Button className={classes.slideButton} size="small" onClick={handleBack} disabled={currentSlideIdx === 0}>
                  <KeyboardArrowLeft />
                </Button>
                <Button onClick={handleShowFullImg} className={classes.slideImgButtonDesktop}>
                  <Box className={classes.slideDesktopImgBox}>
                    <img className={classes.slideImg} src={currentSlideDeck[currentSlideIdx].passo} alt={currentSlideDeck[currentSlideIdx].titulo} />
                  </Box>
                </Button>
                <Box className={classes.slideTextContainer}>
                  {currentSlide.texto}
                </Box>
                <Button className={classes.slideButton} size="small" onClick={handleNext} disabled={currentSlideIdx === maxSteps - 1}>
                  <KeyboardArrowRight />
                </Button>
              </Box>
              <Backdrop className={classes.backdrop} open={showFullImg} onClick={handleHideFullImg}>
                <img className={classes.fullImg} src={currentSlideDeck[currentSlideIdx].passo} alt={currentSlideDeck[currentSlideIdx].titulo} />
              </Backdrop>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={9} className={classes.flex}>
          <Box className={classes.stepperContainer}>
            <MobileStepper
              steps={maxSteps}
              position="static"
              variant="dots"
              activeStep={currentSlideIdx}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  )

  const video = (
    <Box className={classes.videoContainer}>
      <div
        className="video"
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0
        }}
      >
        <iframe title="Doação da Nota Fiscal Paulista" style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }} src="https://www.youtube.com/embed/UjjUg1gHlJw" frameBorder="0"></iframe>
      </div>
    </Box>
  )

  return (
    <main>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Head>
          <title>Agente - Campanha NFP</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Cuprum:wght@700&family=Montserrat:wght@100;400;700;800&display=swap" rel="stylesheet" />
        </Head>
        <AppBar className={classes.appBar} position={isMobile ? "absolute" : "fixed"}>
          <Typography variant="h5" className={classes.appTitle}>
            <span className={clsx(classes.titleText, classes.titleMain)}>
              Agente
          </span>
            <span className={clsx(classes.titleText, classes.titleSecondary)}>
              Valorizando Gente
          </span>
          </Typography>
          <IconButton className={classes.sectionMobile} onClick={toggleMenu} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.sectionDesktop}>
            <Scrollspy items={[intro, comoDoar, sobre, faq]} currentClassName="is-current" offset={-theme.spacing(7) * 2}>
              <Button component="a" className={classes.hide}>
                <Typography className={classes.tituloMenu}>Introdução</Typography>
              </Button>
              {menuItems.map((item, index) => (
                <Button component="a" key={`mobile-${item.text}`} href={`#${item.anchor}`} className={classes.navButton}>
                  <Typography className={classes.tituloMenu}>{item.text}</Typography>
                </Button>
              ))}
            </Scrollspy>
          </div>

        </AppBar>
        <Drawer className={classes.sectionMobile} anchor="right" open={showMenu} onClose={toggleMenu}>
          <div className={classes.menu}>
            <List>
              {menuItems.map((item, index) => (
                <ListItem button component="a" key={`mobile-${item.text}`} onClick={toggleMenu} className={classes.menuButton} href={`#${item.anchor}`}>
                  <Typography className={classes.tituloMenu}>{item.text}</Typography>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
        <section id={intro} className={classes.responsiveContainer}>
          <Box className={classes.introImgBox}>
            <Typography className={classes.callForAction}>Transforme seus gastos em impacto social</Typography>
          </Box>
          <Box className={classes.introTextBox}>
            <div>
              <Typography className={classes.introTitle}>Doe suas notas fiscais.</Typography>
              <Typography className={classes.introBody}>É simples.</Typography>
              <Typography className={classes.introBody}>É rápido.</Typography>
              <Typography className={classes.introBody}>Não custa nada para você.</Typography>
              <Typography className={classes.introBody}>E ajuda muita gente!</Typography>
            </div>
            <Box className={classes.introLogo}>
              <img src="/images/logo-inv.png" alt="Logo da Agente" className={classes.introLogoImg} />
            </Box>
          </Box>
        </section>
        <section id={comoDoar}>
          <Box className={classes.conteudo}>
            <Separator />
            <Typography className={classes.titulo}>Como posso fazer a doação?</Typography>
            <Box className={classes.tutorial}>
              {isMobile ? tutorialMobile : tutorialDesktop}
            </Box>
          </Box>
        </section>
        <section id={sobre}>
          <Box className={classes.conteudo}>
            <Separator />
            <Typography className={classes.titulo}>Quem é a AGENTE?</Typography>
            <Box className={classes.responsiveContainer}>
              <img src="/images/foto-agente.png" alt="Foto da fachada da Agente" className={classes.foto} />
              <Box className={classes.quemSomosContainer}>
                <Typography>
                  Somos uma ONG que atua, <span className={classes.highlight}>desde <b>1993</b>,</span> em <span className={classes.highlight}><b>São Remo</b>,</span> onde moram cerca de 8 mil pessoas e fica ao lado da USP.
                </Typography>
                <Typography>
                  Desenvolvemos <span className={classes.highlight}><b>7 programas</b></span> nas áreas de educação, esporte, música, artesanato e saúde e atendemos <span className={classes.highlight}><b>300 pessoas</b></span> por mês.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={classes.conteudo}>
            <Typography className={classes.subtitulo}>Clique nos logos e veja o vídeo de nossos projetos</Typography>
            <Box className={classes.projetosContainer}>
              {projetos.map((projeto, index) => (
                <div key={projeto.nome} className={classes.slide}>
                  <Box className={classes.projetoContainer}>
                    <a className={classes.logoProjeto} href={projeto.link}><img className={classes.slideImg} src={projeto.logo} alt={projeto.nome} /></a>
                    <Typography className={classes.descricaoProjeto}>{projeto.descricao}</Typography>
                  </Box>
                </div>
              ))}
            </Box>
          </Box>
        </section>
        <section id={faq}>
          <Box className={clsx(classes.conteudo, classes.faq, classes.textoPreto)}>
            <Typography className={clsx(classes.titulo, classes.textoPreto, classes.espacoExtra)}>Dúvidas mais frequentes</Typography>

            <Accordion className={classes.faqEntry}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="pergunta1-content"
                id="pergunta1-header"
              >
                <Typography className={classes.pergunta}>1. O que é o programa da Nota Fiscal Paulista?</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <Typography className={classes.resposta}>R: É um programa de estimulo à cidadania fiscal no Estado de São Paulo, que tem por objetivo estimular os consumidores a exigirem a entrega do documento fiscal na hora da compra. Além disso, visa gerar créditos aos consumidores, aos cidadãos e às empresas do Estado.</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={classes.faqEntry}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="pergunta1-content"
                id="pergunta1-header"
              >
                <Typography className={classes.pergunta}>2. Fiz a doação automática, mas quero parar. Posso cancelar?</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <Typography className={classes.resposta}>R: Sim, você pode cancelar a doação automática de suas notas fiscais a qualquer momento. Basta acessar sua conta e parar a doação.</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={classes.faqEntry}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="pergunta1-content"
                id="pergunta1-header"
              >
                <Typography className={classes.pergunta}>3. Não tenho conta. Como posso criar uma?</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <Typography className={classes.resposta}>R: Acesse o site da <Link href="https://www.nfp.fazenda.sp.gov.br/login.aspx">secretaria da fazenda</Link> e clicar em "Novos cadastros: pessoa física".</Typography>
                <Typography className={classes.resposta}>Se estiver no celular, você também pode baixar o aplicativo oficial da Nota Fiscal Paulista na Play Store (Android) ou App Store (iPhone) e clicar em "Registre sua conta"</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={classes.faqEntry}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="pergunta1-content"
                id="pergunta1-header"
              >
                <Typography className={classes.pergunta}>4. Criei minha conta no passado, mas nunca usei</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <Typography className={classes.resposta}>R: Se esse for o seu caso, você precisará realizar uma transferência de qualquer valor para sua conta. Se você não tiver nenhum saldo para transferir, basta pedir para inserir o CPF nas compras para gerar créditos.</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={classes.faqEntry}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="pergunta1-content"
                id="pergunta1-header"
              >
                <Typography className={classes.pergunta}>5. Preciso gastar muito para gerar mais créditos?</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <Typography className={classes.resposta}>R: Não, qualquer nota fiscal doada pode gerar até R$ 265,30 em créditos para a AGENTE! Isso significa que um cafezinho na padaria de R$ 5,00 pode se transformar numa doação de R$ 265,30 para a AGENTE.
          Assim, o importante é sempre pedir o CPF na nota independente do valor da compra</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={classes.faqEntry}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="pergunta1-content"
                id="pergunta1-header"
              >
                <Typography className={classes.pergunta}>6. Como é calculado o valor da doação?</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <Typography className={classes.resposta}>R: O valor da doação está relacionado ao imposto de ICMS pago pelo estabelecimento no mês que você efetuou a sua compra. Você pode conferir as regras de cálculo no site da receita da fazenda. Clique aqui.</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={classes.faqEntry}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="pergunta1-content"
                id="pergunta1-header"
              >
                <Typography className={classes.pergunta}>7. A receita federal utilizará as notas fiscais doadas para me monitorar?</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <Typography className={classes.resposta}>R: Não. A receita federal possui seu próprio banco de dados para fiscalização e não precisa das informações do programa da Nota Fiscal Paulista</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={classes.faqEntry}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="pergunta1-content"
                id="pergunta1-header"
              >
                <Typography className={classes.pergunta}>8. Como o dinheiro doado é utilizado pela AGENTE?</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <Typography className={classes.resposta}>R: Todo dinheiro arrecado é utilizado para desenvolver os projetos da AGENTE. Cerca de 80% dos recursos vão para a equipe (educadores, cozinha, limpeza, administrativo e coordenadores) e os 20% restantes são despesas gerais (ex. materiais pedagógicos, alimentação, produtos de limpeza, escritório de contabilidade, contas de água e luz etc)</Typography>
                <Typography className={classes.resposta}>Desde 2012, a AGENTE apresenta as demonstrações financeiras com os resultados do ano. Você pode conferi-las no nosso site</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={classes.faqEntry}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="pergunta1-content"
                id="pergunta1-header"
              >
                <Typography className={classes.pergunta}>9. Ainda ficou alguma dúvida?</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <Typography className={classes.resposta}>Escreva para <a href="mailto:comunicacao@agente.org.br">comunicacao@agente.org.br</a> e teremos o maior prazer em falar com você!</Typography>
              </AccordionDetails>
            </Accordion>

          </Box>
        </section>
        <Box className={clsx(classes.conteudo, classes.invertido, isMobile && classes.fullHeight)}>
          <Separator invertido={true} />
          <Typography className={clsx(classes.titulo, classes.invertido)}>Quero saber mais!</Typography>
          <Box className={classes.iconsContainer}>
            <IconButton aria-label="Instagram" className={classes.bigIcon}>
              <InstagramIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="Facebook" className={classes.bigIcon}>
              <FacebookIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="Site" className={classes.bigIcon}>
              <LanguageIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="Email" className={classes.bigIcon}>
              <MailOutlineIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Box>
      </ThemeProvider>
    </main >
  )
}

export default IndexPage
