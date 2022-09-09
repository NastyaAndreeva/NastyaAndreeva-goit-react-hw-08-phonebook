import React from 'react';
import { Link } from './Link';

export default function AuthNav() {
  return (
    <div>
      <Link to="/register">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
}
