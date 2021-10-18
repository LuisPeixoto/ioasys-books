import React from 'react';
import LoadingIndicator from '../components/Loading';
import { useAuth } from '../hooks/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FunctionComponent = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingIndicator type="light" />;
  }
  return user ? (
    <>
      <AppRoutes />
    </>
  ) : (
    <AuthRoutes />
  );
};

export default Routes;
