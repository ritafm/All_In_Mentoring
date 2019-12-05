import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Grid,
  Header,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import CardProps from '../src/components/MentorPictureCard/mentorCard'
import ResourceProps from '../src/components/ParentResources/resources'
import Footer from '../src/components/Footer/index'
// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text style={{background:'#4c5760' }}>
    <Header
      as='h1'
      content='ALL iiN Mentoring'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
        background: '#4c5760'
      }}
    />
    <Header
      as='h2'
      content='All Invested In Neighborhoods.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
        background: '#4c5760'
      }}
    />
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            color='#4c5760'
            style={{
              minHeight: 300,
              padding: '1em 0em',
            }}
            vertical
          >

            <Menu It And 
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={fixed}
              secondary={fixed}
              style={{
                padding: '12px',
                margin: '-12px',
                background: 'rgba(0,0,0,.3)'
              }}
              size='massive'
            >
              <Container id='nav' >
                <Menu.Item href='/' as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item href='#calendarID' as='a'>Calendar </Menu.Item>
                <Menu.Item href='#mentor' as='a'>Mentor Bios</Menu.Item>
                <Menu.Item href='#parentResourcesID' as='a'>Parent Resources</Menu.Item>
                <Menu.Item position='right'>
                </Menu.Item>
                <a class="facebook popup icon item" data-content="visit us on Facebook" href="https://www.facebook.com/alliin.mentoring.7" target="blank">
                  <i class="facebook icon"></i>
                </a>
                <a class="instagram popup icon item" data-content="visit us on Instagram" href="https://www.instagram.com/alliinmentoring/" target="blank">
                  <i class="instagram icon"></i>
                </a>
              </Container>

            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active>Home</Menu.Item>
          <Menu.Item href='#calendarID' as='a'>Calendar</Menu.Item>
          <Menu.Item href='#mentor' as='a'>Mentor Bios</Menu.Item>
          <Menu.Item href='#parentResourcesID' as='a'>Parent Resources</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer >
    <Segment id="calendarID" style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              All iiN Calendar
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Volunteers please log in and click on events to claim.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge' target='_blank' href='https://www.supersaas.com/schedule/All_In_Mentoring/All_In_Mentoring'>View Calendar Here</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment id="mentor" style={{ padding: '12em' }} style={{ background: '#387d7a' }} vertical>
      <Grid marginleft="5%" columns='equal' stackable>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Mentors
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              These are the mentors that are committed to see youth become leaders who bring change to neighborhoods.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <CardProps />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment id="parentResourcesID" style={{ padding: '12em' }} vertical>
      <Grid columns='equal' stackable textAlign='center'>
        <Grid.Row >
          <Grid.Column width={8} >
            <Header as='h3' style={{ fontSize: '2em' }} >
              Parent Resources
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Important documents for participation in the program.
            </p>
          </Grid.Column>
        </Grid.Row>
        <ResourceProps />
      </Grid>
    </Segment>

    <Footer />
  </ResponsiveContainer>
)
export default HomepageLayout