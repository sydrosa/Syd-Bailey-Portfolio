import React from "react";
import { Segment, Grid, Image, Icon } from "semantic-ui-react";
import forwardmessageicon from "../icons/forwardmsgicon.png";
import bookmarkicon from "../icons/bookmarkicon.png";

const ContactMe = () => {
  return (
    <div>
      <Segment attached="top" id="details">
        <b>Contact Me</b>
      </Segment>
      <Segment attached="bottom" style={{ fontSize: "12px" }}>
        <Grid columns={2}>
          <Grid.Column>
            <p>
              <a
                href="https://www.github.com/sydbails"
                style={{ color: "black" }}
              >
                <Icon name="github" />
                Github
              </a>
            </p>

            <p>
              <a
                href="https://www.linkedin.com/in/sydbailey"
                style={{ color: "black" }}
              >
                <Icon name="linkedin" />
                LinkedIn
              </a>
            </p>
          </Grid.Column>
          <Grid.Column>
            <Image src={forwardmessageicon} floated="left" id="imageicons" />
            <p floated="right">Forward Profile</p>
            <Image src={bookmarkicon} floated="left" id="imageicons" />
            <p floated="right">Bookmark Page</p>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
};

export default ContactMe;
