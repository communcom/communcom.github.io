import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { styled } from "linaria/react"

import Item from "./Item"

// import PlayIcon from "../../../../images/icons/play-icon.svg"
import ArrowIcon from "../../../../images/icons/arrow-icon.svg"
import { up } from "../../../../styles"
// import { withTheme } from "../../../../styles/themes"

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1080px;
  user-select: none;
`

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #f3f5fa;
  /*
  border: 9px solid #f3f5fa;
   */
  border-radius: 10px;
  box-shadow: 0 22px 56px rgba(121, 130, 172, 0.3);

  & > iframe {
    width: 342px;
    height: 191px;
  }

  ${up.tablet} {
    & > iframe {
      width: 560px;
      height: 311px;
    }
  }

  ${up.desktop} {
    & > iframe {
      width: 790px;
      height: 437px;
    }
  }
`

// const PlayWrapper = withTheme(styled.div`
//   position: absolute;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 72px;
//   height: 72px;
//   background-color: #f9a468;
//   box-shadow: -0.77px 11.06px 76.15px rgba(249, 164, 104, 0.3);
//   transition: background-color 0.3s, box-shadow 0.3s, height 0.3s, width 0.3s;
//   border-radius: 50%;
//
//   & svg {
//     width: 23.49px;
//     height: 26.19px;
//     margin-left: 10%;
//     transition: height 0.3s, width 0.3s;
//   }
//
//   ${up.tablet} {
//     width: 120px;
//     height: 120px;
//
//     & svg {
//       width: 39.14px;
//       height: 43.66px;
//     }
//   }
//
//   &:hover,
//   &:active {
//     width: 82px;
//     height: 82px;
//     background-color: ${({ theme }) => theme.colors.blue};
//     box-shadow: -0.77px 11.06px 76.15px rgba(106, 128, 245, 0.5);
//
//     & svg {
//       width: 26.49px;
//       height: 29.19px;
//     }
//
//     ${up.tablet} {
//       width: 130px;
//       height: 130px;
//
//       & svg {
//         width: 42.41px;
//         height: 47.29px;
//       }
//     }
//   }
// `)

const ArrowIconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  width: 44px;
  height: 44px;
  background: #ffffff;
  box-shadow: -0.77px 11.06px 76.15px rgba(95, 93, 191, 0.6);
  border-radius: 50%;
  cursor: pointer;
  z-index: 5;

  & > svg {
    padding-left: 2px;
  }

  &:hover,
  &:active {
    background: #f3f5fa;
  }

  &.left {
    left: 20px;
    margin-top: -22px;
    transform: rotate(180deg);
  }

  &.right {
    right: 20px;
    margin-top: -22px;
  }
`

export default class Carousel extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  static defaultProps = {
    items: [],
  }

  state = {
    activeIndex: 0,
  }

  handleSelectToken = (index) => () => {
    this.setState({ activeIndex: index })
  }

  handleNext = () => {
    const { activeIndex } = this.state

    this.setState({ activeIndex: activeIndex + 1 })
  }

  handlePrev = () => {
    const { activeIndex } = this.state

    this.setState({ activeIndex: activeIndex - 1 })
  }

  prepareItems() {
    const { items } = this.props

    return items.map((item, index) => (
      <ItemWrapper key={item.embed} onClick={this.handleSelectToken(index)}>
        <iframe
          src={item.embed}
          frameBorder="0"
          allow="fullscreen"
          allowFullScreen
        />
        {/*<PlayWrapper>*/}
        {/*  <PlayIcon />*/}
        {/*</PlayWrapper>*/}
      </ItemWrapper>
    ))
  }

  renderItems() {
    const { activeIndex } = this.state

    const items = this.prepareItems()

    const newItems = []

    for (let i = 0; i < items.length; i++) {
      let index = i

      if (i < 0) {
        index = items.length + i
      }

      newItems.push(
        <Item key={i} className={`${i}`} level={i - activeIndex}>
          {items[index]}
        </Item>
      )
    }

    return newItems
  }

  render() {
    const { items } = this.props
    const { activeIndex } = this.state

    return (
      <Wrapper>
        {activeIndex !== 0 ? (
          <ArrowIconWrapper className="left" onClick={this.handlePrev}>
            <ArrowIcon />
          </ArrowIconWrapper>
        ) : null}
        {this.renderItems()}
        {activeIndex !== items.length - 1 ? (
          <ArrowIconWrapper className="right" onClick={this.handleNext}>
            <ArrowIcon />
          </ArrowIconWrapper>
        ) : null}
      </Wrapper>
    )
  }
}
