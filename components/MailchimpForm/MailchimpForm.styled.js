import styled from 'styled-components'



export const SubscribeContainer = styled.form`
width: 100%;
padding: 10px 10px 10px 20px;
   
@media only screen and (max-width: 600px) {
  // margin: 20px;
}
`


export const SubFormContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%;
    display: block;
  }
 `




export const Input = styled.input`
padding: 5px 10px 5px 10px;
border-radius: 4px;
border: 1px solid #000;
font-size: 16px;
background: #fff;

@media (max-width: 600px) {
width: 220px;
}
`


export const Button = styled.button`
color: teal;
  padding: 5px 10px 5px 10px;
  margin-left: 10px; 
  border: solid 2px black;
  border-radius: 4px;
  font-weight: bold;
  background: aquamarine;
  cursor: pointer;
      /* :disabled {
        background: #636262;
    color: #cbced0;
      } */
  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

@media (max-width: 600px) {
  margin-top: 10px;
  margin-left: 0;
}
} 
`

export const SuccessState = styled.p`
  color: aquamarine;
  padding-top: 20px;
`

export const ErrorState = styled.p`
  color: #b00020;
  padding-top: 22px;
`



 