import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SectionWork from '../components/work';
import SectionAbout from '../components/about';
import SectionHireMe from '../components/associate';
import SectionContact from '../components/contact';

const HomeSection = styled.section`
  min-height: 100%;
  padding: 1rem;

  @media (min-width: 480px) {
    padding: 2rem;
  }
`;

const SectionIntro = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 3rem;

  @media (min-width: 786px) {
    padding-top: 5rem;
  }

  & p {
    color: #3d4852;
    font-weight: 300;
    font-size: 1.2rem;
    max-width: 30em;
    @media (min-width: 576px) {
      font-size: 1.6rem;
    }
    @media (min-width: 786px) {
      max-width: 32em;
    }
  }

  .subtitle {
    margin-top: 3em;
    font-size: 1rem;
    @media (min-width: 576px) {
      font-size: 1.4rem;
    }
  }

  p + p {
    margin-top: 0.5em;

    @media (min-width: 576px) {
      margin-top: 0.25em;
    }
  }

  & p > span {
    color: rgb(44, 44, 44);
    font-weight: 400;
  }
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 576px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const LinkButton = styled.a`
  cursor: pointer;

  display: block;
  width: 230px;
  height: 50px;
  font-size: 1.1rem;
  margin: 0;
  margin-top: 1rem;
  padding: 13px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background-color: #f43059;

  border-radius: 4px;
  white-space: nowrap;
  word-break: keep-all;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 2px;
  transition: all 0.2s ease-in-out 0s;

  &:link {
    color: #fff;
  }

  &:hover {
    opacity: 1;
    background-color: #e91e63;
    box-shadow: 0px 3px 6px #b0b0b0;
  }
`;

export default () => (
  <Layout>
    <main>
      <HomeSection>
        <SectionIntro>
          <H2>Hi, there! I’m a freelance front-end developer.</H2>
          <p>
            I am here to help you and your business turn great ideas into
            amazing products.
          </p>
          <p>
            I help people and organization get the positive attention they
            deserve by creating elegant, functional and modern websites.
          </p>
          <p className="subtitle">Want to chat about your project?</p>
          <LinkButton href="mailto:dev.adityarao@gmail.com">
            Get in Touch
          </LinkButton>
        </SectionIntro>
        <SectionAbout />
        <SectionWork />
        <SectionHireMe />
        <SectionContact />
      </HomeSection>
    </main>
  </Layout>
);
