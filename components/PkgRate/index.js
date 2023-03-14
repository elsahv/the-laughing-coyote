import Image from "next/image";
import content from "./data";
import {
  Wrapper,
  Title,
  Description,
  ServiceTitle,
  ImgWrapper,
  Ul,
} from "./PkgRate.styled";

export default function PkgRate({
  title,
  number,
  price,
  listItem1,
  listItem2,
  listItem3,
  listItem4,
  listItem5,
}) {
  return (
    <>
      <h2>Services</h2>
      <p>
        Are you a small business starting out? Or perhaps {"you're"} so busy
        running your business, you have no time or need to create a website/
        online presence.
      </p>
      <p>This is where Laughing Coyote Dev can help you.</p>
      <Wrapper>
        {content.map((item, index) => (
          <div key={index}>
            <ServiceTitle>
              Option {item.number}: {item.title}
            </ServiceTitle>
            <ImgWrapper>
              <Image
                src={item.image}
                alt="about-me"
                layout="responsive"
                className="img"
              />
            </ImgWrapper>
            <Ul>
              <li>{item.price}</li>
              <li>{item.listItem1}</li>
              <li>{item.listItem2}</li>
              <li>{item.listItem3}</li>
              <li>{item.listItem4}</li>
              <li>{item.listItem5}</li>
            </Ul>
          </div>
        ))}
      </Wrapper>
    </>
  );
}
