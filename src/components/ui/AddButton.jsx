import styled from 'styled-components';

export const AddButton = styled.button`
  border: none;
  outline: none;
  box-sizing: border-box;
  padding: 10px;
  display: block;
  width: 120px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.backgroundBlueBtn};
  /* background-color: ${({ theme }) => theme.colors.backgroundBlueBtn}; */
  margin: 0 auto;
  background-color: #320451;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: background-color 200ms ease, color 200ms ease;
  :hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.backgroundBlueBtn};
  }
`;
