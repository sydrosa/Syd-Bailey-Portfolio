import React, { Component } from "react";
import SendEmail from "../containers/SendEmail";
import FakeAds from "../containers/FakeAds";
import { FakeAd } from "../screenshots/FakeAd.jpg";

import FakeMessageBar from "../containers/FakeMessageBar";
import { Grid, Segment, Header, Image } from "semantic-ui-react";
import MoreFakeAds from "../containers/MoreFakeAds";

export default class Message extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="mainpage">
        <Grid>
          <Grid.Row>
            <Header
              style={{
                fontFamily: "Verdana"
              }}
            >
              <b>Mail Center</b>
            </Header>
          </Grid.Row>

          <Grid.Column width={3} style={{ paddingRight: "0px" }}>
            <Segment basic>
              <FakeMessageBar />
              <MoreFakeAds />
            </Segment>
          </Grid.Column>
          <Grid.Column
            width={10}
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
          <Grid.Column width={3} style={{ paddingLeft: "0px" }}>
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
