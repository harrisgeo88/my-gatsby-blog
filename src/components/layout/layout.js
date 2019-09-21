import React, { Fragment } from "react"
import { Body, Icon } from "./layout.styles"
import { Navbar, NavItem } from "swag-components"

export const Layout = ({
  children,
  isLandingPage = true,
  blog = "",
  home = "",
  brand = "",
  dark = false,
  moon = "",
  sun = "",
  toggleDarkMode = null,
}) => {
  const goto = (url = "") => {
    document.location.href = url
  }

  return (
    <Body dark={dark}>
      <Navbar onTitleClick={() => goto("/")} title={brand} dark={dark}>
        {isLandingPage && (
          <Fragment>
            <NavItem onClick={() => goto("#home")}>{home}</NavItem>
            <NavItem onClick={() => goto("#blog")}>{blog}</NavItem>
          </Fragment>
        )}
        <NavItem onClick={toggleDarkMode}>
          <Icon src={dark ? sun : moon} width={18} height={18} display="flex" />
        </NavItem>
      </Navbar>
      {children}
    </Body>
  )
}
