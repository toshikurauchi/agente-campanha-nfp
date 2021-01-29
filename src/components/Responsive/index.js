import React from "react"
import styled from 'styled-components'

const MobileDiv = styled.div`
  display: 'flex';
  @media screen and (min-width: 960px) {
    display: 'none';
  }
`

const DesktopDiv = styled.div`
  display: 'none';
  @media screen and (min-width: 960px) {
    display: 'flex';
  }
`

export default function Responsive(props) {
  const {mobile, desktop, ...otherProps} = props

  if (mobile || !desktop) return <MobileDiv {...otherProps} />
  return <DesktopDiv {...otherProps} />
}
