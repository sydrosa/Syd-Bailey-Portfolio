import React, { Component } from "react";
import ProfilePic from "../containers/ProfilePic.jsx";
import ContactMe from "../containers/ContactMe";
import Network from "../containers/Network";
import BlogSnippet from "./BlogSnippet";
import Top8 from "../components/Top8";
import Blurbs from "../containers/Blurbs";
import CommentSection from "../components/CommentSection";
// import background from "../background.jpg";
import { Grid, Segment } from "semantic-ui-react";
import Details from "../containers/Details.jsx";
import Interests from "../containers/Interests.jsx";

export default class Home extends Component {
  render() {
    return (
      <div id="mainpage">
        <Grid>
          <Grid.Column width={6}>
            <Segment basic>
              <ProfilePic />
              <ContactMe />
              <Interests />
              <Details />
            </Segment>
          </Grid.Column>
          <Grid.Column width={10}>
            <Segment basic>
              <Network />
              <BlogSnippet />
              <Blurbs />
              <Top8 />
              <CommentSection />
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
