import React from 'react';
import { StyledTodoHeader, ThemeToggler, SunIcon, MoonIcon } from './TodoHeader.styles';
import { useTodo } from '../../contexts/TodoContext';

const TodoHeader: React.FC = () => {
  const { darkMode, toggleTheme } = useTodo();

  return (
    <StyledTodoHeader>
      <h1>Todo</h1>
      <ThemeToggler onClick={toggleTheme}>
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </ThemeToggler>
    </StyledTodoHeader>
  );
};

export default TodoHeader; 