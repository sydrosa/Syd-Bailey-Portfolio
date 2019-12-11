import React, { Component } from "react";
import { Grid, Input, TextArea, Form, Label, Button } from "semantic-ui-react";
import sydheadshot from "../sydheadshot.JPG";
import * as emailjs from "emailjs-com";

export default class SendEmail extends Component {
  constructor() {
    super();

    this.state = {
      to: "sydabailey@gmail.com",
      from: "",
      subject: "",
      body: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { to, from, subject, body } = this.state;
    let templateParams = {
      from_name: from,
      to_name: to,
      subject: subject,
      message_html: body
    };
    emailjs.send(
      "gmail",
      "template_GsqBmIod",
      templateParams,
      "user_1hfmetEtwXTcvDm43YPN2"
    );
    this.resetForm();
  };
  resetForm() {
    this.setState({
      from: "",
      subject: "",
      body: ""
    });
  }

  render() {
    // console.log(this.state);
    return (
      <Form>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={5} id="messagegrid">
              <p>
                <b>To:</b>
              </p>
            </Grid.Column>
            <Grid.Column width={11}>
              <Label
                image
                style={{ fontFamily: "Verdana", backgroundColor: "#c4dff0" }}
              >
                <img src={sydheadshot} />
                Syd Bailey
              </Label>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={5} id="messagegrid">
              <p>
                <b>Your Email:</b>
              </p>
            </Grid.Column>
            <Grid.Column width={11}>
              <Input fluid name="from" onChange={this.handleChange} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={5} id="messagegrid">
              <b>Subject:</b>
            </Grid.Column>
            <Grid.Column width={11}>
              <Input
                style={{ fontFamily: "Verdana" }}
                fluid
                placeholder="Syd, we want to hire you!"
                name="subject"
                onChange={this.handleChange}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={5} id="messagegrid">
              <b>Body:</b>
            </Grid.Column>
            <Grid.Column width={11}>
              <TextArea
                placeholder="--------------------------"
                fluid="true"
                style={{ minHeight: 300, fontFamily: "courier" }}
                name="body"
                onChange={this.handleChange}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Button onSubmit={this.handleSubmit}>Send</Button>
      </Form>
    );
  }
}
