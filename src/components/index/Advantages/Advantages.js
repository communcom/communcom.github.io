import React, { useEffect, useState } from "react"
import { styled } from "linaria/react"
import { up } from "../../../styles"
import Button from "../../common/Button"
import GithubIcon from "../../../images/icons/github-icon.svg"
import lineBetweenSvg from "../../../images/line-between.svg"
import lineBetweenMobileSvg from "../../../images/line-between-mobile.svg"
import lineBottomSvg from "../../../images/line-bottom.svg"
import lineBottomMobileSvg from "../../../images/line-bottom-mobile.svg"
import pointsOverlayImg from "./../../../images/points-overlay.png"
import hashtagOverlayImg from "./../../../images/hashtag-overlay.png"

import firstImg from "../../../images/advantages/first.png"
import secondImg from "../../../images/advantages/second.png"
import thirdImg from "../../../images/advantages/third.png"
import { withTheme } from "../../../styles/themes"

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
  padding: 50px 30px 78px;
  border-radius: 30px 30px 0 0;
  z-index: 1;
  overflow: hidden;

  &::before {
    position: absolute;
    content: "";
    height: 1365px;
    width: 100%;
    top: 0;
    z-index: -1;
    background: linear-gradient(180deg, #ffffff 0%, #f3f5fa 100%);

    ${up.tablet} {
      height: 895px;
    }
  }

  &::after {
    position: absolute;
    content: "";
    height: 746px;
    width: 100%;
    bottom: 0;
    z-index: -1;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      #f3f5fa 100%
    );
    transform: rotate(-180deg);

    ${up.tablet} {
      height: 1059px;
    }
  }

  ${up.tablet} {
    flex-flow: column;
    padding: 82px 30px 106px;
    border-radius: 60px 60px 0 0;
  }
`

const Title = styled.div`
  margin-bottom: 50px;
  font-family: "Montserrat", "system";
  font-weight: bold;
  font-size: 33px;
  line-height: 100%;
  text-align: center;
  letter-spacing: -2px;
  color: #000000;

  ${up.tablet} {
    margin-bottom: 96px;
    font-size: 40px;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 545px;
  padding: 24px 24px 0;
  max-width: 900px;
  background: #ffffff;
  box-shadow: 0 22px 56px rgba(184, 191, 221, 0.3);
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;

  ${up.tablet} {
    flex-direction: row;
    height: 294px;
    overflow: initial;
  }
`

const CardContent = styled.div`
  padding-bottom: 33px;

  ${up.tablet} {
    &.left {
      order: 0;
      padding: 42px 0 0 72px;
    }

    &.right {
      order: 2;
      padding: 42px 72px 0 0;
    }
  }
`

const CardTitle = withTheme(styled.div`
  position: relative;
  margin-bottom: 33px;
  font-family: "Open Sans", "system";
  font-weight: bold;
  font-size: 32px;
  line-height: 120%;
  letter-spacing: -2px;
  color: ${({ theme }) => theme.colors.blue};

  ${up.tablet} {
    margin-bottom: 15px;
  }
`)

const CardText = withTheme(styled.div`
  font-family: "Open Sans", "system";
  font-size: 18px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.black};
`)

const FirstImg = styled.img`
  position: relative;
  order: 1;
  align-self: center;
  max-width: 369px;
  right: 20px;
  bottom: 60px;
  transition: translateY 0.3s;

  ${up.tablet} {
    right: -20px;
    bottom: 10px;
    margin-left: -15px;
  }
`

const SecondImg = styled.img`
  position: relative;
  order: 1;
  align-self: center;
  max-width: 369px;
  bottom: 85px;
  left: -20px;
  transition: translateY 0.3s;

  ${up.tablet} {
    bottom: 40px;
    left: -55px;
    margin-right: -39px;
  }
`

const ThirdImg = styled.img`
  position: relative;
  order: 1;
  align-self: center;
  max-width: 357px;
  bottom: 115px;
  transition: translateY 0.3s;

  ${up.tablet} {
    right: -60px;
    bottom: 60px;
  }
`

const PointsOverlayImg = styled.img`
  display: none;

  ${up.desktop} {
    display: block;
    position: absolute;
    left: -180px;
    top: -25px;
    max-width: 155px;
  }
`

const HashtagOverlayImg = styled.img`
  display: none;

  ${up.desktop} {
    display: block;
    position: absolute;
    right: -165px;
    top: -25px;
    max-width: 172px;
  }
`

const LineBetweenWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-image: url("${lineBetweenMobileSvg}");
  background-repeat: no-repeat;
  background-position: center;

  ${up.tablet} {
    height: 219px;
    background-image: url("${lineBetweenSvg}");
  }
`

const LineBottomWrapper = styled.div`
  width: 100%;
  height: 69px;
  background-image: url("${lineBottomMobileSvg}");
  background-repeat: no-repeat;
  background-position: center;

  ${up.tablet} {
    height: 219px;
    background-image: url("${lineBottomSvg}");
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${up.tablet} {
    flex: initial;
  }
`

const GithubIconStyled = styled(GithubIcon)`
  margin-right: 10px;
`

const Advantages = () => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Wrapper>
      <Title>
        The new generation
        <br /> of social platform
      </Title>
      <Card>
        <CardContent className="left">
          <CardTitle>
            <PointsOverlayImg
              src={pointsOverlayImg}
              style={{
                transform: `translateY(${offset * 0.01}px)`,
              }}
            />
            Users get rewards and donations
          </CardTitle>
          <CardText>
            Create posts, vote for posts, comment them, and get rewards and
            donations in Community Points.
          </CardText>
        </CardContent>
        <FirstImg
          src={firstImg}
          style={{
            transform: `translateY(${offset * 0.05}px)`,
          }}
        />
      </Card>
      <LineBetweenWrapper />
      <Card>
        <SecondImg
          src={secondImg}
          style={{
            transform: `translateY(${offset * 0.05}px)`,
          }}
        />
        <CardContent className="right">
          <CardTitle>
            Interest-based communities
            <HashtagOverlayImg
              src={hashtagOverlayImg}
              style={{
                transform: `translateY(${offset * 0.01}px)`,
              }}
            />
          </CardTitle>
          <CardText>
            Join the communities on topics you like or launch and govern your
            own.
          </CardText>
        </CardContent>
      </Card>
      <LineBetweenWrapper />
      <Card>
        <CardContent className="left">
          <CardTitle>Social network on blockchain</CardTitle>
          <CardText>Be the sole owner of your account.</CardText>
        </CardContent>
        <ThirdImg
          src={thirdImg}
          style={{
            transform: `translateY(${offset * 0.05}px)`,
          }}
        />
      </Card>
      <LineBottomWrapper />
      <ButtonWrapper>
        <Button
          as="a"
          href="https://github.com/communcom"
          rel="noopener noreferrer noindex"
          target="_blank"
          className="black"
        >
          <GithubIconStyled />
          Go to GitHub repository
        </Button>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Advantages
