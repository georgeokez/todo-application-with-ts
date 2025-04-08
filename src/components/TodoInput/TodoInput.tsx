import React, { useState } from 'react';
import { useTodo } from '../../contexts/TodoContext';
import { InputContainer, CircleCheckbox, Input } from './TodoInput.styles';

const TodoInput: React.FC = () => {
  const [text, setText] = useState('');
  const { addTodo, darkMode } = useTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <InputContainer darkMode={darkMode} onSubmit={handleSubmit}>
      <CircleCheckbox />
      <Input 
        placeholder="Create a new todo..." 
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
        darkMode={darkMode}
      />
    </InputContainer>
  );
};

export default TodoInput;