import React from "react";
import sydheadshot from "../sydheadshot.JPG";
import { Image } from "semantic-ui-react";

const ProfilePic = () => {
  return (
    <>
      <h1>Syd Bailey</h1>
      <Image src={sydheadshot} style={{ maxWidth: "50%" }} floated="left" />
      <p floated="right">
        <br />
        She/Her/Hers
        <br />
        20 Something Years Old
        <br />
        Available to Relocate United States
        <br />
        <br />
        <br />
        <br />
        Last Login: Today
      </p>
      <br />
      <p>
        View my: <a href="https://github.com/sydbails/">Github</a> |{" "}
        <a href="https://www.linkedin.com/in/sydbailey">LinkedIn</a>
      </p>
    </>
  );
};

export default ProfilePic;
