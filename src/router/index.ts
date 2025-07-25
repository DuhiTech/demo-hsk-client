import { createBrowserRouter } from 'react-router-dom';
import mainRouter from './main.router';
import authRouter from './auth.router';

const router = createBrowserRouter([...mainRouter, ...authRouter]);

export default router;
