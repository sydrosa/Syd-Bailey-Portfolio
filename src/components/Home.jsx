import React, { Component } from "react";
import ProfilePic from "../containers/ProfilePic.jsx";
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
            </Segment>
          </Grid.Column>
          <Grid.Column width={10}>
            <Segment>2</Segment>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}
