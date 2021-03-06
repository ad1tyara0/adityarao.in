/* eslint-disable react/no-array-index-key */
/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { Calendar } from '@styled-icons/octicons/Calendar';
import Layout from '../components/layout';
import SEO from '../components/utils/seo';
import '../../static/styles/post.css';

const Wrapper = styled.main`
  min-height: 100%;
  background-color: #fff;
  background-image: url('https://res.cloudinary.com/adityar/image/upload/v1579750956/adityarao/website/background/so-white.png');
`;

const Divider = styled.div`
  height: 2px;
  width: 100%;
  max-width: 968px;
  margin: auto;
  margin-top: 4rem;
  display: block;
  background: #f5f5f5;
`;

const List = styled.ul`
  display: flex;
  flex-flow: column wrap;
  list-style: none;
  padding: 3em 1em;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  font-size: 1.1rem;

  @media (min-width: 576px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1000px) {
    flex-flow: row wrap;
  }
`;

const ListItem = styled.li`
  min-width: 270px;
  text-align: center;
  margin-top: 2.5rem;

  &.first {
    margin-top: 0;
  }
  & a {
    border-bottom: 1px solid #3740ff;
    padding: 2px 2px 1px;
    color: #3740ff;
    transition: all 150ms linear 0s;
    text-decoration: none;
  }
  & a:focus,
  & a:active,
  & a:hover {
    background-color: #3740ff;
    color: rgb(255, 255, 255);
    outline: 0px;
    text-decoration: none;
  }

  @media (min-width: 1000px) {
    width: 50%;
    margin-top: 0;

    &.first {
      text-align: left;
    }

    &.second {
      text-align: right;
    }
  }
`;

const Date = styled.span`
  display: inline-block;
  font-size: 1.1rem;
  margin-top: 2rem;

  @media (min-width: 576px) {
    font-size: 1.3rem;
  }
`;

const TagSection = styled.div`
  width: 100%;
  max-width: 732px;
  margin: 0 auto;
  padding: 1rem;
  height: 48px;
  line-height: 40px;
`;

const PostTagLink = styled(Link)`
  cursor: pointer;
  display: inline-block;
  font-size: 1.2rem;
  line-height: 1.4;
  font-variant: small-caps;
  padding: 1px 3px 1px;
  color: #38a169;
  transition: all 150ms linear 0s;
  text-decoration: none;

  background-color: #fff;
  border: 1px solid #38a169;
  color: #38a169;
  border-radius: 0.25rem;

  &:focus,
  &:active,
  &:hover {
    background-color: #c6f6d5;
    color: #38a169;
    outline: 0px;
    text-decoration: none;
    border-radius: 0.25rem;
  }
  @media (min-width: 576px) {
    font-size: 1.25rem;
  }
`;

const PostTags = styled(Link)`
  display: inline-block;
  margin-left: 0.5rem;
  font-size: 1rem;
  white-space: nowrap;
  word-break: keep-all;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1.1;
  position: relative;
  text-align: center;
  color: rgb(0, 105, 237);
  border: 1px solid #e3f2fd;
  border-radius: 0.25rem;
  padding: 2px 4px;
  transition: all 150ms linear 0s;

  &:focus,
  &:active,
  &:hover {
    color: #e3f2fd;
    background-color: #3740ff;
  }
  @media (min-width: 576px) {
    font-size: 1.25rem;
  }
`;

const DateIcon = styled(Calendar)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  margin-top: -2px;
  color: #888;

  @media (min-width: 576px) {
    width: 20px;
    height: 20px;
  }
`;

export default ({ data: { mdx }, pageContext }) => {
  const { tags } = mdx.frontmatter;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} description={mdx.excerpt} />
      <Wrapper>
        <article className="typeset">
          <h1>{mdx.frontmatter.title}</h1>
          <div className="date">
            {' '}
            <DateIcon />
            <Date>{mdx.frontmatter.date}</Date>
          </div>
          <Divider style={{ margin: '4rem 0 8rem' }} />
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </article>
        <TagSection>
          <PostTagLink to="/tags/">
            TAGS <span>&#8594;</span>
          </PostTagLink>
          {tags.map((tag, i) => (
            <PostTags to={`/${tag}`} key={i}>
              #{tag}
            </PostTags>
          ))}
        </TagSection>
        <Divider />
        <List>
          {previous && (
            <ListItem className="first">
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </ListItem>
          )}

          {next && (
            <ListItem className="second">
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </ListItem>
          )}
        </List>
      </Wrapper>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`;
