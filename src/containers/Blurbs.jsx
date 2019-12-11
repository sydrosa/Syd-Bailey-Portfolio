import React from "react";
import { Header } from "semantic-ui-react";

const Blurbs = () => {
  return (
    <>
      <Header id="myspace">Syd's Blurbs</Header>
      <Header as="h4" id="title">
        About Me:
      </Header>
      <p style={{ padding: "5px" }}>
        Curious and compassionate Full-Stack Engineer with a passion for
        developing user-friendly web applications and solving complex problems.
        With experience in Ruby on Rails, React, Redux, and JavaScript based
        programming and a background in diversity & inclusion, I became
        passionate about bridging the gap between technology and inclusive
        products. I bring strong skills in project management/SCRUM, Strategy
        and leadership alongside my technical skills.
      </p>
      <Header as="h4" id="title">
        Who I'd Like to Meet:
      </Header>
      <p style={{ padding: "5px" }}>
        Grace Hopper and Ada Lovelace. She was{" "}
        <b>
          <i>badass.</i>
        </b>
      </p>
    </>
  );
};

export default Blurbs;
