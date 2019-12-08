import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar
} from "semantic-ui-react";
import { thisExpression } from "@babel/types";

const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon="labeled"
    inverted
    vertical
    visible={visible}
    width="thin"
  >
    <Menu.Item as="a">
      <Icon name="home" />
      Home
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="gamepad" />
      Games
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="camera" />
      Channels
    </Menu.Item>
  </Sidebar>
);

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool
};

export default class SidebarExampleTransitions extends Component {
  state = {
    animation: "scale down",
    direction: "left",
    // dimmed: false,
    visible: false
  };

  handleAnimationChange = animation => () =>
    this.setState(prevState => ({ animation, visible: !prevState.visible }));
  handleVisibility = e => this.setState({ visible: !this.state.visible });

  //   handleDimmedChange = (e, { checked }) => this.setState({ dimmed: checked });

  //   handleDirectionChange = direction => () =>
  // this.setState({ direction, visible: false });

  render() {
    const { animation, dimmed, direction, visible } = this.state;

    return (
      <div>
        <Button onClick={this.handleVisibility} />
        <Sidebar.Pushable as={Segment}>
          <VerticalSidebar
            animation={animation}
            direction={direction}
            visible={visible}
          />

          <Sidebar.Pusher dimmed={dimmed && visible}>
            <Segment basic>
              <Header as="h3">Application Content</Header>
              <Image src="/images/wireframe/paragraph.png" />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
