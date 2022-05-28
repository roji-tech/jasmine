import styled from "styled-components";

export const HomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12em;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    gap: 4em;
  }
`;
