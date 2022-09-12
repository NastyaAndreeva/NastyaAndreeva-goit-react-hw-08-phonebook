import { Box } from 'components/ui/Box';
import { Container } from 'components/ui/Container';
import { Link } from 'components/ui/Link';
import { useAuth } from 'hooks';

const Home = () => {
  const { isLoggedIn, user } = useAuth();
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop="200px"
      >
        <h1>Welcome to the website</h1>
        {isLoggedIn ? (
          <p>
            {user?.name}, you can view
            <Link to="/contacts">the contacts page</Link>
          </p>
        ) : (
          <p>
            To use your contact list, please,<Link to="/login">Log In</Link>or
            <Link to="/register">Sign Up</Link>
          </p>
        )}
      </Box>
    </Container>
  );
};

export default Home;
