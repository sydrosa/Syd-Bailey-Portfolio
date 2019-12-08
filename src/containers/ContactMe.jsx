import React from "react";
import { Segment, Grid, Image } from "semantic-ui-react";
import sendmessageicon from "../icons/sendmsgicon.png";
import forwardmessageicon from "../icons/forwardmsgicon.png";
import linkedinmessageicon from "../icons/linkedinmsgicon.png";
import bookmarkicon from "../icons/bookmarkicon.png";

const ContactMe = () => {
  return (
    <div id="details">
      <Segment attached="top" inverted color="blue" size="tiny">
        Contact Me
      </Segment>
      <Segment attached="bottom">
        <Grid columns={2}>
          <Grid.Column>
            <Image src={sendmessageicon} floated="left" />
            <p floated="right">Email Me</p>
            <Image src={linkedinmessageicon} floated="left" />
            <p floated="right">Connect on LinkedIn</p>
          </Grid.Column>
          <Grid.Column>
            <Image src={forwardmessageicon} floated="left" />
            <p floated="right">Forward Profile</p>
            <Image src={bookmarkicon} floated="left" />
            <p floated="right">Bookmark Page</p>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
};

export default ContactMe;
