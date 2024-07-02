import { Navigate, useLocation } from 'react-router-dom';
import React from 'react';
import { useAppSelector } from '../../utils/hooks';
import { RoutePathname } from '../../utils/constants';

const Protected = ({ onlyUnAuth = false, component }: { onlyUnAuth?: boolean, component: JSX.Element}): JSX.Element | null => {
  const user = useAppSelector((store) => store.user);
  const location = useLocation();

  if (onlyUnAuth && user.isLoggedIn) {
    const { from } = location.state || { from: { pathname: RoutePathname.loginPage} };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user.isLoggedIn) {
    return <Navigate to={RoutePathname.loginPage} state={{ from: location }} />;
  }

  return component;
};

export const OnlyAuth = Protected;
export const OnlyUnAuth = ({ component }: {component: JSX.Element}) => (
    <Protected onlyUnAuth={true} component={component} />
);