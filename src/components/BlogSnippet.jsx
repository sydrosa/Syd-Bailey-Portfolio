import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { List } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import _ from "lodash";
import BlogLoading from "../containers/BlogLoading";

export default class BlogSnippet extends Component {
  constructor() {
    super();

    this.state = {
      blogs: {}
    };
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
    return (
      <>
        <Header as="h3" style={{ fontFamily: "Verdana " }}>
          Syd's Latest Blog Entries [<a href="/">Subscribe to this Blog]</a>
        </Header>

        {_.isEmpty(this.state.blogs) ? (
          <BlogLoading />
        ) : (
          <>
            <p style={{ fontFamily: "Verdana" }}>
              {this.state.blogs[0].title} (
              <a href={this.state.blogs[0].link}>Read More</a>)
            </p>
          </>
        )}
        <Header as="h3" style={{ fontFamily: "Verdana " }}>
          <Link to="/blog">[View All Blog Entries]</Link>
        </Header>
      </>
    );
  }
}
