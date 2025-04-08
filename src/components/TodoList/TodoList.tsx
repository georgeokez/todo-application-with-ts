import React from 'react';
import { useTodo } from '../../contexts/TodoContext';
import TodoItem from '../TodoItem';
import { TodoListContainer, EmptyList } from './TodoList.styles';
import { Droppable } from 'react-beautiful-dnd';


const TodoList: React.FC = () => {
  const { todos, activeFilter, darkMode } = useTodo();
  
  const filteredTodos = todos.filter(todo => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'active') return !todo.completed;
    if (activeFilter === 'completed') return todo.completed;
    return true;
  });


  return (
    <Droppable droppableId="todos">
        {(provided, snapshot) => (
            <TodoListContainer
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
                darkMode={darkMode}
            >
            {filteredTodos.length === 0 ? (
                <EmptyList darkMode={darkMode}>No todos to display</EmptyList>
            ) : (
                filteredTodos.map((todo, index) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    index={index}
                />
                ))
            )}
            {provided.placeholder}
        </TodoListContainer>
        )}
    </Droppable>     
  );
};

export default TodoList;