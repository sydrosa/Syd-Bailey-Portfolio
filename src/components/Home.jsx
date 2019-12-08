import React, { Component } from "react";
import ProfilePic from "../containers/ProfilePic.jsx";
import ContactMe from "../containers/ContactMe";
import Network from "../containers/Network";
import background from "../background.jpg";
import { Grid, Segment } from "semantic-ui-react";

export default class Home extends Component {
  render() {
    return (
      <>
        <Grid>
          <Grid.Column width={6}>
            <Segment basic padded="very">
              <ProfilePic />
              <ContactMe />
            </Segment>
          </Grid.Column>
          <Grid.Column width={10}>
            <Segment basic padded="very">
              <Network />
            </Segment>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}
