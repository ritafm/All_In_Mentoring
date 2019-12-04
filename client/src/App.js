import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Container,
  Grid,
  Header,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import CardProps from '../src/components/MentorPictureCard/mentorCard'
import ResourceProps from '../src/components/ParentResources/resources'
import images from './images.json'
import CardProps from "../src/components/MentorPictureCard/mentorCard"
import ResourceProps from "../src/components/ParentResources/resources"
import Calender from './components/calendar/parentView'
import { PayPalButton } from 'react-paypal-button'

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
  <Container text>
    <Header
      as='h1'
      content='All iIN Mentoring'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
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
            inverted color='blue'
            textAlign='center'
            style={{ 
              minHeight: 300, 
              padding: '1em 0em',
            }}
            vertical
          >

            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='massive'
              >
              <Container >
                <Menu.Item href = '/' as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item href = '#calendarID' as='a'>Calendar </Menu.Item>
                <Menu.Item href = '#mentor' as='a'>Mentor Bios</Menu.Item>
                <Menu.Item as='a'>Parent Resources</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                  <Button href='' inverted={fixed} primary={fixed} style={{ marginLeft: '0.5em', background: 'yellow'}}>Donate</Button>
                </Menu.Item>
                <Menu.Item as='a'>{ PayPalButton }</Menu.Item>

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
          <Menu.Item as='a'>Calendar</Menu.Item>
          <Menu.Item as='a' >Mentor Bios</Menu.Item>
          <Menu.Item as='a'>Parent Resources</Menu.Item>
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
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              All iIn Calendar
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Volunteers please log in and click on events to claim.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '12em' }} vertical>
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
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge' href='https://www.supersaas.com/schedule/All_In_Mentoring/All_In_Mentoring'>View Calendar Here</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid marginLeft="5%" columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <CardProps/>
          </Grid.Column>
          </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '12em' }} vertical>
      <Grid marginleft="5%" columns='equal' stackable>
      <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Parent Resources
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Important documents for participation in the program.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <ResourceProps/>
          </Grid.Column>
          </Grid.Row>
      </Grid>
    </Segment>

    <Segment inverted color='blue' vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Contact Us</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Our Mission:
              </Header>
              <p>
              To create a safe place for youth to have fun, be creative, mentored and empowered.               </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className="ui icon buttons">
  <button className="ui button"><i className="bold icon"></i></button>
  <button className="ui button"><i className="underline icon"></i></button>
  <button className="ui button"><i className="text width icon"></i></button>
</div>
      </Container>
    </Segment>
  </ResponsiveContainer>
)
export default HomepageLayout