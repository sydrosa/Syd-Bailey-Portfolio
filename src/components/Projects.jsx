import React, { Component, Link } from "react";
import { Item, Image, Header, Button, Icon } from "semantic-ui-react";
import bejeweled from "../icons/bejeweled.png";
import mafiawars from "../icons/mafiawars.jpg";
import farmville from "../icons/farmville.jpeg";
import sydportfolio from "../screenshots/sydportfolio.png";
import lizzbians from "../screenshots/lizzbians.gif";
import RouletteLogo from "../screenshots/RouletteLogo.svg";

export default class Projects extends Component {
  handleClick = link => {};
  render() {
    const projects = [
      {
        name: "MyPortfolio",
        by: "Syd Bailey",
        link: "https://github.com/sydbails/Syd-Bailey-Portfolio",
        description:
          "An ode to your favorite social networking site from the mid 2000's. Check out my top 8, listen to my favorite song, and shoot me a message!",
        image: sydportfolio
      },
      {
        name: "Restaurant Roulette",
        by: "Syd Bailey, Hemesh Patel",
        link:
          "https://github.com/sydbails/Restaurant-Roulette-Frontend-React?organization=sydbails&organization=sydbails",
        description:
          "Take the guesswork out of where you're eating dinner tonight! Enter your zipcode and how far you're willing to go for grub, and we'll select a restaurant for you to dine at.",
        image: RouletteLogo
      },
      {
        name: "Lizzbians",
        by: "Syd Bailey, Andrew Rosario",
        link: "https://github.com/sydbails/Lizzbians_A-Lizzo-Stan-Page",
        description:
          "Why men great 'til they gotta be great? Want to learn more about your favorite artist, Lizzo? Sign up for Lizzbians -- a dynamic, single page fan site where you can check out popular Lizzo lyrics and play trivia!",
        image: lizzbians
      }
    ];
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
          <b>Syd's Apps</b>
        </Header>
        <Image.Group size="medium">
          <Image src={bejeweled} />
          <Image src={farmville} />
          <Image src={mafiawars} />
        </Image.Group>
        <Item.Group divided style={{ fontFamily: "Verdana" }}>
          {projects.map(project => {
            return (
              <Item style={{ paddingBottom: "5%" }}>
                <Item.Image src={project.image} />

                <Item.Content>
                  <Item.Header as="a" style={{ fontFamily: "Verdana" }}>
                    <b>{project.name}</b>
                  </Item.Header>
                  <Item.Meta>
                    <span className="cinema">{project.by}</span>
                  </Item.Meta>
                  <Item.Description>{project.description}</Item.Description>
                  <Item.Extra>
                    <Button a href={project.link} id="sendButton">
                      <Icon name="github" />
                      Repository
                    </Button>
                  </Item.Extra>
                </Item.Content>
              </Item>
            );
          })}
        </Item.Group>
      </div>
    );
  }
}
