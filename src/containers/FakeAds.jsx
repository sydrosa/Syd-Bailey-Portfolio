import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Modal, Icon } from "semantic-ui-react";

const ads = [
  {
    title: "Miracle Mic",
    description:
      "Phoenix pop punk band heard on RockIt2Me International, Vol 2.",
    website: "https://www.miraclemicmusic.com"
  },
  {
    title: "The April Lasagna Quiz",
    description:
      "Hey! Hey! You! You! Thank you know about April Lasagna? Take the quiz to find out.",
    website: "https://www.aprillasagnaquiz.com"
  },
  {
    title: "Hysteria at the Party?",
    description: "Like Panic at the Disco, but even more wild!",
    website: "https://www.hysteriaattheparty.com"
  },
  {
    title: "Gives You Heck",
    description:
      "Watch this All American Rejects cover band next week in Tampa!",
    website: "https://www.givesyouheck.com"
  },
  {
    title: "Cherry Glazerr Bombs",
    description:
      "Take your next relaxing bath to the next level with one of these lush bath bombs!",
    website: "https://cherrybomb.com"
  },
  {
    title: "Taxes? What are those?",
    description:
      "Up your knowledge of your taxes before the season is upon us!",
    website: "https://www.doyourtaxesright.com"
  }
];

const FakeAds = () => {
  return (
    <>
      <p>Sponsored Links</p>
      {ads.map(ad => {
        return (
          <>
            <Container style={{ overflowWrap: "break-word" }}>
              <Header
                style={{
                  fontFamily: "Verdana",
                  fontSize: "14px",
                  marginBottom: "1px",
                  marginTop: "5px",
                  color: "#353B7F"
                }}
              >
                <u>{ad.title}</u>
              </Header>
              <p
                style={{
                  fontFamily: "Verdana",
                  marginBottom: "1px",
                  fontSize: "12px"
                }}
              >
                {ad.description}
              </p>
              <Modal
                trigger={
                  <Link
                    style={{
                      fontFamily: "Verdana",
                      marginBottom: "1px",
                      fontSize: "12px",
                      color: "#47794E"
                    }}
                  >
                    {ad.website}
                  </Link>
                }
                closeIcon
              >
                <Header icon="bullhorn" content="Oops" />
                <Modal.Content>
                  <p>
                    Unfortunately, these aren't real ads. They look like it,
                    though! Send me a message and ask me how I created these
                    fake advertisements and a replica of one the most famous mid
                    2000's social sites!
                  </p>
                </Modal.Content>
              </Modal>
            </Container>
            <br />
          </>
        );
      })}
    </>
  );
};

export default FakeAds;
