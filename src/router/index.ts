import { createBrowserRouter } from 'react-router-dom';
import mainRouter from './main.router';
import authRouter from './auth.router';
import lecturerRouter from './lecturer.router';

const router = createBrowserRouter([...mainRouter, ...authRouter, ...lecturerRouter]);

export default router;
