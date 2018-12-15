/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import styled from 'styled-components';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { Home } from 'styled-icons/fa-solid/Home';
import { Person } from 'styled-icons/material/Person';
import { Edit } from 'styled-icons/fa-regular/Edit';
import { LocationOn } from 'styled-icons/material/LocationOn';
import ListLink from './ListLink';
import HamburgerMenu from './HamburgerMenu';
import SideBar from './SideBar';

const HomeIcon = styled(Home)`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-bottom: 1px;
  line-height: 60px;
  color: #888;
`;

const PersonIcon = styled(Person)`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-bottom: 3px;
  line-height: 60px;
  color: #888;
`;

const EditIcon = styled(Edit)`
  width: 20px;
  height: 18px;
  margin-right: 5px;
  margin-bottom: 3px;
  line-height: 60px;
  color: #888;
`;

const LocationOnIcon = styled(LocationOn)`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-bottom: 5px;
  line-height: 60px;
  color: #888;
`;

const Nav = styled.nav`
  margin: 0;
  padding: 0;
  height: 60px;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 768px) {
    display: block;
    width: 60%;
  }

  @media (min-width: 1400px) {
    width: 40%;
  }
`;

const NavLinks = styled.ul`
  display: none;

  @media (min-width: 768px) {
    padding: 0;
    margin: 0;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      margin: 0;
      padding: 0;
      padding-top: 5px;
      height: 60px;
      line-height: 60px;
      list-style: none;
    }

    li a {
      cursor: pointer;
      margin: 0;
      display: inline-block;
      position: relative;
      padding-bottom: 2px;
      letter-spacing: 1px;

      height: 60px;
      line-height: 60px;
      transition: all 0.2s linear;

      &:hover {
        ${HomeIcon}, ${PersonIcon}, ${EditIcon}, ${LocationOn} {
          color: #3b92de;
        }
      }
    }

    & a::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      width: 0;
      transition: width 0s ease, background 0.5s ease;
    }

    & a:hover::before {
      width: 100%;
      background: #2c9cdb;
      transition: width 0.5s ease;
    }

    & a::after {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      bottom: 0;
      height: 2px;
      width: 0;
      background: #2c9cdb;
      transition: width 0.5s ease;
    }

    & a:hover::after {
      width: 100%;
      background: transparent;
      transition: all 0s ease;
    }
  }
`;

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.targetElement = null;
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.targetElement = document.querySelector('body');
      if (this.state.isOpen === true) {
        document.body.style.overflow = 'hidden';
      } else if (this.state.isOpen === false) {
        document.body.style.overflow = 'visible';
      }
    }
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  openMenu() {
    this.setState({
      isOpen: true,
    });
    disableBodyScroll(this.targetElement);
  }

  closeMenu() {
    this.setState({
      isOpen: false,
    });
    enableBodyScroll(this.targetElement);
  }

  render() {
    const sidebarOn = this.state.isOpen;

    if (!sidebarOn) {
      return (
        <Nav>
          <NavLinks>
            <ListLink to="/">
              <HomeIcon />
              Home
            </ListLink>
            <ListLink to="#about">
              <PersonIcon />
              About Me
            </ListLink>
            <ListLink to="/blog/">
              <EditIcon />
              Blog
            </ListLink>
            <ListLink to="#contact">
              <LocationOnIcon />
              Contact
            </ListLink>
          </NavLinks>
          <HamburgerMenu click={this.openMenu} />
        </Nav>
      );
    }
    return <SideBar click={this.closeMenu} />;
  }
}
