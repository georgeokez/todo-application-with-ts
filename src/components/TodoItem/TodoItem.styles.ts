import styled, { css } from 'styled-components';

interface TodoItemContainerProps {
  darkMode: boolean;
  isDragging?: boolean;
}

export const TodoItemContainer = styled.div<TodoItemContainerProps>`
  display: flex;
  align-items: center;
  padding: 18px 24px;
  border-bottom: 1px solid ${({ darkMode }) => darkMode ? '#393a4c' : '#e4e5f1'};
  background-color: ${({ darkMode }) => darkMode ? '#25273c' : '#fafafa'};
  user-select: none;
  cursor: grab;
  
  ${({ isDragging, darkMode }) => isDragging && css`
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    opacity: 0.8;
    background-color: ${darkMode ? '#2d2f44' : '#f5f5f5'};
    cursor: grabbing;
  `}

  &:hover .delete-icon {
    opacity: 1;
  }
`;

interface CheckboxProps {
  completed: boolean;
}

export const Checkbox = styled.div<CheckboxProps>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-right: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${({ completed }) => 
    completed ? 
    css`
      background: linear-gradient(135deg, #55DDFF 0%, #C058F3 100%);
      border: none;
    ` : 
    css`
      border: 1px solid #393a4c;
      background: transparent;
    `
  }
`;

export const CheckIcon = styled.div`
  background: url('/images/icon-check.svg') no-repeat center center;
  width: 30px;
  height: 30px;
`;

interface TodoTextProps {
  completed: boolean;
  darkMode: boolean;
}

export const TodoText = styled.span<TodoTextProps>`
  color: ${({ completed, darkMode }) => 
    completed 
      ? (darkMode ? '#777a92' : '#d2d3db') 
      : (darkMode ? '#cacde8' : '#494c6b')
  };
  font-size: 18px;
  flex-grow: 1;
  text-decoration: ${({ completed }) => completed ? 'line-through' : 'none'};
`;

export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: #777a92;
  font-size: 18px;
  cursor: pointer;
  margin-left: 16px;
  opacity: 0;
  transition: opacity 0.2s;
  
  &:hover {
    color: #e4726b;
  }
`;

export const DragHandle = styled.div`
  cursor: grab;
  color: #777a92;
  margin-left: 10px;
  font-size: 18px;
  opacity: 0;
  transition: opacity 0.2s;
  
  ${TodoItemContainer}:hover & {
    opacity: 0.5;
  }
`;
