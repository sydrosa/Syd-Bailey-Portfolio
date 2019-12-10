import React from "react";
import { Grid, Input, TextArea, Form, Label } from "semantic-ui-react";
import sydheadshot from "../sydheadshot.JPG";

const SendEmail = () => {
  return (
    <Form>
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={5} id="messagegrid">
            <p>
              <b>To:</b>
            </p>
          </Grid.Column>
          <Grid.Column width={11}>
            <Label
              image
              style={{ fontFamily: "Verdana", backgroundColor: "#c4dff0" }}
            >
              <img src={sydheadshot} />
              Syd Bailey
            </Label>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5} id="messagegrid">
            <p>
              <b>Your Email:</b>
            </p>
          </Grid.Column>
          <Grid.Column width={11}>
            <Input fluid />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5} id="messagegrid">
            <b>Subject:</b>
          </Grid.Column>
          <Grid.Column width={11}>
            <Input fluid />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5} id="messagegrid">
            <b>Body:</b>
          </Grid.Column>
          <Grid.Column width={11}>
            <TextArea fluid />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  );
};

export default SendEmail;
