import React, { Component } from "react";
import {
  Menu,
  Segment,
  Header,
  Image
  // Icon
} from "semantic-ui-react";
import { Link, NavLink, withRouter } from "react-router-dom";
import whitemyspace from "../icons/whitemyspace.png";
import smiling from "../icons/smiling.png";

// const icons = [
//   "smile",
//   "heart",
//   "eye",
//   "hand peace",
//   "meh",
//   "magic",
//   "thumbs up",
//   "thumbs down",
//   "trophy",
//   "bomb",
//   "beer",
//   "map pin"
// ];

class Navbar extends Component {
  state = {
    mood: "Choose your mood here!",
    activeItem: "",
    currentIcon: "smile"
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleClick = e => {
    e.preventDefault();
  };

  render() {
    const { activeItem } = this.state;

    return (
      <>
        <Segment aligned="left" basic id="topofpage" textAlign="left">
          <div style={{ display: "inline-block", padding: "0 20px" }}>
            <Header as="h3" style={{ color: "white", fontFamily: "arial" }}>
              <Image
                src={whitemyspace}
                floated="left"
                style={{ margin: "0px" }}
              />
              <b>MyPortfolio</b>
              <Header.Subheader
                style={{
                  color: "white",
                  fontFamily: "arial",
                  fontSize: "10px",
                  minWidth: "200px"
                }}
              >
                A place for Syd to find a job.
              </Header.Subheader>
            </Header>
          </div>
          <div
            style={{
              display: "inline-block",
              padding: "0 20px",
              verticalAlign: "top",
              fontSize: "10px",
              color: "white"
            }}
          >
            <Image src={smiling} floated="left" />
            <p style={{ margin: "0px" }}>
              <b>Status: </b>
              <i>Hiring!</i>
            </p>
            <p style={{ margin: "0px", whiteSpace: "nowrap" }}>
              <b>Mood: </b>
              {/* {
                if (this.state.mood === "")
              }
              {this.state.mood}{" "} */}
              <Link onClick={this.handleClick}>Change here.</Link>
            </p>
          </div>
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
        </Menu>
      </>
    );
  }
}

export default withRouter(Navbar);
