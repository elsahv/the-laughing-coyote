import styled from "styled-components";

export const Wrapper = styled.div`
  // background: lightgray;
  margin-top: 100px;
`;

// export const Container = styled.div`
//   padding-top: 200px;
// `;

export const Title = styled.h2`
  font-size: 40px;

  @media only screen and (max-width: 531px) {
    font-size: 30px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
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
  font-size: 20px;
`;

export const ServiceTitle = styled.h3`
  font-size: 30px;
  padding-top: 55px;
  padding-bottom: 3px;
  @media only screen and (max-width: 531px) {
    font-size: 17px;y
  }
`;
