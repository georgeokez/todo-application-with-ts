import styled, { css } from 'styled-components';

interface TodoListContainerProps {
  darkMode: boolean;
  isDraggingOver?: boolean;
}

export const TodoListContainer = styled.div<TodoListContainerProps>`
  width: 100%;
  background-color: ${({ darkMode }) => darkMode ? '#25273c' : '#fafafa'};
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 35px 50px -15px rgba(0, 0, 0, 0.5);

  ${({ isDraggingOver, darkMode }) => isDraggingOver && css`
    background-color: ${darkMode ? '#2d2f44' : '#f5f5f5'};
  `}
`;

export const EmptyList = styled.div<TodoListContainerProps>`
  padding: 20px;
  text-align: center;
  color: ${({ darkMode }) => darkMode ? '#777a92' : '#9394a5'};
`;

