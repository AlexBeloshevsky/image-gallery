import styled from "styled-components";

export const Card = styled.div`
  height: 300px;
  width: 200px;
  flex-grow: 1;
  padding: 2%;

  &:last-child {
    flex-grow: 3;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2% 2% 2% 0;
  padding-bottom: 2.5rem;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 230px;
  height: 230px;
  vertical-align: bottom;
  border-radius: 4px;
  transform: rotate(${props => props.quarterRotations * 90 + 'deg' || 0 + 'deg'});
`;

export const Button = styled.button``;
