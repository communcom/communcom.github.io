import React from "react"
import { styled } from "linaria/react"
import { rgba } from "polished"

import lineMouseSvg from "../../../images/line-mouse.svg"
import { withTheme } from "../../../styles/themes"
import { up } from "../../../styles"
import LinksButtons from "../../common/LinksButtons"

import appImg from "../../../images/app.png"

const Wrapper = withTheme(styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -30px;
  padding: 45px 30px 120px;
  background-color: ${({ theme }) => rgba(theme.colors.blue, 0.12)};
  background-image: url("/particles-mobile.svg");
  background-position: center;
  background-repeat: no-repeat;

  ${up.tablet} {
    margin-bottom: -60px;
    padding: 32px 30px 82px;
    background-image: url("/particles.svg");
  }
`)

const Header = styled.div`
  max-width: 1080px;
  width: 100%;

  ${up.desktop} {
    margin-bottom: -45px;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  font-family: "Open Sans", "system";
  letter-spacing: -0.3px;
`

const Commun = withTheme(styled.span`
  margin-right: 6px;
  font-weight: bold;
  font-size: 23.792px;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.black};
`)

const Slash = withTheme(styled.span`
  font-weight: 800;
  font-size: 29.74px;
  line-height: 35px;
  color: ${({ theme }) => theme.colors.blue};
  transform: translateY(2px);
`)

const Content = styled.div`
  display: flex;
  max-width: 1080px;

  ${up.tablet} {
    padding-bottom: 155px;
    background-image: url("${lineMouseSvg}");
    background-repeat: no-repeat;
    background-position: bottom center;
  }

  ${up.desktop} {
    padding-bottom: 0;
  }
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const AppImg = styled.img`
  display: none;

  ${up.tablet} {
    display: block;
    margin-bottom: -60px;
    max-width: 463px;
  }
`

const Title = styled.div`
  margin-top: 45px;
  font-family: "Montserrat", "system";
  font-weight: bold;
  font-size: 52px;
  line-height: 100%;
  color: #000000;

  ${up.tablet} {
    margin-top: 122px;
    letter-spacing: -3px;
  }

  ${up.desktop} {
    margin-top: 0;
  }
`

const ImportantText = withTheme(styled.div`
  margin-top: 37px;
  font-family: "Open Sans", "system";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: ${({ theme }) => theme.colors.blue};

  ${up.tablet} {
    margin-top: 32px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
  }
`)

const DescriptionText = styled.div`
  margin-top: 20px;
  font-family: "Open Sans", "system";
  font-size: 20px;
  line-height: 27px;
  color: #000000;

  ${up.tablet} {
    margin-top: 10px;
    font-size: 16px;
    line-height: 22px;
  }
`

const ButtonsWrapper = styled.div`
  margin-top: 65px;

  ${up.tablet} {
    margin-top: 32px;
    margin-bottom: 35px;
  }
`

const Mobile = styled.div`
  display: block;

  ${up.tablet} {
    display: none;
  }
`

const Tablet = styled.div`
  display: none;

  ${up.tablet} {
    display: block;
  }
`

const Desktop = styled.div`
  display: none;

  ${up.desktop} {
    display: block;
  }
`

const Hero = () => {
  return (
    <Wrapper>
      <Header>
        <LogoWrapper>
          <Commun>commun</Commun>
          <Slash>/</Slash>
        </LogoWrapper>
      </Header>
      <Content>
        <Main>
          <Title>The blockchain-based social network </Title>
          <ImportantText>Open source now!</ImportantText>
          <DescriptionText>
            The blockchain-based social network where anyone can monetise
            her/his talents in independent self-governed communities
          </DescriptionText>
          <DescriptionText>
            Launched in December 2019, beta-tested (web, mobile versions) till
            October 2020.
          </DescriptionText>
          <ButtonsWrapper>
            <Mobile>
              <LinksButtons type="big" />
            </Mobile>
            <Tablet>
              <LinksButtons />
            </Tablet>
          </ButtonsWrapper>
        </Main>
        <Desktop>
          <AppImg src={appImg} />
        </Desktop>
      </Content>
    </Wrapper>
  )
}

export default Hero
