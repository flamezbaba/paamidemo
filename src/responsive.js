import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 850px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (min-width: 450px) and (max-width: 850) {
      ${props}
    }
  `;
};

export const laptop = (props) => {
  return css`
    @media only screen and (min-width: 855px) {
      ${props}
    }
  `;
};