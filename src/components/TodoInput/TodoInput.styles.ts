import styled from 'styled-components';

interface InputContainerProps {
  darkMode?: boolean;
}

export const InputContainer = styled.form<InputContainerProps>`
  width: 100%;
  background-color: ${({ darkMode }) => darkMode ? '#25273c' : '#fafafa'};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin-bottom: 24px;
  box-shadow: 0 35px 50px -15px rgba(0, 0, 0, 0.5);
`;

export const CircleCheckbox = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #393a4c;
  margin-right: 16px;
  flex-shrink: 0;
`;

interface InputProps {
  darkMode?: boolean;
}

export const Input = styled.input<InputProps>`
  background-color: transparent;
  border: none;
  color: ${({ darkMode }) => darkMode ? '#cacde8' : '#777a92'};
  font-size: 18px;
  width: 100%;
  outline: none;
  
  &::placeholder {
    color: ${({ darkMode }) => darkMode ? '#777a92' : '#cacde8'};
  }
`;
