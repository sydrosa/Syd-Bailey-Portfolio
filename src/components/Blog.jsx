import React, { Component } from "react";
import BlogLoading from "../containers/BlogLoading";
import BlogContainer from "../containers/BlogContainer";
import _ from "lodash";

export default class BlogSnippet extends Component {
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
    console.log(_.isEmpty(this.state.blogs), this.state.blogs);
    return (
      <div id="mainpage">
        {_.isEmpty(this.state.blogs) ? (
          <BlogLoading />
        ) : (
          <BlogContainer blogs={this.state.blogs} />
        )}
      </div>
    );
  }
}
