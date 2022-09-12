import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Appbar } from './common/AppBar';
import { Container } from 'components/ui/Container';

export const SharedLayout = () => {
  return (
    <Container>
      <Appbar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
