import React from "react";
import { Grid, Segment } from "semantic-ui-react";

const Details = () => {
  return (
    <>
      <Segment attached="top" size="tiny" id="details">
        <b>Syd's Details</b>
      </Segment>
      <Segment attached="bottom" id="pagecontainer">
        <Grid columns={2} celled="internally">
          <Grid.Row>
            <Grid.Column width="6" id="firstcolumnformat">
              <b>Status:</b>
            </Grid.Column>
            <Grid.Column width="10" id="secondcolumnformat">
              Actively Looking
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="6" id="firstcolumnformat">
              <b>Here For:</b>
            </Grid.Column>
            <Grid.Column width="10" id="secondcolumnformat">
              Networking, Serious Opportunities, An Engineering Organization to
              Call My Own
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="6" id="firstcolumnformat">
              <b>Hometown:</b>
            </Grid.Column>
            <Grid.Column width="10" id="secondcolumnformat">
              Brooklyn, NY
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="6" id="firstcolumnformat">
              <b>Ethnicity:</b>
            </Grid.Column>
            <Grid.Column width="10" id="secondcolumnformat">
              Black
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="6" id="firstcolumnformat">
              <b>Gender:</b>
            </Grid.Column>
            <Grid.Column width="10" id="secondcolumnformat">
              Woman
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="6" id="firstcolumnformat">
              <b>Zodiac Sign:</b>
            </Grid.Column>
            <Grid.Column width="10" id="secondcolumnformat">
              Leo
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="6" id="firstcolumnformat">
              <b>Education:</b>
            </Grid.Column>
            <Grid.Column width="10" id="secondcolumnformat">
              Flatiron School
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default Details;
