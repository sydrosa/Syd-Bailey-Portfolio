import React, { Component } from "react";
import { Header, Item } from "semantic-ui-react";
import Faker from "faker";

const comments = [
  {
    image: Faker.image.avatar(),
    // datetime: Faker.date.recent(),
    fullName: Faker.name.findName(),
    content: "Some stuff will go here. Random stuff. Comment stuff."
  },
  {
    image: Faker.image.avatar(),
    // datetime: Faker.date.recent(),
    fullName: Faker.name.findName(),
    content: "Some stuff will go here. Random stuff. Comment stuff."
  },
  {
    image: Faker.image.avatar(),
    date: Faker.date.weekday(),
    fullName: Faker.name.findName(),
    content: "Some stuff will go here. Random stuff. Comment stuff."
  },
  {
    image: Faker.image.avatar(),
    // datetime: Faker.date.recent(),
    fullName: Faker.name.findName(),
    content: "Some stuff will go here. Random stuff. Comment stuff."
  },
  {
    image: Faker.image.avatar(),
    // datetime: Faker.date.recent(),
    fullName: Faker.name.findName(),
    content: "Some stuff will go here. Random stuff. Comment stuff."
  },
  {
    image: Faker.image.avatar(),
    // datetime: Faker.date.recent(),
    fullName: Faker.name.findName(),
    content: "Some stuff will go here. Random stuff. Comment stuff."
  },
  {
    image: Faker.image.avatar(),
    // datetime: Faker.date.recent(),
    fullName: Faker.name.findName(),
    content: "Some stuff will go here. Random stuff. Comment stuff."
  },
  {
    image: Faker.image.avatar(),
    // datetime: Faker.date.recent(),
    fullName: Faker.name.findName(),
    content: "Some stuff will go here. Random stuff. Comment stuff."
  }
];

export default class CommentSection extends Component {
  render() {
    console.log(Faker.date.recent());
    return (
      <React.Fragment>
        <Header id="myspace">Syd's Professional Recommendations</Header>
        <Item.Group>
          {comments.map((comment, index) => {
            return (
              <Item>
                <Item.Image size="tiny" src={comment.image} />
                <Item.Content>
                  <Item.Header>{comment.fullName}</Item.Header>
                  <Item.Meta>{comment.date}</Item.Meta>
                  <Item.Meta>{comment.content}</Item.Meta>
                </Item.Content>
              </Item>
            );
          })}
        </Item.Group>
      </React.Fragment>
    );
  }
}
