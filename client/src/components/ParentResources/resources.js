import React from 'react'
import { Item } from 'semantic-ui-react'

const ResourceProps = () => (
  <Item.Group>
    <Item>

      <Item.Content>
        <Item.Header as='a'>Code of Conduct</Item.Header>
      </Item.Content>
    </Item>

    <Item>

      <Item.Content>
        <Item.Header as='a'>Activity Waiver</Item.Header>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default ResourceProps