import React from 'react';
import { useTodo } from '../../contexts/TodoContext';
import { Draggable } from 'react-beautiful-dnd';
// import { Todo } from '../../types/Todo';
import { 
  TodoItemContainer, 
  Checkbox, 
  CheckIcon, 
  TodoText, 
  DeleteButton
} from './TodoItem.styles';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  index: number;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index }) => {
  const { toggleTodo, deleteTodo, darkMode } = useTodo();

  return (
    <Draggable draggableId={todo.id} index={index}>
        {(provided, snapshot) => (
            <TodoItemContainer 
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                isDragging={snapshot.isDragging}
                darkMode={darkMode}
            >
            <Checkbox 
              completed={todo.completed} 
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.completed && <CheckIcon/>}
            </Checkbox>
            <TodoText completed={todo.completed} darkMode={darkMode}>{todo.text}</TodoText>
            <DeleteButton 
              className="delete-icon" 
              onClick={() => deleteTodo(todo.id)}
            >
              ✕
            </DeleteButton>
            {/* <DragHandle>⋮⋮</DragHandle> */}
          </TodoItemContainer>
        )}
    </Draggable>
  );
};

export default TodoItem;