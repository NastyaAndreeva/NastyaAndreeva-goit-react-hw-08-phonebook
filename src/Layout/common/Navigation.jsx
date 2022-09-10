import React from 'react';
import { useAuth } from 'hooks';
import { Link } from './Link';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return <nav>{isLoggedIn && <Link to="/contacts">Contacts</Link>}</nav>;
};

export default Navigation;
