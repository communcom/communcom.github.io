import React, { useCallback, useState } from "react"
import { styled } from "linaria/react"
import { up } from "../../../styles"
import { withTheme } from "../../../styles/themes"
import Button from "../../common/Button"
import Carousel from "./Carousel"

import firstImg from "../../../images/carousel/first.png"
import secondImg from "../../../images/carousel/second.png"

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
  margin-top: 55px;

  ${up.tablet} {
    margin-top: 30px;
  }
`

const TakeLook = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const items = [
    {
      image: secondImg,
    },
    {
      image: firstImg,
    },
    {
      image: firstImg,
    },
  ]

  const handleSelect = useCallback(
    (_, index) => {
      setActiveIndex(index)
    },
    [setActiveIndex]
  )

  const handleSetActiveIndex = (index) => () => {
    setActiveIndex(index)
  }

  return (
    <Wrapper>
      <Title>Take a look on it in action!</Title>
      <ButtonsWrapper>
        <ScrollContainer>
          <Button
            className={activeIndex !== 0 && "glassy"}
            onClick={handleSetActiveIndex(0)}
          >
            Basic Activities
          </Button>
          <Button
            className={activeIndex !== 1 && "glassy"}
            onClick={handleSetActiveIndex(1)}
          >
            Personal Wallet
          </Button>
          <Button
            className={activeIndex !== 2 && "glassy"}
            onClick={handleSetActiveIndex(2)}
          >
            Community Management
          </Button>
        </ScrollContainer>
      </ButtonsWrapper>
      <CarouselWrapper>
        <Carousel
          items={items}
          activeIndex={activeIndex}
          onSelect={handleSelect}
        />
      </CarouselWrapper>
    </Wrapper>
  )
}

export default TakeLook
