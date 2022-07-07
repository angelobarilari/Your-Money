import styled from "styled-components";

export const StyledBackground = styled.main`
  background-color: #a19b9b;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: fit-content;
  padding: 25px 30px;
  border-radius: 10px;
  @media screen and (min-width: 1000px) {
    gap: 30px;
    flex-direction: row;
    justify-content: space-between;
  }
`;
