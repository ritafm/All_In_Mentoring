import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'


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
        <Button type='submit'>Submit</Button>
      </Form>
    )
}

export default SignIn;