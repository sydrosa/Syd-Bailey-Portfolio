import React from "react";
import sydheadshot from "../sydheadshot.JPG";
import { Image, Modal } from "semantic-ui-react";

const ProfilePic = () => {
  return (
    <>
      <h1 style={{ fontFamily: "Verdana" }}>Syd Bailey</h1>
      <Modal
        trigger={
          <Image src={sydheadshot} style={{ maxWidth: "45%" }} floated="left" />
        }
        closeIcon
      >
        <Modal.Content image>
          <Image src={sydheadshot} />
        </Modal.Content>
      </Modal>
      {/* <Image src={sydheadshot} style={{ maxWidth: "50%" }} floated="left" /> */}
      <p floated="right">
        "Brooklyn native, wildly compassionate, lover of cats, creater of apps,
        writer of code."
        <br />
        <br />
        She/Her/Hers
        <br />
        Available to Relocate
        <br />
        <br />
        Last Login: Today
      </p>
      <p floated="left">
        View my: <a href="https://github.com/sydbails/">Github</a> |{" "}
        <a href="https://www.linkedin.com/in/sydbailey">LinkedIn</a>
      </p>
    </>
  );
};

export default ProfilePic;
