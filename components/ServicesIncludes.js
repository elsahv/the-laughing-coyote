import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  background: green;
`;

const ServicesIncludes = () => {
  return (
    <Section>
      <h2>ServicesIncludesAccordian</h2>
      <button>SEE PKGS BUTTON</button>
      <button>CONTACT BUTTON</button>
    </Section>
  );
};

export default ServicesIncludes;
