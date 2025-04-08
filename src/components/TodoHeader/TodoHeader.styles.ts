import styled from "styled-components";

export const StyledTodoHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
  
  h1 {
    font-size: 2.5rem;
    letter-spacing: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: white;

    @media (max-width: 375px) {
      font-size: 2rem;
      letter-spacing: 10px;
    }
  }
`;

export const ThemeToggler = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SunIcon = styled.div`
  background: url('/images/icon-sun.svg') no-repeat center center;
  width: 30px;
  height: 30px;
`;

export const MoonIcon = styled.div`
  background: url('/images/icon-moon.svg') no-repeat center center;
  width: 30px;
  height: 30px;
`;  
