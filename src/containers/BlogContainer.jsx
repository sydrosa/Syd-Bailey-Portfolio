import React from "react";
import { Container, Header } from "semantic-ui-react";

const BlogContainer = props => {
  console.log(props);
  return (
    <>
      {props.blogs.map(blog => {
        return (
          <Container>
            <Header id="myspace">I'm working!</Header>
          </Container>
        );
      })}
    </>
  );
};

export default BlogContainer;
