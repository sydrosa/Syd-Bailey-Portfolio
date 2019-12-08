import React, { Component } from "react";
import ProfilePic from "../containers/ProfilePic.jsx";
import ContactMe from "../containers/ContactMe";
import Network from "../containers/Network";
import Blog from "../components/Blog";
import Top8 from "../components/Top8";
import Blurbs from "../containers/Blurbs";
// import background from "../background.jpg";
import { Grid, Segment } from "semantic-ui-react";

export default class Home extends Component {
  render() {
    return (
      <>
        <Grid>
          <Grid.Column width={7}>
            <Segment basic padded="very">
              <ProfilePic />
              <ContactMe />
            </Segment>
          </Grid.Column>
          <Grid.Column width={9}>
            <Segment basic padded="very">
              <Network />
              <Blog />
              <Blurbs />
              <Top8 />
            </Segment>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}
