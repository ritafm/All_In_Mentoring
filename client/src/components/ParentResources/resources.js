import React from 'react'
import { Item } from 'semantic-ui-react'

const ResourceProps = () => (
  <Item.Group>
    <Item>

      <Item.Content>
        <Item.Header as='a'><a href="/assets/pdf/codeOfConduct.pdf">Code of Conduct</a></Item.Header>
      </Item.Content>
    </Item>

    <Item>

      <Item.Content>
        <Item.Header as='a'><a href="/assets/pdf/liability.pdf">Activity Waiver</a></Item.Header>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default ResourceProps