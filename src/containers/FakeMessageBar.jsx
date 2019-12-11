import React from "react";
import { Segment, Grid, Label, Button } from "semantic-ui-react";

const FakeMessageBar = () => {
  return (
    <>
      <Segment attached="top" id="details">
        <Button id="composeButton">Compose</Button>
      </Segment>
      <Segment attached="bottom" id="pagecontainer">
        <Grid columns={1} celled="internally">
          <Grid.Row>
            <p>Inbox</p>
          </Grid.Row>
          <Grid.Row>
            <p>Notifications</p>
          </Grid.Row>
          <Grid.Row>
            <p>Sent</p>
          </Grid.Row>
          <Grid.Row>
            <p>Drafts</p>
          </Grid.Row>
          <Grid.Row>
            <p>Saved</p>
          </Grid.Row>
          <Grid.Row>
            <p>Spam</p>
          </Grid.Row>
          <Grid.Row>
            <p>Trash</p>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default FakeMessageBar;
