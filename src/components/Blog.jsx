import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { List } from "semantic-ui-react";
import { Header } from "semantic-ui-react";

export default class Blog extends Component {
  constructor() {
    super();

    this.state = {};
  }
  componentDidMount() {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40sydabailey%2F"
    )
      .then(resp => resp.json())
      .then(resp => {
        this.setState({ blogs: resp.items });
      });
  }
  render() {
    console.log(this.state);
    return (
      <>
        <Header as="h3" style={{ fontFamily: "Verdana " }}>
          Syd's Latest Blog Entries [<a href="/">Subscribe to this Blog]</a>
        </Header>
        {/* <List>
          {this.state.blogs.map(blog => {
            return (
              <>
                <List.Icon name="medium" size="large" verticalAlign="middle" />
                <List.Content>
                  <List.Header as="a">{blog.title}</List.Header>
                  <List.Description as="a">{blog.pubDate}</List.Description>
                </List.Content>
              </>
            );
          })}
        </List> */}

        <Header as="h3" style={{ fontFamily: "Verdana " }}>
          <Link to="/blog">[View All Blog Entries]</Link>
        </Header>
      </>
    );
  }
}
