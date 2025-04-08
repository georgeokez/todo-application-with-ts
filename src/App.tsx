import React from 'react';
import { AppContainer, GlobalStyle, BackgroundDarkMode, BackgroundLightMode } from './style';
import TodoInput from './components/TodoInput';
import TodoFooter from './components/TodoFooter';  
import TodoList from './components/TodoList';
import { TodoProvider, useTodo } from './contexts/TodoContext';
import TodoHeader from './components/TodoHeader';
import { DragDropContext } from 'react-beautiful-dnd';

const TodoApplication = () => {
  const { darkMode, reorderTodos } = useTodo();
  
  return (
    <>
     <DragDropContext onDragEnd={reorderTodos}>
        <GlobalStyle darkMode={darkMode} />
        { darkMode ? <BackgroundDarkMode /> : <BackgroundLightMode />}
          <AppContainer>
            <TodoHeader />
            <TodoInput />
            <TodoList />
          <TodoFooter />
          </AppContainer>
      </DragDropContext>
    </>
  );
};

function App() {
  return (
    <TodoProvider>
      <TodoApplication />
    </TodoProvider>
  );
}

export default App;