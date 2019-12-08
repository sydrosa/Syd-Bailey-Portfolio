import React, { Component } from "react";
import {
  Menu,
  Sidebar,
  Segment,
  Icon,
  Header,
  Image,
  Button
} from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu color={"blue"}>
        <Menu.Item
          name="Home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Resume"
          active={activeItem === "resume"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Projects"
          active={activeItem === "projects"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Blog"
          active={activeItem === "blogs"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
