import styled from "styled-components"


const Wrapper = styled.footer`
width: 100%;
display: flex;
justify-content: center;
padding: 10px 5px;
margin-top: 100px;
opacity: 0.8;
`


const Footer = () => {
  return (
    <Wrapper>
    Elsa Hovey- Copyright @2022
    </Wrapper>
  )
}

export default Footer