import admin from './admin';
import auth from './auth';

const routes = {
  home: '/',
  unauthorized: '/unauthorized',
  admin,
  auth,
};

export default routes;
