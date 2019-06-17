import React from "react"
import { Body, Image } from "./"
import { Navbar, NavItem } from "swag-components"

export const Img = props => (
  <div>
    <Image {...props} />
  </div>
)

export const Layout = ({ children, isLandingPage = true }) => {
  const goto = (url = "") => {
    document.location.href = url
  }

  return (
    <Body>
      <Navbar onClick={() => goto("/")} title="HG">
        <NavItem onClick={() => goto("#")}>Home</NavItem>
        <NavItem onClick={() => goto("#blog")}>Blog</NavItem>
      </Navbar>
      {children}
    </Body>
  )
}
