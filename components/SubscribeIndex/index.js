import Link from 'next/link'
import MailchimpForm from '../MailchimpForm'
import {
  MailchimpWrapper,
  CTA,
  ContentTitle,
  ContentParagraph,
  MailchimpContainer
} from './SubscribeIndex.styled'

 

const SubscribeCTA = () => {
  return (
    <MailchimpWrapper>
    <CTA>
      <ContentTitle>
     Weekly Newsletter
     {/* DESCRIPTION OF NEWSLETTER... PLANTS, FOOD, WEB DEVELOPMENT AND BUILDING NICHE SITES */}
        </ContentTitle>

      <ContentParagraph>
    Regarding food, plants, and other writings...  Subscribe for post updates! Or you can 
    <Link href="/newsletter">
    read the newsletter first
    </Link>
        </ContentParagraph>
      </CTA>
        <MailchimpContainer>
          <MailchimpForm />
        </MailchimpContainer>
     </MailchimpWrapper>
  )
}

export default SubscribeCTA