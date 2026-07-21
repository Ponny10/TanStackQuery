import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from './App.tsx';

import './index.css';

const queryCient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryCient}>
            <ReactQueryDevtools client={queryCient} />
            <App />
        </QueryClientProvider>
    </StrictMode>,
);
