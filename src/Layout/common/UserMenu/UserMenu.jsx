import { useDispatch } from 'react-redux';
import { Box } from 'components/Box';
import { authOperations } from 'store/auth';
import { useAuth } from 'hooks';

const styles = {
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar =
    'https://i.pinimg.com/736x/a7/c9/89/a7c989f0791962f318f291110b7dc99f.jpg';

  return (
    <Box display="flex" alignItems="center">
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Добро пожаловать, {user.name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </Box>
  );
}
