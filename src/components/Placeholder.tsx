import React from "react";
import { Placeholder, Card } from "semantic-ui-react";

const PlaceholderExamplePlaceholder = () => (
  <Card.Group itemsPerRow={4}>
    {Array.from({ length: 10 })
      .fill(Math.random())
      .map((val, index) => (
        <Card key={index}>
          <Card.Content>
            <Placeholder>
              <Placeholder.Image square />
            </Placeholder>
          </Card.Content>
        </Card>
      ))}

    {Array.from({ length: 8})
      .fill(Math.random())
      .map((val, index) => (
        <Card key={index}>
          <Card.Content>
            <Placeholder>
              <Placeholder.Image rectangular />
            </Placeholder>
          </Card.Content>
        </Card>
      ))}
  </Card.Group>
);

export default PlaceholderExamplePlaceholder;
