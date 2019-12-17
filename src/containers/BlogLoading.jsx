import React from "react";
import { Segment, Loader, Modal } from "semantic-ui-react";

const BlogLoading = () => {
  return (
    <Segment>
      <Modal basic size="small">
        <Modal.Content>
          <Loader />
        </Modal.Content>
      </Modal>
      {/* <Dimmer active>
        <Loader />
      </Dimmer>

      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" /> */}
    </Segment>
  );
};

export default BlogLoading;
