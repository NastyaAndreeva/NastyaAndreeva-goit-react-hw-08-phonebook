import { useDispatch } from 'react-redux';
import { Box } from 'components/ui/Box';
import { authOperations } from 'store/auth';
import { useAuth } from 'hooks';
import styled from 'styled-components';

const LogOutButton = styled.button`
  border: none;
  outline: none;
  box-sizing: border-box;
  padding: 5px;
  display: block;
  width: 100px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundBlueBtn};
  background-color: ${({ theme }) => theme.colors.backgroundOrangeBtn};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: background-color 200ms ease, color 200ms ease;
  :hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.backgroundBlueBtn};
  }
`;

const GreetingsText = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar =
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/surprising-flower-meanings-balloon-flowers-1650767465.jpg';
  return (
    <Box display="flex" alignItems="center" justifyContanet="center">
      <img src={avatar} alt="" width="32" height="32" />
      <GreetingsText>Welcome, {user?.name}</GreetingsText>
      <LogOutButton
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </LogOutButton>
    </Box>
  );
}
