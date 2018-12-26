import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  height: 100px;
  width: 100%;
  margin-top: -100px;
  background-color: #fafafa;
  border: 1px solid #eeeeee;

  & small {
    font-size: 80%;
    display: block;
    margin: auto;
    margin-top: 40px;
    text-align: center;
    color: #000;
  }
`;

export default () => (
  <Footer>
    <small>&copy;2018 All rights reserved - Designed and coded by Aditya 👨🏽‍💻</small>
  </Footer>
);
