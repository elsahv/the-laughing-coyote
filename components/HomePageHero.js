import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  background: pink;
  padding: 100px;
`;

const HomePageHero = () => {
  return (
    <Section>
      <h2>Web Design for Creatives and Small Businesses</h2>
      <h3>Stand out in the crowd</h3>
      <h2>Info</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio similique
        itaque quam impedit assumenda, ipsa porro beatae. Natus veritatis
        facilis fugiat saepe, quisquam maxime impedit iure voluptatibus
        consequuntur, molestias unde.
      </p>
      <button style={{ width: "100px", height: "20px" }}>CTA BUTTON</button>
    </Section>
  );
};

export default HomePageHero;
