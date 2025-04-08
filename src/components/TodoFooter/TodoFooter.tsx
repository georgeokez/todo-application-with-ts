import React from 'react';
import { useTodo } from '../../contexts/TodoContext';
import {
  TodoFooterContainer,
  ItemsLeft,
  FilterContainer,
  FilterButton,
  ClearButton,
  DragDropText,
  FooterWrapper
} from './TodoFooter.styles';

const TodoFooter: React.FC = () => {
  const { todos, activeFilter, setFilter, clearCompleted, darkMode } = useTodo();
  
  const itemsLeft = todos.filter(todo => !todo.completed).length;

  return (
    <FooterWrapper>
      <TodoFooterContainer darkMode={darkMode}>
        <ItemsLeft darkMode={darkMode}>{itemsLeft} item{itemsLeft !== 1 ? 's' : ''} left</ItemsLeft>
        <FilterContainer className="desktop-only" darkMode={darkMode}>
          <FilterButton 
            active={activeFilter === 'all'} 
            onClick={() => setFilter('all')}
          >
            All
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'active'} 
            onClick={() => setFilter('active')}
          >
            Active
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'completed'} 
            onClick={() => setFilter('completed')}
          >
            Completed
          </FilterButton>
        </FilterContainer>
        <ClearButton darkMode={darkMode} onClick={clearCompleted}>
          Clear Completed
        </ClearButton>
      </TodoFooterContainer>

      <FilterContainer className="mobile-only" darkMode={darkMode}>
        <FilterButton 
          active={activeFilter === 'all'} 
          onClick={() => setFilter('all')}
        >
          All
        </FilterButton>
        <FilterButton 
          active={activeFilter === 'active'} 
          onClick={() => setFilter('active')}
        >
          Active
        </FilterButton>
        <FilterButton 
          active={activeFilter === 'completed'} 
          onClick={() => setFilter('completed')}
        >
          Completed
        </FilterButton>
      </FilterContainer>

      <DragDropText darkMode={darkMode}>Drag and drop to reorder list</DragDropText>
    </FooterWrapper>
  );
};

export default TodoFooter;