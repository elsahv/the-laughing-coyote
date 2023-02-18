import styled from "styled-components";

export const PostTitle = styled.h2`
  // background: pink;
  margin-top: 50px;
  padding: 10px 5px;
  text-transform: capitalize;
`;

export const Image = styled.img`
  border: solid 1px #000;
  width: 550px;
  height: 550px;
  cursor: pointer;
  @media only screen and (max-width: 1024px) {
    width: 450px;
    height: 290px;
  }
  @media only screen and (max-width: 834px) {
    width: 390px;
    height: 250px;
  }

  @media only screen and (max-width: 400px) {
    width: 340px;
  }
`;

export const PostDescription = styled.p`
  // background: pink;
  padding: 15px;
  @media only screen and (max-width: 1024px) {
    padding-right: 100px;
  }
  @media only screen and (max-width: 834px) {
    padding-right: 40px;
  }
  @media only screen and (max-width: 531px) {
    padding: 5px;
  }
`;

export const Button = styled.button`
  margin-left: 10px;
  border: solid 1px #000;
  border-radius: 5px;
  background: lightgray;
  padding: 2px 5px;
  a {
    color: #000;
    text-decoration: none;
  }
  @media only screen and (max-width: 531px) {
    padding: 0;
    margin: 0;
  }
  //
`;
