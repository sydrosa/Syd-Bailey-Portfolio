import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu color={"blue"}>
        <Menu.Item
          as={NavLink}
          exact
          to="/"
          name="Home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink}
          to="/resume"
          name="Resume"
          active={activeItem === "resume"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink}
          to="/projects"
          name="Projects"
          active={activeItem === "projects"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink}
          to="/message"
          name="Messages"
          active={activeItem === "messages"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink}
          to="/blog"
          name="Blog"
          active={activeItem === "blogs"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

export default withRouter(Navbar);
