import type { Role } from '@/types/enum/Role';
import { useUser } from '@clerk/clerk-react';
import { Navigate, Outlet } from 'react-router';
import Loading from './loading';
import routes from '@/routes';

type ProtectedRouteProps = {
  allowedRoles: Role[];
  redirectTo?: string;
};

const ProtectedRoute = ({ allowedRoles, redirectTo = routes.unauthorized }: ProtectedRouteProps) => {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) return <Loading />;

  const userRole = user?.publicMetadata?.role as Role | undefined;

  if (!isSignedIn || !userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
