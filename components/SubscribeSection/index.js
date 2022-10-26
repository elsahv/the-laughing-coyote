import MailchimpForm from "./MailchimpForm";
import Link from "next/link";
import styled from "styled-components";

const MailchimpWrapper = styled.div`
  border-top: solid 2px black;
  padding-top: 50px;
  padding-bottom: 650px;
  padding-left: 5px;
  grid-area: right;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "a"
    "b";

  @media only screen and (max-width: 834px) {
    padding: 20px 40px;
    grid-template-rows: 1fr;
    grid-template-areas: "a b";
  }
  @media only screen and (max-width: 600px) {
    padding: 10px;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "a"
      "b";
    // background: orange;
  }
`;

const ContentParagraph = styled.p`
  font-size: 18px;
  padding: 0px 30px 5px;
  background: pink;

  @media only screen and (max-width: 600px) {
    font-size: 17px;
    padding-top: 10px;
    padding-bottom: 0;
    margin-left: 170px;
  }

  @media (max-width: 412px) {
    margin-left: 420px;
  }
`;

const MailchimpContainer = styled.div``;

const SubscribeCTA = () => {
  return (
    <MailchimpWrapper id="subscribe">
      <ContentParagraph>
        A weekly newsletter regarding: food, plants, and other writings...
        <br />
        Subscribe for post updates! You can also read it for free
        <Link href="/newsletter">here</Link>
      </ContentParagraph>
      <MailchimpContainer>
        <MailchimpForm />
      </MailchimpContainer>
    </MailchimpWrapper>
  );
};

export default SubscribeCTA;
