import React, { Component } from "react";
import SendEmail from "../containers/SendEmail";
import { Grid, Segment } from "semantic-ui-react";

export default class Message extends Component {
  render() {
    return (
      <div id="mainpage">
        <Grid>
          <Grid.Column width={3}>
            <Segment basic>
              <h1>Stuff will go here!</h1>
            </Segment>
          </Grid.Column>
          <Grid.Column width={10}>
            <Segment basic>
              <SendEmail />
            </Segment>
          </Grid.Column>
          <Grid.Column width={3}>
            <Segment basic>
              <h1>Stuff will go here!</h1>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
    // <h1>Messages will appear here.</h1>;
  }
}
