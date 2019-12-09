import React, { Component } from "react";
import { Header, Card, Image } from "semantic-ui-react";
import appleLogo from "../icons/apple.png";
import boxyCharmLogo from "../icons/boxycharm.jpg";
import ipsyLogo from "../icons/ipsy.png";
import facebookLogo from "../icons/facebook.png";
import indeedLogo from "../icons/indeed.png";
import twitterLogo from "../icons/twitter.png";
import buzzfeedLogo from "../icons/buzzfeed.png";
import rentTheRunwayLogo from "../icons/rtr.png";

const dreamCompanies = [
  {
    name: "Rent the Runway",
    website: "https://www.renttherunway.com",
    logo: rentTheRunwayLogo
  },
  {
    name: "Buzzfeed",
    website: "https://www.buzzfeed.com",
    logo: buzzfeedLogo
  },
  {
    name: "Twitter",
    website: "https://www.twitter.com",
    logo: twitterLogo
  },
  {
    name: "Indeed",
    website: "https://www.indeed.com",
    logo: indeedLogo
  },
  {
    name: "Facebook",
    website: "https://www.facebook.com",
    logo: facebookLogo
  },
  { name: "Apple", website: "https://www.apple.com", logo: appleLogo },
  {
    name: "BoxyCharm",
    website: "https://www.boxycharm.com",
    logo: boxyCharmLogo
  },
  { name: "IPSY", website: "https://www.ipsy.com", logo: ipsyLogo }
];

export default class Top8 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Header id="myspace">Syd Bailey's Dream Company Space (Top 8)</Header>
        <Card.Group itemsPerRow={4}>
          {dreamCompanies.map((company, index) => {
            return (
              <Card
                style={{
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderRadius: "0px",
                  borderColor: "white"
                }}
              >
                <Card.Content>
                  <Card.Header id="friends">{company.name}</Card.Header>
                  <Image src={company.logo} id="logos" key={index} />
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
      </>
    );
  }
}
