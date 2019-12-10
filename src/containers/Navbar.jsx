import React, { Component } from "react";
import { Menu, Segment, Header, Image } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import whitemyspace from "../icons/whitemyspace.png";

class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <>
        <Segment basic id="topofpage" textAlign="left">
          <Header as="h3" style={{ color: "white", fontFamily: "arial" }}>
            <Image
              src={whitemyspace}
              floated="left"
              style={{ margin: "0px" }}
            />
            <b>MyPortfolio</b>
            <Header.Subheader
              style={{ color: "white", fontFamily: "arial", fontSize: "10px" }}
            >
              A place for Syd to find a job.
            </Header.Subheader>
          </Header>
        </Segment>

        <Menu id="navbar">
          <Menu.Item
            style={{ color: "white" }}
            as={NavLink}
            exact
            to="/"
            name="Home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            style={{ color: "white" }}
            as={NavLink}
            to="/resume"
            name="Resume"
            active={activeItem === "resume"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            style={{ color: "white" }}
            as={NavLink}
            to="/projects"
            name="Projects"
            active={activeItem === "projects"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            style={{ color: "white" }}
            as={NavLink}
            to="/message"
            name="Messages"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            style={{ color: "white" }}
            as={NavLink}
            to="/blog"
            name="Blog"
            active={activeItem === "blogs"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </>
    );
  }
}

export default withRouter(Navbar);
