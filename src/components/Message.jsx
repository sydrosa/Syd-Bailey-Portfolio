import React, { Component } from "react";
import SendEmail from "../containers/SendEmail";
import FakeAds from "../containers/FakeAds";
import FakeMessageBar from "../containers/FakeMessageBar";
import { Grid, Segment, Header } from "semantic-ui-react";
import MoreFakeAds from "../containers/MoreFakeAds";

export default class Message extends Component {
  render() {
    return (
      <div
        id="mainpage"
        style={{ paddingLeft: "20px", paddingRight: "20px", paddingTop: "2%" }}
      >
        <Header
          style={{
            fontFamily: "Verdana"
          }}
        >
          <b>Mail Center</b>
        </Header>
        <Grid>
          <Grid.Column
            mobile={16}
            tablet={16}
            computer={3}
            style={{ paddingRight: "0px" }}
          >
            <Segment basic>
              <FakeMessageBar />
              <MoreFakeAds />
            </Segment>
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={16}
            computer={10}
            style={{ paddingLeft: "0px", paddingRight: "0px" }}
          >
            <Segment
              basic
              style={{
                paddingTop: "0px",
                paddingLeft: "0px",
                paddingRight: "0px"
              }}
            >
              <SendEmail />
            </Segment>
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={16}
            computer={3}
            style={{ paddingLeft: "0px" }}
          >
            <Segment basic>
              <FakeAds />
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
    // <h1>Messages will appear here.</h1>;
  }
}
