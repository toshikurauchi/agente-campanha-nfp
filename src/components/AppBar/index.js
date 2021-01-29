import React, { useState } from "react"
import styled, { css } from 'styled-components'
import Scrollspy from 'react-scrollspy'
import { AppBar as MuiAppBar, Button, Drawer, IconButton, List, ListItem, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Responsive from '../Responsive'

const AppBar = styled(MuiAppBar)`
  &&.agente-app-bar {
    display: "flex";
    flex-direction: "row";
    align-items: "center";
    padding-left: theme.spacing(1);
    background-color: "rgba(255, 255, 255, 0.64)";
    height: ${props => props.theme.appBarHeight};
    color: ${props => props.theme.vermelho};
    position: "absolute";
    @media screen and (min-width: 960px) {
      background-color: ${props => props.theme.branco};
      position: "fixed";
    };
  }
`

const AppTitle = styled(Typography)`
  font-size: "1.3rem";
  flex-grow: 1;
  @media screen and (min-width: 960px) {
    fontSize: "1.5rem";
  };
`

const TitleText = styled.span`
  font-family: 'Cuprum', sans-serif;
  padding: ${props => props.theme.spacing(0.2, 0.5)};
  text-transform: "uppercase";

  ${props => props.primary ? css`
    backgroundColor: ${props => props.theme.vermelho};
    color: ${props => props.theme.branco};
  ` : css`
    color: ${props => props.theme.vermelho};
  `}
`

const MenuTitleText = styled(Typography)`
  color: ${props => props.theme.preto};
  font-family: 'Barlow Condensed', sans-serif;
  text-transform: "uppercase";
  @media screen and (min-width: 960px) {
    font-size: "1.2rem";
  }
`

const HiddenButton = styled(Button)`
  display: none;
`

const NavButton = styled(Button)`
  &.is-current p: {
    color: ${props => props.theme.vermelho};
  }
`

const Menu = styled.div`
  min-width: 200;
  background-color: ${props => props.theme.lilas};
  height: "100%";
`

const MenuButton = styled(ListItem)`
  justify-content: "center";
`

const menuItems = [
  {
    text: "Como doar?",
    anchor: "como-doar",
  },
  {
    text: "Sobre a Agente",
    anchor: "sobre",
  },
  {
    text: "FAQ",
    anchor: "faq",
  },
]

export default function AgenteAppBar(props) {
  const { theme } = props
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu)
  }

  return (
    <>
      <AppBar theme={theme} className="agente-app-bar">
        <AppTitle variant="h5">
          <TitleText primary>
            Agente
          </TitleText>
          <TitleText>
            Valorizando Gente
          </TitleText>
        </AppTitle>
        <Responsive mobile>
          <IconButton onClick={toggleMenu} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Responsive>
        <Responsive desktop>
          <Scrollspy items={["intro", "como-doar", "sobre", "faq"]} currentClassName="is-current" offset={-theme.spacing(7) * 2}>
            <HiddenButton component="a">
              <MenuTitleText>Introdução</MenuTitleText>
            </HiddenButton>
            {menuItems.map(item => (
              <NavButton component="a" key={`mobile-${item.text}`} href={`#${item.anchor}`}>
                <MenuTitleText>{item.text}</MenuTitleText>
              </NavButton>
            ))}
          </Scrollspy>
        </Responsive>
      </AppBar>
      <Responsive mobile>
        <Drawer anchor="right" open={showMenu} onClose={toggleMenu}>
          <Menu>
            <List>
              {menuItems.map(item => (
                <MenuButton button component="a" key={`mobile-${item.text}`} onClick={toggleMenu} href={`#${item.anchor}`}>
                  <MenuTitleText>{item.text}</MenuTitleText>
                </MenuButton>
              ))}
            </List>
          </Menu>
        </Drawer>
      </Responsive>
    </>
  )
}
