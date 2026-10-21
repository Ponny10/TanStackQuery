import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router';
import { router } from './router/router.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <main className="dark text-foreground bg-background">
            <RouterProvider router={router} />
        </main>
    </React.StrictMode>,
);
