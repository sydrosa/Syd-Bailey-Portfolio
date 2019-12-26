import React, { Component } from "react";
import { Header, Grid, Image } from "semantic-ui-react";
import Faker from "faker";

const comments = [
  {
    image: Faker.image.avatar(),
    datetime: "4/12/2008 10:53 AM",
    fullName: Faker.name.firstName(),
    content:
      "Thankies 4 the custom template you made me for my profile! Ur gunna make an awesome programmer 1 day :P ;)"
  },
  {
    image: Faker.image.avatar(),
    datetime: "4/01/2008 11:02 AM",
    fullName: Faker.name.firstName(),
    content:
      "Syd -- I removed you from my top 8. Hope you're not mad.... april fools!!!"
  },
  {
    image: Faker.image.avatar(),
    datetime: "3/31/2008 2:17 PM",
    fullName: Faker.name.firstName(),
    content:
      "finally starting to warm up!!! we should plan a trip to an island somewhere... whatdya thinkin??!"
  },
  {
    image: Faker.image.avatar(),
    datetime: "3/14/2008 4:02 PM",
    fullName: Faker.name.firstName(),
    content: "tell chels i said HBD!! can't find her on here."
  },
  {
    image: Faker.image.avatar(),
    datetime: "3/13/2008 8:07 AM",
    fullName: Faker.name.firstName(),
    content:
      "Am I going to see you at yoga this morning? I've been working on my crow pose and I think you're going to be *really* impressed lolol <3 <3 see you!"
  },
  {
    image: Faker.image.avatar(),
    datetime: "2/14/2008 1:46 PM",
    fullName: Faker.name.firstName(),
    content:
      "FIRST VALENTINE'S DAY COMMENT! <3 Hope you're eating your weight in chocolate ;) Don't indulge too much!!!"
  },
  {
    image: Faker.image.avatar(),
    datetime: "2/02/2008 2:22 PM",
    fullName: Faker.name.firstName(),
    content:
      "can you make it to that Kings of Leon concert next week? I hear it'll be a blast."
  },
  {
    image: Faker.image.avatar(),
    datetime: "1/01/2008 1:53 AM",
    fullName: Faker.name.firstName(),
    content: "HaPpY nEw yEaR sYd!!!"
  }
];

export default class CommentSection extends Component {
  render() {
    return (
      <React.Fragment>
        <Header id="myspace">Syd's Comments</Header>
        <Grid celled>
          {comments.map((comment, index) => {
            return (
              <>
                <Grid.Row>
                  <Grid.Column
                    width={4}
                    style={{
                      fontFamily: "Verdana",
                      backgroundColor: "#d0803B",
                      textAlign: "center"
                    }}
                  >
                    <Header
                      style={{
                        fontFamily: "Verdana"
                      }}
                    >
                      {comment.fullName}
                    </Header>
                    <Image
                      size="tiny"
                      src={comment.image}
                      key={index}
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                    />
                  </Grid.Column>
                  <Grid.Column
                    width={12}
                    style={{
                      fontFamily: "Verdana",
                      backgroundColor: "#f7D9A7"
                    }}
                  >
                    <Header
                      style={{
                        fontFamily: "Verdana"
                      }}
                    >
                      {comment.datetime}
                    </Header>
                    <p>{comment.content}</p>
                  </Grid.Column>
                </Grid.Row>
              </>
            );
          })}
        </Grid>
      </React.Fragment>
    );
  }
}
