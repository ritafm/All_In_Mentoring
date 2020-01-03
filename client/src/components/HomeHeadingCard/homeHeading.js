import React from 'react'
import { Container } from 'semantic-ui-react'
import PropTypes from 'prop-types'


const HomeHeadingProps = ({ mobile }) => (
    <Container style= {{marginTop: '30px'}}className image>
    <img width="100%" style={{opacity: 0.5}} src="https://i.gifer.com/Vp0W.gif" alt="new"/>
    <p1><span>ALL iiN Mentoring</span></p1>
    <p2><span>All Invested In Neighborhoods</span></p2>
    </Container>
  )
  
  HomeHeadingProps.propTypes = {
    mobile: PropTypes.bool,
  }

  export default HomeHeadingProps
