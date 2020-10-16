import React from "react"
import PropTypes from "prop-types"
import { styled } from "linaria/react"

const Wrapper = styled.div`
  position: absolute;
  display: inline-block;
  max-width: 790px;
  margin: 0 30px;
  transition: opacity 0.3s, transform 0.5s;
  cursor: pointer;

  &.level-2,
  &.level-1 {
    opacity: 0.75;
    z-index: 1;
  }

  &.level-2 {
    transform: translateX(0) scale(0.82);
  }

  &.level-1 {
    transform: translateX(-100px) scale(0.82);

    &:hover {
      transform: translateX(-100px) scale(0.84);
      opacity: 0.9;
    }
  }

  &.level0 {
    position: relative;
    transform: translateX(0) scale(1);
    opacity: 1;
    z-index: 3;
  }

  &.level1 {
    transform: translateX(100px) scale(0.82);

    &:hover {
      transform: translateX(100px) scale(0.84);
      opacity: 0.9;
    }
  }

  &.level2 {
    transform: translateX(0) scale(0.82);
  }

  &.level1,
  &.level2 {
    opacity: 0.75;
    z-index: 1;
  }
`

export default function Item({ level, children, className }) {
  return (
    <Wrapper className={`${className || ""} level${level}`}>{children}</Wrapper>
  )
}

Item.propTypes = {
  level: PropTypes.number.isRequired,
}
