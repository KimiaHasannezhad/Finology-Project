import React, { useState } from 'react'
import { FaBars, FaSearch } from 'react-icons/fa'
import { MenuLinks } from './ResponsiveNav'
import styled from '@emotion/styled'
import { NavLink as Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export const Nav = styled.nav`
  min-height: 400px
  margin-bottom: 100px;
  height: 40px;
  justify-content: space-between;
  padding-right: 70px;
  font-size: 16px;
  @media screen and (max-width: 768px) {
    background-color: #f4ba00;
    position: fixed;
    width: 100%;
  }

   & > a{
     z-index:22;
     position:absolute;
     margin-top:30px;
   }`


export const NavLink = styled(Link)`
color: #fc7068;
  text-decoration: none;
  padding-top: 50px;
  padding-bottom:17px;
  margin-right:50px;
  margin-bottom:70px;
  height:100%;
  font-size:16px;
  cursor: pointer;
   &.active {
    color:#FF1E1E;
    padding-bottom:17px;
  
  }
}`

export const NavMenu = styled.div`
  top: 0;
  position: absolute;
  display: flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items: center;
  background: #252584;
  width: 100% ;
  & > a {
color: white;
text-decoration: none;
padding-top: 50px;
padding-bottom:17px;
margin-right:50px;
margin-bottom:70px;
height:100%;
font-size:16px;
font-weight: 600;
cursor: pointer;
   &.active {
    color:#2aabe2;
    padding-bottom:17px;

  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export default function Header() {
  const [DropdownMenu, setDropdownMenu] = useState(false)
  const [showResponsivMenu, setShowResponsivMenu] = useState(false)
  const OpendropDownMenu = () => {
    if (!DropdownMenu) {
      setDropdownMenu(true)
    } else {
      setDropdownMenu(false)
    }
  }

  return (
    <div className="Header-container">
      <button className="burger-menu" onClick={() => OpendropDownMenu()}>
        <FaBars />
      </button>
      {DropdownMenu
        ? <MenuLinks /> :
        <NavMenu>
          <a href="/home">
            <img id="menu-logo" src={logo}></img>
          </a>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/servises">Services</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/careers">Careers</NavLink>
        </NavMenu>}


      <div className="home-hero">
        <div className="header-text">
          <h1>
            Make development easy with us.
          </h1>
          <h6>
            doing development can never be easy , and it takes time and resources.
            We at EasyWork has the solution.
          </h6>
        </div>
        <div className="header-img">
          <img src={require('../../assets/img/shapes/banners/banner.png').default}></img>
        </div>
      </div>

    </div>
  )
}