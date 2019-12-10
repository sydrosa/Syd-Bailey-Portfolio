import React from "react";
import { Grid, Segment } from "semantic-ui-react";

const Interests = () => {
  return (
    <>
      <Segment attached="top" inverted color="blue" size="tiny" id="details">
        Syd's Interests
      </Segment>
      <Segment attached="bottom">
        <Grid columns={2} celled="internally">
          <Grid.Row>
            <Grid.Column width="6">
              <b>General:</b>
            </Grid.Column>
            <Grid.Column width="10">
              Anything computer programming or mixed martial arts related!
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="6">
              <b>Music:</b>
            </Grid.Column>
            <Grid.Column width="10">
              Beirut, Arcade Fire, LCD Soundsystem, Frankie Cosmos, Purity Ring,
              Tame Impala, Vampire Weekend, Goth Babe
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="6">
              <b>Movies:</b>
            </Grid.Column>
            <Grid.Column width="10">From Dusk 'til Dawn</Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="6">
              <b>Television:</b>
            </Grid.Column>
            <Grid.Column width="10">Insecure, Broad City, Seinfeld</Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="6">
              <b>Books:</b>
            </Grid.Column>
            <Grid.Column width="10">
              Cracking the Coding Interview, Humans of New York, A Little Lie,
              If You Give a Mouse a Cookie
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="6">
              <b>Heroes:</b>
            </Grid.Column>
            <Grid.Column width="10">
              My mom, my old instructor, Edwin Kim, Meisha Tate, all my friends
              who inspired me to become an engineer.
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default Interests;
