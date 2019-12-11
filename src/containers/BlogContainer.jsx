import React from "react";
import { Container, Header, Image } from "semantic-ui-react";

const BlogContainer = props => {
  return (
    <>
      {props.blogs.map(blog => {
        return (
          <>
            <Header id="myspace" style={{ paddingBottom: "10px" }}>
              {blog.pubDate}
            </Header>
            <Container>
              <Header as="h4" id="title">
                {blog.title}
              </Header>
              <Image src={blog.thumbnail} size="medium" floated="left" />
              <p style={{ minHeight: "200px" }}>
                {props.stripHtml(blog.content.substring(0, 500))}
                <a href={blog.link}>.....</a>
              </p>
            </Container>
          </>
        );
      })}
    </>
  );
};

export default BlogContainer;
