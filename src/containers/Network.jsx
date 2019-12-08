import React from "react";
import { Segment, Header } from "semantic-ui-react";

const Network = () => {
  return (
    // <Header as="h3" block size="huge">
    //   <b>Syd Bailey</b> is in your extended network.
    // </Header>
    <Segment color="black">
      <Header size="huge">
        <b>Syd Bailey</b> is in your extended network.
      </Header>
    </Segment>
  );
};

export default Network;
