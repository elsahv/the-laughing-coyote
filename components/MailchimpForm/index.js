import React, { useState } from 'react'
import axios from 'axios'

import {
  SubscribeContainer,
  SubFormContainer,
  Input,
  Button,
  SuccessState,
  ErrorState
} from './MailchimpForm.styled.js'
 



function Subscribe() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')
  const [errorMsg, setErrorMsg] = useState(null)

  const subscribe = async (e) => {
    e.preventDefault()
    setState('Loading')
    try { 
      const response = await axios.post('/api/subscribeApi', { email })
      setState('Success')
      setEmail('')
    } catch (e) {
      setErrorMsg(e.response.data.error)
      setState('Error')
    }
  }

  return (
     <>
      <SubscribeContainer onSubmit={subscribe}>
        <SubFormContainer>

              <Input
                required
                name="email"
                type="email"
                placeholder="email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            <Button
              disabled={state === 'Loading'}
              type="submit"
              onClick={subscribe}
            >
              Subscribe
            </Button>

        </SubFormContainer>
            {state === 'Error' && (
              <ErrorState>{errorMsg}</ErrorState>
            )}
            {state === 'Success' && (
              <SuccessState>Awesome, you have been subscribed!</SuccessState>
            )}

    </SubscribeContainer>
    </>  
  )
}

export default Subscribe