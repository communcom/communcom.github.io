import { styled } from "linaria/react"
import { withTheme } from "../../../styles/themes"

const Button = withTheme(styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.blue};
  font-family: "Open Sans", "system";
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  white-space: nowrap;
  background: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 16px;
  appearance: none;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.3s, background 0.3s;

  &:hover,
  &:active {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  }

  &.primary {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.blue};
    box-shadow: -0.77px 11.06px 36.15px rgba(106, 128, 245, 0.4);

    &:hover,
    &:active {
      background: #7a8ffd;
      box-shadow: -0.77px 11.06px 44px rgba(106, 128, 245, 0.5);
    }
  }

  &.glassy {
    color: ${({ theme }) => theme.colors.white};
    background: rgba(255, 255, 255, 0.1);
    box-shadow: -0.77px 11.06px 36.15px rgba(106, 128, 245, 0.4);

    &:hover,
    &:active {
      background: rgba(255, 255, 255, 0.12);
      box-shadow: -0.77px 11.06px 44px rgba(106, 128, 245, 0.5);
    }
  }

  &.black {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.black};
    box-shadow: -0.77px 11.06px 36.15px rgba(37, 37, 37, 0.4);

    &:hover,
    &:active {
      background: #282828;
    }
  }

  &.big {
    height: 60px;
    font-size: 18px;
  }
`)

export default Button
