import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export const SubscribeContainer = styled.form`
  width: 100%;
  padding: 10px 10px 10px 20px;
  background: orange;

  @media (max-width: 600px) {
    margin-left: 170px;
  }
  @media (max-width: 412px) {
    margin-left: 400px;
  }
`;

export const SubFormContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 8px 90px 8px 10px;
  border: 2px solid #000;
  font-size: 16px;
  background: #fff;

  @media (max-width: 1024px) {
    margin-top: 10px;
  }

  @media (max-width: 531px) {
    // padding: 8px 20px 8px 10px;
  }
`;

export const Button = styled.button`
  padding: 8px 20px;
  margin-top: 20px;
  border-radius: 5px; 
  border: solid 2px black;
  font-weight: bold;
  background: teal;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  cursor: pointer;
      /* :disabled {
        background: #636262;
    color: #cbced0;
      } */
  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  &:hover {
    background: #fff;
    color: teal;
    text-shadow: none;
    transition: 1s;
  }

@media (max-width: 600px) {
  margin-bottom: 15px;
  margin-left: 20px;
}

@media (max-width: 510px) {
  margin-bottom: 15px;
  margin-left: 0px;
}
} 
`;

export const SuccessState = styled.p`
  color: aquamarine;
  text-shadow: 1px 1px 1px black;
  padding-top: 20px;
`;

export const ErrorState = styled.p`
  color: #b00020;
  padding-top: 22px;
`;

function Subscribe() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState(null);

  const subscribe = async (e) => {
    e.preventDefault();
    setState("Loading");
    try {
      const response = await axios.post("/api/subscribe", { email });
      setState("Success");
      setEmail("");
    } catch (e) {
      setErrorMsg(e.response.data.error);
      setState("Error");
    }
  };

  return (
    <>
      <SubscribeContainer onSubmit={subscribe}>
        <SubFormContainer>
          <Input
            required
            name="email"
            type="email"
            placeholder="enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button
            disabled={state === "Loading"}
            type="submit"
            onClick={subscribe}
          >
            Subscribe
          </Button>
        </SubFormContainer>
        {state === "Error" && <ErrorState>{errorMsg}</ErrorState>}
        {state === "Success" && (
          <SuccessState>Awesome, you are now subscribed!</SuccessState>
        )}
      </SubscribeContainer>
    </>
  );
}

export default Subscribe;
