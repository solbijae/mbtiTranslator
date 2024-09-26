import styled from '@emotion/styled';

export const BaseButton = styled.button`
  padding: 8px 15px;
  background-color: ${props => props.theme.color.lightOrange};
  border: none;
  border-radius: 3px;
  font-weight: 600;
  color: #25262b;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.color.orange};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${props => props.theme.color.gray};
    opacity: 0.6;
  }
`;