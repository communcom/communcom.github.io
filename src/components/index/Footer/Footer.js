import React from "react"
import { styled } from "linaria/react"

import footerOverlayImg from "../../../images/footer-overlay.svg"
import { withTheme } from "../../../styles/themes"
import { up } from "../../../styles"

import LinksButtons from "../../common/LinksButtons"

const Wrapper = styled.div`
  background-color: #000;

  ${up.tablet} {
    background-image: url("${footerOverlayImg}");
    background-position: center 20px;
    background-repeat: no-repeat;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 30px 164px;
  background-color: #000;
  background-image: url("${footerOverlayImg}");
  background-position: center 20px;
  background-repeat: no-repeat;

  ${up.tablet} {
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
  }
`

const Title = withTheme(styled.div`
  max-width: 354px;
  font-family: "Montserrat", "system";
  font-weight: bold;
  font-size: 34px;
  line-height: 100%;
  text-align: center;
  letter-spacing: -2px;
  color: ${({ theme }) => theme.colors.white};

  ${up.tablet} {
    max-width: 400px;
    font-size: 44px;
  }
`)

const SubTitle = withTheme(styled.div`
  max-width: 473px;
  margin-top: 32px;
  font-family: "Open Sans", "system";
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
`)

const ButtonsWrapper = styled.div`
  margin-top: 41px;
  width: 100%;

  ${up.tablet} {
    justify-content: center;
    margin-top: 54px;
    width: auto;
  }
`

const Footer = () => (
  <Wrapper>
    <ContentWrapper>
      <Title>Why Commun is open-source now?</Title>
      <SubTitle>
        Thanks to the blockchain, It’s now possible for social networks to
        reward their users and provide autonomy to communities
      </SubTitle>
      <ButtonsWrapper>
        <LinksButtons type="big" />
      </ButtonsWrapper>
    </ContentWrapper>
  </Wrapper>
)

export default Footer
