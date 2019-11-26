import React from 'react';
// import Calender from '../calendar';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const SignIn = () => {
    return (
      <Form>
        <Form.Field>
          <label>User Name</label>
          <input placeholder='User Name' />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Email' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button as={ Link } to="/calendar" type='submit'>Submit</Button>
      </Form>
    )
}

export default SignIn;