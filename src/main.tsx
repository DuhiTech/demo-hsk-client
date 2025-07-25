import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ClerkProvider } from '@clerk/clerk-react';
import { viVN } from '@clerk/localizations';
import { env } from './configs/env';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={env.CLERK_PUBLISHABLE_KEY} localization={viVN}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
);
