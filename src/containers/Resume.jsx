import React from "react";
import { Image } from "semantic-ui-react";
import SydResume from "../resume/SydBaileyResume12.11.png";

const Resume = () => {
  return (
    <div id="mainpage">
      <Image src={SydResume} />
    </div>
  );
};

export default Resume;
