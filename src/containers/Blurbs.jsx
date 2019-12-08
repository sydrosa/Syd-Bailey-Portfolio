import React from "react";
import { Header } from "semantic-ui-react";

const Blurbs = () => {
  return (
    <>
      <Header id="myspace">Syd Bailey's Blurbs</Header>
      <Header as="h4" id="title">
        About Me:
      </Header>
      <p>
        Stuff about me will go in this section. I will give a brief introduction
        about myself and what I love to do.
      </p>
      <Header as="h4" id="title">
        Who I'd Like to Meet:
      </Header>
      <p>
        Grace Hopper and Ada Lovelace. She was{" "}
        <b>
          <i>badass.</i>
        </b>
      </p>
    </>
  );
};

export default Blurbs;
