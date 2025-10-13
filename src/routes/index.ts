import admin from './admin';
import auth from './auth';
import lecturer from './lecturer';

const routes = {
  home: '/',
  unauthorized: '/unauthorized',
  admin,
  auth,
  lecturer,
};

export default routes;
