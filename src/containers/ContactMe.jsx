import React from "react";
import { Link } from "react-router-dom";
import { Segment, Grid, Image, Icon } from "semantic-ui-react";
import forwardmessageicon from "../icons/forwardmsgicon.png";
import bookmarkicon from "../icons/bookmarkicon.png";

const ContactMe = () => {
  function handleForwarding() {
    const subject = "Look at this Software Engineers' Profile!";
    window.open(
      "mailto:" +
        "" +
        "?cc=" +
        "" +
        "&subject=" +
        subject +
        "&body=" +
        emailBody()
    );
  }

  function emailBody() {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let link = document.createElement("a");
    let text = document.createTextNode(
      "A young software engineer, Syd Bailey, made this incredible portfolio. Can you guess what she's paying homage too? I've copy/pasted the link below -- click on 'Messages' at the top to send her a message!"
    );
    link.setAttribute("href", "http://syd-bailey-resume.herokuapp.com");
    p.appendChild(text);
    p.appendChild(link);
    div.appendChild(p);

    return div;
  }

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
            <p>
              <Image src={forwardmessageicon} floated="left" id="imageicons" />
              <Link
                floated="right"
                onClick={handleForwarding}
                style={{ color: "black" }}
              >
                {" "}
                Forward
              </Link>
            </p>
            <p>
              <Image src={bookmarkicon} floated="left" id="imageicons" />
              <Link
                floated="right"
                onClick={handleForwarding}
                style={{ color: "black" }}
              >
                {" "}
                Bookmark
              </Link>
            </p>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
};

export default ContactMe;
