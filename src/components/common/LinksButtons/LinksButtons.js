import React from "react"
import { styled } from "linaria/react"
import Button from "../Button"
import { up } from "../../../styles"
import GithubIcon from "../../../images/icons/github-icon.svg"
import FigmaIcon from "../../../images/icons/figma-icon.svg"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  svg {
    margin-right: 10px;
  }

  & > :not(:last-child) {
    margin-bottom: 15px;
  }

  ${up.tablet} {
    flex-direction: row;

    & > :not(:last-child) {
      margin-bottom: 0;
      margin-right: 15px;
    }
  }
`

const LinksButtons = ({ type, className }) => {
  return (
    <Wrapper className={className}>
      <Button
        as="a"
        href="https://github.com/communcom"
        rel="noopener noreferrer noindex"
        target="_blank"
        className={`primary ${type}`}
      >
        <GithubIcon />
        GitHub Repository
      </Button>
      <Button
        as="a"
        href="https://www.figma.com/file/f9Lw3pn5TzkIud0fBZUV5Y/Commun-Web-Public?node-id=19952%3A0"
        rel="noopener noreferrer noindex"
        target="_blank"
        className={type}
      >
        <FigmaIcon />
        Design (Web)
      </Button>
      <Button
        as="a"
        href="https://www.figma.com/file/fP48YZ0GI0097hViabnOMH/iOs-Commun-Public?node-id=15421%3A60351"
        rel="noopener noreferrer noindex"
        target="_blank"
        className={type}
      >
        <FigmaIcon />
        Design (App)
      </Button>
    </Wrapper>
  )
}

export default LinksButtons
