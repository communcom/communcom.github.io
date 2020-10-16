import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { styled } from "linaria/react"

import Item from "./Item"

import PlayIcon from "../../../../images/icons/play-icon.svg"
import { up } from "../../../../styles"
import { withTheme } from "../../../../styles/themes"

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  user-select: none;
`

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #f3f5fa;
  border: 9px solid #f3f5fa;
  border-radius: 10px;
  box-shadow: 0 22px 56px rgba(121, 130, 172, 0.3);
`

const Img = styled.img`
  max-height: 450px;
  max-width: 100%;
  border-radius: 10px;
`

const PlayWrapper = withTheme(styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  background-color: #f9a468;
  box-shadow: -0.77px 11.06px 76.15px rgba(249, 164, 104, 0.3);
  transition: background-color 0.3s, box-shadow 0.3s, height 0.3s, width 0.3s;
  border-radius: 50%;

  & svg {
    width: 23.49px;
    height: 26.19px;
    margin-left: 10%;
    transition: height 0.3s, width 0.3s;
  }

  ${up.tablet} {
    width: 120px;
    height: 120px;

    & svg {
      width: 39.14px;
      height: 43.66px;
    }
  }

  &:hover,
  &:active {
    width: 82px;
    height: 82px;
    background-color: ${({ theme }) => theme.colors.blue};
    box-shadow: -0.77px 11.06px 76.15px rgba(106, 128, 245, 0.5);

    & svg {
      width: 26.49px;
      height: 29.19px;
    }

    ${up.tablet} {
      width: 130px;
      height: 130px;

      & svg {
        width: 42.41px
        height: 47.29px
      }
    }
  }
`)

export default class Carousel extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    activeIndex: PropTypes.number.isRequired,

    onSelect: PropTypes.func.isRequired,
  }

  static defaultProps = {
    items: [],
  }

  handleSelectToken = (item, index) => () => {
    const { onSelect } = this.props

    onSelect(item, index)
  }

  prepareItems() {
    const { items } = this.props

    return items.map((item, index) => (
      <ItemWrapper
        key={item.image}
        onClick={this.handleSelectToken(item, index)}
      >
        <Img src={item.image} />
        <PlayWrapper>
          <PlayIcon />
        </PlayWrapper>
      </ItemWrapper>
    ))
  }

  renderItems() {
    const { activeIndex } = this.props

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
    return <Wrapper>{this.renderItems()}</Wrapper>
  }
}
