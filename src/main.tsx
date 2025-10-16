import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ClerkProvider } from '@clerk/clerk-react';
import { viVN } from '@clerk/localizations';
import { env } from './configs/env';
import routes from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={env.CLERK_PUBLISHABLE_KEY}
      localization={viVN}
      signInUrl={routes.auth.signIn}
      signUpUrl={routes.auth.signUp}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>,
);
