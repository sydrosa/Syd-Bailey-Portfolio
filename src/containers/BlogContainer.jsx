import React from "react";
import { Container, Header, Image } from "semantic-ui-react";

const BlogContainer = props => {
  function fixTime(timedate) {
    let parsedDate = timedate.replace(/-/g, "/");
    let currentDate = new Date(parsedDate);
    let date = currentDate.getDate();
    let month = currentDate.getMonth(); //Be careful! January is 0 not 1
    let year = currentDate.getFullYear();
    let dateString = month + 1 + "/" + date + "/" + year;
    return dateString;
  }

  return (
    <>
      {props.blogs.map(blog => {
        return (
          <>
            <Header id="myspace" style={{ paddingBottom: "10px" }}>
              {fixTime(blog.pubDate)}
            </Header>
            <Container>
              <Header as="h4" id="title">
                {blog.title}
              </Header>
              <Image src={blog.thumbnail} size="medium" floated="left" />
              <p style={{ minHeight: "200px", marginBottom: "10px" }}>
                {props.stripHtml(blog.content.substring(0, 500))}
                <a href={blog.link}>
                  <b>(.....)</b>
                </a>
              </p>
            </Container>
          </>
        );
      })}
    </>
  );
};

export default BlogContainer;
