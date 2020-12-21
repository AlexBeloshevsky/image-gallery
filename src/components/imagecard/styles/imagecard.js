import styled from "styled-components";

export const Card = styled.div`
  height: 14vh;
  flex-grow: 1;
  padding: 2%;

  &:last-child {
    flex-grow: 10;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2% 2% 2% 0;
  padding-bottom: 2.5rem;
`;

export const Image = styled.img`
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
  border-radius: 4px;
`;

export const Button = styled.button`

`;
