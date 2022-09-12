import catImg from 'assets/404.jpg';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Container } from 'components/ui/Container';

export const Link = styled(NavLink)`
  font-size: 20px;
  display: block;
  margin-bottom: 20px;
  text-decoration: none;
  color: #0d5527;
  font-weight: 700;
`;

const NotFoundPage = () => {
  return (
    <Container>
      <h2>The page was not found</h2>
      <Link to="/">Home</Link>
      <div>
        <img src={catImg} alt="not found" />
      </div>
    </Container>
  );
};

export default NotFoundPage;
