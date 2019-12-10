import React from "react";
import { Grid, Segment } from "semantic-ui-react";

const Details = () => {
  return (
    <>
      <Segment attached="top" size="tiny" id="details">
        Syd's Details
      </Segment>
      <Segment attached="bottom">
        <Grid columns={2} celled="internally">
          <Grid.Row>
            <Grid.Column width="6">
              <b>Status:</b>
            </Grid.Column>
            <Grid.Column width="10">Actively Looking</Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="6">
              <b>Here For:</b>
            </Grid.Column>
            <Grid.Column width="10">
              Networking, Serious Opportunities, An Engineering Organization to
              Call My Own
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="6">
              <b>Hometown:</b>
            </Grid.Column>
            <Grid.Column width="10">Brooklyn, NY</Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="6">
              <b>Ethnicity:</b>
            </Grid.Column>
            <Grid.Column width="10">Black</Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="6">
              <b>Gender:</b>
            </Grid.Column>
            <Grid.Column width="10">Woman</Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="6">
              <b>Zodiac Sign:</b>
            </Grid.Column>
            <Grid.Column width="10">Leo</Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="6">
              <b>Education:</b>
            </Grid.Column>
            <Grid.Column width="10">Flatiron School</Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default Details;
