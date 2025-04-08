import React, { createContext, useState, useContext, ReactNode } from 'react';
import { DropResult } from 'react-beautiful-dnd';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

type filterType = 'all' | 'active' | 'completed';

interface TodoContextType {
  todos: Todo[];
  darkMode: boolean;
  activeFilter: filterType;
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  clearCompleted: () => void;
  toggleTheme: () => void;
  setFilter: (filter: filterType) => void;
  reorderTodos: (result: DropResult) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const mockTodos: Todo[] = [
    { id: '1', text: 'Complete online JavaScript course', completed: true },
    { id: '2', text: 'Jog around the park 3x', completed: false },
    { id: '3', text: '10 minutes meditation', completed: false },
    { id: '4', text: 'Read for 1 hour', completed: false },
    { id: '5', text: 'Pick up groceries', completed: false },
    { id: '6', text: 'Complete Todo App on Frontend Mentor', completed: false },
]
export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(mockTodos);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  
  const [activeFilter, setActiveFilter] = useState<filterType>('all');

  const addTodo = (text: string) => {
    if (text.trim() === '') return;
    setTodos([...todos, { id: Date.now().toString(), text, completed: false }]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const setFilter = (filter: filterType) => {
    setActiveFilter(filter);
  };

  // const reorderTodos = (result: DropResult) => {
  //   const { destination, source } = result;
  //   if (!destination) return;

  //   const reordered = Array.from(todos);
  //   const [removed] = reordered.splice(source.index, 1);
  //   reordered.splice(destination.index, 0, removed);
    
  //   setTodos(reordered);
  // };

  const reorderTodos = (result: DropResult) => {
    console.log('Calling reorderTodos');
    console.log(result);
    const { destination, source, draggableId } = result;

    // Should still only allow if filter is 'all', otherwise logic gets very complex
    // to decide where an 'active' item should go within the 'all' list.
    // If you MUST reorder within filtered views, the logic below needs refinement.
    if (!destination || activeFilter !== 'all') {
         return;
    }

    // Find the original index of the dragged item
    const sourceIndexOriginal = todos.findIndex(t => t.id === draggableId);

    // Find the original index of the item that was *at* the destination
    // This requires recreating the filtered list to find the ID at destination.index
    // OR, if sticking to 'all' filter only, destination.index IS the target original index.

    // Assuming 'all' filter for simplicity:
    const destinationIndexOriginal = destination.index;

    if (sourceIndexOriginal === -1) return; // Item not found (shouldn't happen)

    const reordered = Array.from(todos);
    const [removed] = reordered.splice(sourceIndexOriginal, 1);
    reordered.splice(destinationIndexOriginal, 0, removed);

    setTodos(reordered);
};

const reorderTodosOther = (result: DropResult) => {
  console.log('Calling reorderTodos');
  console.log(result);
  const { source, destination } = result;

  if (!destination) return;

  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }

  const items = Array.from(todos);
  const [reorderedItem] = items.splice(source.index, 1);
  items.splice(destination.index, 0, reorderedItem);

  setTodos(items);
};

  return (
    <TodoContext.Provider
      value={{
        todos,
        activeFilter,
        darkMode,
        addTodo,
        toggleTodo,
        deleteTodo,
        clearCompleted,
        setFilter,
        reorderTodos,
        toggleTheme
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
}; 