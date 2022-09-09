import catImg from 'assets/404.jpg';
import { Title } from 'components/ui';
import { StyledBackLink } from 'components/ui/StyledBackLink';

const NotFoundPage = () => {
  return (
    <>
      <StyledBackLink to="/">Back to the main page</StyledBackLink>
      <Title>The page was not found</Title>

      <div>
        <img src={catImg} alt="not found" />
      </div>
    </>
  );
};

export default NotFoundPage;
