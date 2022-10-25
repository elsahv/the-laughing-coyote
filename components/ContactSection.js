import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import styled from "styled-components";

export const ContentWrapper = styled.div`
  text-align: right;
  padding: 10px 20px;
  width: 1350px;
  // height: 400px;
  margin-right: 10px;

  p {
    font-size: 22px;
    padding: 10px 0;
  }

  @media only screen and (max-width: 600px) {
    padding: 20px 15px;
  }
`;

export const CTA = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 10px;

  a {
    font-size: 25px;
    // font-weight: bold;
    // margin: 20px 10px;
    color: #000;
    text-decoration: underline;
  }
  a:hover {
    color: #fff;
    transition: 1s;
  }

  @media only screen and (max-width: 768px) {
    a {
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 768px) {
    a {
      font-size: 20px;
    }
  }
`;

export const SmIcons = styled.div`
  padding: 50px 10px 10px 10px;
  display: flex;
  flex-direction: column;

  a {
    color: #000;
    margin: 5px;
    font-size: 22px;
    text-decoration: none;
    &:hover {
      color: #3aa1aa;
      transition: 1s;
    }
  }
`;

const ContactSection = () => {
  return (
    <>
      <ContentWrapper id="contact">
        <CTA>
          <p>You can reach me at:</p>

          <a href="mailto:devdesignsbyelsa@gmail.com">
            devdesignsbyelsa@gmail.com
          </a>
          <SmIcons>
            <p>You can also find me on:</p>
            <a className="sm-icon" href="http://github.com/elsahv">
              <FaGithub /> Github
            </a>
            <a className="sm-icon" href="https://linkedin.com/in/elsa-hovey">
              <FaLinkedin /> LinkedIn
            </a>
            <a
              className="sm-icon"
              href="https://www.instagram.com/elsahoveydevdesign/"
            >
              <FaInstagram /> Instagram
            </a>
          </SmIcons>
        </CTA>
      </ContentWrapper>
    </>
  );
};
export default ContactSection;
