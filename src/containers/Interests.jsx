import React from "react";
import { Grid, Segment } from "semantic-ui-react";

const Interests = () => {
  return (
    <>
      <Segment attached="top" id="details">
        <b>Syd's Interests</b>
      </Segment>
      <Segment attached="bottom" id="pagecontainer">
        <Grid columns={2} celled="internally" color="white">
          <Grid.Row>
            <Grid.Column width="6" id="firstcolumnformat">
              <b>General:</b>
            </Grid.Column>
            <Grid.Column width="10" id="secondcolumnformat">
              Anything computer programming or mixed martial arts related!
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="6" id="firstcolumnformat">
              <b>Music:</b>
            </Grid.Column>
            <Grid.Column width="10" id="secondcolumnformat">
              Beirut, Arcade Fire, LCD Soundsystem, Frankie Cosmos, Purity Ring,
              Tame Impala, Vampire Weekend, Goth Babe
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="6" id="firstcolumnformat">
              <b>Movies:</b>
            </Grid.Column>
            <Grid.Column width="10" id="secondcolumnformat">
              From Dusk 'til Dawn
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="6" id="firstcolumnformat">
              <b>Television:</b>
            </Grid.Column>
            <Grid.Column width="10" id="secondcolumnformat">
              Insecure, Broad City, Seinfeld
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="6" id="firstcolumnformat">
              <b>Books:</b>
            </Grid.Column>
            <Grid.Column width="10" id="secondcolumnformat">
              Cracking the Coding Interview, Humans of New York, A Little Lie,
              If You Give a Mouse a Cookie
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="6" id="firstcolumnformat">
              <b>Heroes:</b>
            </Grid.Column>
            <Grid.Column width="10" id="secondcolumnformat">
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
