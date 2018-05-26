import React, { Component } from 'react';
import {
  Responsive,
  Segment,
  Container,
  Menu,
  Grid,
  Header,
  List,
  Divider
} from 'semantic-ui-react';

const HomepageContainer = ({children}) => (
  <Responsive>
    <Segment>
    <Container>
      <Menu.Item as='a' active>Home</Menu.Item>
      <Menu.Item as='a'>Page 2</Menu.Item>
      </Container>
    </Segment>
    {children}
  </Responsive>
)

const HomepageLayout = () => (
  <HomepageContainer>
    <Segment vertical>
      <Container text>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </Container>
    </Segment>
  </HomepageContainer>
)

export default HomepageLayout;
