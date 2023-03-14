import styled from "styled-components";

export const Wrapper = styled.div`
  // background: lightgray;
  margin-top: 50px;
`;

export const Title = styled.h2`
  font-size: 40px;

  @media only screen and (max-width: 531px) {
    font-size: 30px;
  }
`;

export const Description = styled.p`
  margin: 10px 0;
`;

export const ImgWrapper = styled.div`
  margin-right: 10px;
  border: 1px solid #000;
`;

export const Ul = styled.ul`
  padding-bottom: 50px;
  padding-top: 10px;
  padding-left: 30px;
  margin-bottom: 50px;
  font-size: 18px;
`;

export const ServiceTitle = styled.h3`
  font-size: 25px;
  // padding-top: 55px;
  padding-bottom: 3px;
  @media only screen and (max-width: 531px) {
    font-size: 17px;y
  }
`;
