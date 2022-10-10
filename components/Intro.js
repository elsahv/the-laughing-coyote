import styled from "styled-components";

//STYLES
export const Quote = styled.div`
  grid-area: b;
  padding: 35px;
  margin-top: 45px;
  margin-left: 20px;
  opacity: 0.8;
  h4 {
    font-size: 35px;
    color: rgb(0, 123, 165);
  }

  p {
    font-size: 30px;
    color: aquamarine;
  }

  a {
    color: #000;
    text-decoration: underline;
    margin: 5px;
  }
  a:hover {
    color: aquamarine;
    transition: 2s;
  }

  @media only screen and (max-width: 1024px) {
    h4 {
      font-size: 27px;
      padding-top: 10px;
    }
    p {
      font-size: 20px;
    }
  }
`;
//END STYLES

const Intro = () => {
  return (
    <>
      <Quote>
        <h4>Hi there, Im Elsa.</h4>
        <p>
          Im a web developer based in Joshua Tree, CA. I create niche websites
          and solutions for small business owners and creatives.{" "}
        </p>
      </Quote>
    </>
  );
};

export default Intro;
