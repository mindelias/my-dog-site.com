import React from "react";
import { Placeholder, Card, Grid } from "semantic-ui-react";

const PlaceholderExamplePlaceholder = () => (
  <Grid>
    <Grid.Row>
      {Array.from({ length: 4 })
        .fill(Math.random())
        .map((val, index) => (
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <Card key={index}>
              <Card.Content>
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
    </Grid.Row>
    <Grid.Row>
      {Array.from({ length: 4 })
        .fill(Math.random())
        .map((val, index) => (
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card key={index}>
              <Card.Content>
                <Placeholder>
                  <Placeholder.Image rectangular />
                </Placeholder>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
    </Grid.Row>
    <Grid.Row>
      {Array.from({ length: 4 })
        .fill(Math.random())
        .map((val, index) => (
          <Grid.Column mobile={16} tablet={8} computer={3}>
            <Card key={index}>
              <Card.Content>
                <Placeholder>
                  <Placeholder.Image rectangular />
                </Placeholder>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
    </Grid.Row>
  </Grid>
);

export default PlaceholderExamplePlaceholder;
