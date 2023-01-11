import Header from "./Header";
import styled from "styled-components";
import ContactForm from "./ContactForm";

const Wrapper = styled.div`
  // background: teal;
  overflow-y: scroll;
  height: 100vh;
  width: 45%;
  position: absolute;
  left: 0;
  z-index: 700;
  .section {
    padding: 25px;
  @media only screen and (max-width: 600px) {
  padding: 10px;
  }
  }

  @media only screen and (max-width: 600px) {
    position: relative;
    bottom: 0;
    height: 100%;
    width: 100%;
`;

const AboutSection = styled.section`
  background: orange;
  grid-area: b;
  margin-top: 500px;

  @media only screen and (max-width: 600px) {
    margin-top: 50px;
  }
`;

const ContactSection = styled.section`
  margin-top: 100px;
`;

const LeftSideWrapper = () => {
  return (
    <Wrapper>
      <Header />

      <AboutSection id="about" class="section">
        <h2>about</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quia, eos
        a ab sapiente commodi, non aut quam quod nobis voluptates debitis sunt
        rem mollitia deserunt velit fugiat facere doloremque neque. Eligendi
        accusamus repudiandae nesciunt culpa expedita ab adipisci quidem dolor
        iste, facere vero perferendis assumenda enim eveniet vel ut ratione
        aperiam nisi et saepe eum eveniet totam. Officia cumque praesentium
        consequuntur! Deleniti quibusdam deserunt nostrum reprehenderit laborum
        architecto provident sequi in ipsam dolore natus, optio corporis
        recusandae, nesciunt cumque eum modi magnam ducimus rem temporibus quos
        eius officia quo nisi? Eum iusto ullam esse dolores, dolorem at
        consequatur tempora quibusdam. Inventore reiciendis non, exercitationem
        facere culpa itaque quaerat delectus aliquid, sed placeat blanditiis!
        Aut, neque quas.
      </AboutSection>
      <ContactSection id="contact" class="section">
        <h2>contact</h2>
        <ContactForm />
      </ContactSection>
    </Wrapper>
  );
};

export default LeftSideWrapper;
