import styled from 'styled-components';

interface FilterButtonProps {
  active: boolean;
}

interface TodoFooterContainerProps {
  darkMode: boolean;
}

export const TodoFooterContainer = styled.div<TodoFooterContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 24px;
  width: 100%;
  background-color: ${({ darkMode }) => darkMode ? '#25273c' : '#fafafa'};
  color: ${({ darkMode }) => darkMode ? '#cacde8' : '#777a92'};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 14px;

  @media (max-width: 375px) {
    padding: 15px 20px;
  }
`;

export const ItemsLeft = styled.span<TodoFooterContainerProps>`
  color: ${({ darkMode }) => darkMode ? '#cacde8' : '#777a92'};
`;

export const FilterContainer = styled.div<TodoFooterContainerProps>`
  display: flex;
  gap: 18px;
  justify-content: center;

  @media (max-width: 375px) {
    background-color: ${({ darkMode }) => darkMode ? '#25273c' : '#fafafa'};
    padding: 15px;
    border-radius: 5px;
    margin-top: 16px;
    box-shadow: 0 35px 50px -15px rgba(0, 0, 0, 0.5);
  }
`;

export const FilterButton = styled.button<FilterButtonProps>`
  background: none;
  border: none;
  color: ${props => props.active ? '#3a7bfd' : '#777a92'};
  font-weight: ${props => props.active ? '700' : '400'};
  cursor: pointer;
  
  &:hover {
    color: ${props => props.active ? '#3a7bfd' : '#cacde8'};
  }
`;

export const ClearButton = styled.button<TodoFooterContainerProps>`
  background: none;
  border: none;
  color: ${({ darkMode }) => darkMode ? '#cacde8' : '#777a92'};
  cursor: pointer;
  
  &:hover {
    color: ${({ darkMode }) => darkMode ? '#cacde8' : '#777a92'};
  }
`;

export const DragDropText = styled.p<TodoFooterContainerProps>`
  color: ${({ darkMode }) => darkMode ? '#cacde8' : '#777a92'};
  font-size: 14px;
  text-align: center;
  margin-top: 40px;
`;

export const FooterWrapper = styled.div`
  width: 100%;

  @media (max-width: 375px) {
    & ${FilterContainer} {
      position: relative;
      width: 100%;
    }
  }
`;
