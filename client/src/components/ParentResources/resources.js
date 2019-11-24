import React from 'react'
import { Image, Item } from 'semantic-ui-react'

const ResourceProps = () => (
  <Item.Group>
    <Item>

      <Item.Content>
        <Item.Header as='a'>Code of Conduct</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>

    <Item>

      <Item.Content>
        <Item.Header as='a'>Activity Waiver</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default ResourceProps