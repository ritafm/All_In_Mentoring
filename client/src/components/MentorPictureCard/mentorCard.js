import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
// import images from '../../images.json'
import MentorCard from '../MentorPictureCard/MentorCard.json'


const extra = (
  <a>
    <Icon name='user' />
    Email me
  </a>
)


const CardProps = () => (
<Card.Group>
  <Card
    image={MentorCard[0].image}
    header={MentorCard[0].header}
    meta={MentorCard[0].meta}
    description={MentorCard[0].description}
    extra={extra}
  />
  <Card
    image={MentorCard[1].image}
    header={MentorCard[1].header}
    meta={MentorCard[1].meta}
    description={MentorCard[1].description}
    extra={extra}
  />
    <Card
    image={MentorCard[2].image}
    header={MentorCard[2].header}
    meta={MentorCard[2].meta}
    description={MentorCard[2].description}
    extra={extra}
  />
  <Card
    image={MentorCard[3].image}
    header={MentorCard[3].header}
    meta={MentorCard[3].meta}
    description={MentorCard[3].description}
    extra={extra}
  />
    <Card
    image={MentorCard[4].image}
    header={MentorCard[4].header}
    meta={MentorCard[4].meta}
    description={MentorCard[4].description}
    extra={extra}
  />
</Card.Group>

)

export default CardProps
