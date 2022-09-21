import styled from 'styled-components'


export const MailchimpWrapper = styled.div`
// background: aquamarine;
padding-top: 15px; 
grid-area: right;
// border: solid 2px black;
display: grid;
grid-template-rows: 1fr 1fr;
grid-template-areas:
'a'
'b';
 

@media only screen and (max-width: 1024px) {
  padding: 0;
}
`

export const CTA = styled.div`
padding: 20px;  
grid-area: a;
display: flex;
justify-content: flex-end;
flex-direction: column;

@media only screen and (max-width: 600px) {
padding-top: 45px;
}
`

export const ContentTitle = styled.h4`
font-size: 25px;
color: #000;
opacity: 0.8;
text-shadow: 1px 1px 1px teal;

@media only screen and (max-width: 768px) {
    margin: 0;
}

@media only screen and (max-width: 531px) {
    font-size: 20px;
    text-align: center;
    margin: 5px;
}
`



export const ContentParagraph = styled.div`
font-size: 20px;
padding-top: 10px;
color: #000;
opacity: 0.7;
// text-shadow: 1px 1px 1px #772E25;

a {
  color: #000;
  padding: 0 6px;
  &:hover {
    color: aquamarine;
    transition: 1s;
  }
}

@media only screen and (max-width: 834px) {
   font-size: 18px;
}

@media only screen and (max-width: 531px) {
  font-size: 18px;
}
`


export const MailchimpContainer = styled.div`

@media only screen and (max-width: 531px) {
  }
`