import React, { useState } from "react"
import { styled } from "linaria/react"
import { up } from "../../../styles"
import { withTheme } from "../../../styles/themes"
import Button from "../../common/Button"
import Carousel from "./Carousel"

const Wrapper = withTheme(styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 85px;
  background-color: ${({ theme }) => theme.colors.blue};
  overflow: hidden;

  ${up.tablet} {
    padding: 100px 0;
  }
`)

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
    max-width: initial;
    font-size: 44px;
  }
`)

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 100%;

  overflow: hidden;
`

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 10px 30px;

  /* Firefox */
  scrollbar-width: none;
  /* Chrome */
  &::-webkit-scrollbar-thumb {
    background: none;
  }
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  & > :not(:last-child) {
    margin-right: 15px;
  }
`

const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 55px;

  ${up.tablet} {
    margin-top: 30px;
  }
`

const items = {
  0: [
    {
      // image: secondImg,
      embed: "https://kinescope.io/embed/199680070", // Comments
    },
    {
      embed: "https://kinescope.io/embed/199680072", // Donations
    },
    {
      embed: "https://kinescope.io/embed/199680065", // Post with image
    },
    {
      embed: "https://kinescope.io/embed/199680069", // Post with video link
    },
    {
      embed: "https://kinescope.io/embed/199680068", // Rewards
    },
  ],
  1: [
    {
      embed: "https://kinescope.io/embed/199680071", // Personal wallet
    },
  ],
  2: [
    {
      embed: "https://kinescope.io/embed/199680067", // Manage communities
    },
    {
      embed: "https://kinescope.io/embed/199680066", // Create community
    },
  ],
}

const TakeLook = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleSetActiveTab = (index) => () => {
    setActiveTab(index)
  }

  return (
    <Wrapper>
      <Title>Take a look on it in action!</Title>
      <ButtonsWrapper>
        <ScrollContainer>
          <Button
            className={activeTab !== 0 && "glassy"}
            onClick={handleSetActiveTab(0)}
          >
            Basic Activities
          </Button>
          <Button
            className={activeTab !== 1 && "glassy"}
            onClick={handleSetActiveTab(1)}
          >
            Personal Wallet
          </Button>
          <Button
            className={activeTab !== 2 && "glassy"}
            onClick={handleSetActiveTab(2)}
          >
            Community Management
          </Button>
        </ScrollContainer>
      </ButtonsWrapper>
      <CarouselWrapper>
        <Carousel key={`carousel-${activeTab}`} items={items[activeTab]} />
      </CarouselWrapper>
    </Wrapper>
  )
}

export default TakeLook
