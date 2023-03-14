import styled from "styled-components";

export const Wrapper = styled.div`
  // margin: 50px 0 70px;
  &:hover {
    transform: rotate(2deg);
    transition: 1s;
    // opacity: 0.7;
  }
`;

export const PostTitle = styled.h3`
  padding: 10px 5px;
`;

export const Image = styled.img`
  border: solid 1px #000;
  width: 100%;
  cursor: pointer;
  &:hover {
    // transform: rotate(2deg);
    transition: 1s;
    opacity: 0.7;
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
