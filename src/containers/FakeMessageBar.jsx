import React from "react";
import { Link } from "react-router-dom";
import { Segment, Grid, Icon, Button, Modal, Header } from "semantic-ui-react";

const FakeMessageBar = () => {
  return (
    <>
      <Segment attached="top" id="details">
        <Modal
          trigger={
            <Button id="composeButton">
              <Icon.Group>
                <Icon name="mail square" />
                <Icon corner name="compose" color="orange" />
              </Icon.Group>
              <b>Compose</b>
            </Button>
          }
          closeIcon
        >
          <Header icon="bullhorn" content="Oops!" />
          <Modal.Content>
            <p>
              You're already on the "compose" page! Fill out the form and click
              "send" and I'll be in touch with you soon.
            </p>
          </Modal.Content>
        </Modal>
      </Segment>
      <Segment attached="bottom" id="pagecontainer">
        <Grid columns={1} celled="internally">
          <Grid.Row>
            <Modal
              trigger={
                <p style={{ padding: "5px" }}>
                  <Icon.Group>
                    <Icon name="folder" color="yellow" />
                    <Icon corner name="envelope outline" />
                  </Icon.Group>
                  <Link style={{ color: "#353B7F" }}>Inbox</Link>
                </p>
              }
              closeIcon
            >
              <Header icon="bullhorn" content="Oops!" />
              <Modal.Content>
                <p>
                  Unfortunately, these aren't real links. They look like it,
                  though! Send me a message and ask me how I created these fake
                  links and a replica of one the most famous mid 2000's social
                  sites!
                </p>
              </Modal.Content>
            </Modal>
          </Grid.Row>
          <Grid.Row>
            <Modal
              trigger={
                <p style={{ padding: "5px" }}>
                  <Icon.Group>
                    <Icon name="sticky note" color="yellow" />
                    <Icon corner name="plus" color="green" />
                  </Icon.Group>
                  <Link style={{ color: "#353B7F" }}>Notifications</Link>
                </p>
              }
              closeIcon
            >
              <Header icon="bullhorn" content="Oops!" />
              <Modal.Content>
                <p>
                  Unfortunately, these aren't real links. They look like it,
                  though! Send me a message and ask me how I created these fake
                  links and a replica of one the most famous mid 2000's social
                  sites!
                </p>
              </Modal.Content>
            </Modal>
          </Grid.Row>
          <Grid.Row>
            <Modal
              trigger={
                <p style={{ padding: "5px" }}>
                  <Icon.Group>
                    <Icon name="folder" color="yellow" />
                    <Icon corner name="envelope outline" />
                  </Icon.Group>
                  <Link style={{ color: "#353B7F" }}>Sent</Link>
                </p>
              }
              closeIcon
            >
              <Header icon="bullhorn" content="Oops!" />
              <Modal.Content>
                <p>
                  Unfortunately, these aren't real links. They look like it,
                  though! Send me a message and ask me how I created these fake
                  links and a replica of one the most famous mid 2000's social
                  sites!
                </p>
              </Modal.Content>
            </Modal>
          </Grid.Row>
          <Grid.Row>
            <Modal
              trigger={
                <p style={{ padding: "5px" }}>
                  <Icon.Group>
                    <Icon name="folder" color="yellow" />
                    <Icon corner name="save" color="blue" />
                  </Icon.Group>
                  <Link style={{ color: "#353B7F" }}>Drafts</Link>
                </p>
              }
              closeIcon
            >
              <Header icon="bullhorn" content="Oops!" />
              <Modal.Content>
                <p>
                  Unfortunately, these aren't real links. They look like it,
                  though! Send me a message and ask me how I created these fake
                  links and a replica of one the most famous mid 2000's social
                  sites!
                </p>
              </Modal.Content>
            </Modal>
          </Grid.Row>
          <Grid.Row>
            <Modal
              trigger={
                <p style={{ padding: "5px" }}>
                  <Icon.Group>
                    <Icon name="folder" color="yellow" />
                    <Icon corner name="save" color="blue" />
                  </Icon.Group>
                  <Link style={{ color: "#353B7F" }}>Saved</Link>
                </p>
              }
              closeIcon
            >
              <Header icon="bullhorn" content="Oops!" />
              <Modal.Content>
                <p>
                  Unfortunately, these aren't real links. They look like it,
                  though! Send me a message and ask me how I created these fake
                  links and a replica of one the most famous mid 2000's social
                  sites!
                </p>
              </Modal.Content>
            </Modal>
          </Grid.Row>
          <Grid.Row>
            <Modal
              trigger={
                <p style={{ padding: "5px" }}>
                  <Icon.Group>
                    <Icon name="envelope outline" />
                    <Icon corner name="fire" color="red" />
                  </Icon.Group>
                  <Link style={{ color: "#353B7F" }}>Spam</Link>
                </p>
              }
              closeIcon
            >
              <Header icon="bullhorn" content="Oops!" />
              <Modal.Content>
                <p>
                  Unfortunately, these aren't real links. They look like it,
                  though! Send me a message and ask me how I created these fake
                  links and a replica of one the most famous mid 2000's social
                  sites!
                </p>
              </Modal.Content>
            </Modal>
          </Grid.Row>
          <Grid.Row>
            <Modal
              trigger={
                <p style={{ padding: "5px" }}>
                  <Icon.Group>
                    <Icon name="folder" color="yellow" />
                    <Icon corner name="trash alternate" color="grey" />
                  </Icon.Group>
                  <Link style={{ color: "#353B7F" }}>Trash</Link>
                </p>
              }
              closeIcon
            >
              <Header icon="bullhorn" content="Oops!" />
              <Modal.Content>
                <p>
                  Unfortunately, these aren't real links. They look like it,
                  though! Send me a message and ask me how I created these fake
                  links and a replica of one the most famous mid 2000's social
                  sites!
                </p>
              </Modal.Content>
            </Modal>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default FakeMessageBar;
