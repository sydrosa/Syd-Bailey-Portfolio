import React from "react";
import sydheadshot from "../sydheadshot.JPG";
import { Image, Modal } from "semantic-ui-react";

const ProfilePic = () => {
  return (
    <>
      <h1 style={{ fontFamily: "Verdana" }}>Syd Bailey</h1>
      <Modal
        as="a"
        href="#"
        trigger={
          <Image
            src={sydheadshot}
            style={{ maxWidth: "50%", cursor: "pointer" }}
            floated="left"
          />
        }
        closeIcon
        id="imagelink"
      >
        <Modal.Content image>
          <Image
            src={sydheadshot}
            style={{ marginRight: "0px", marginBottom: "0px" }}
          />
        </Modal.Content>
      </Modal>

      <p style={{ fontSize: "12px", marginBottom: "10%" }}>
        "Brooklyn native, wildly creative, lover of cats, creater of apps,
        writer of code."
        <br />
        <br />
        She/Her/Hers
        <br />
        United States
        <br />
        <br />
        Last Login: Today
      </p>
    </>
  );
};

export default ProfilePic;
