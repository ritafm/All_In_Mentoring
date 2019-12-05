import React from 'react'
import { Item } from 'semantic-ui-react'

const ResourceProps = () => (
  <Item.Group>
    <Item>

      <Item.Content>
        <Item.Header><a href="/assets/pdf/codeOfConduct.pdf" target = "blank">Code of Conduct</a></Item.Header>
      </Item.Content>
    </Item>

    <Item>

      <Item.Content>
        <Item.Header><a href="/assets/pdf/liability.pdf" target = "blank">Activity Waiver</a></Item.Header>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default ResourceProps