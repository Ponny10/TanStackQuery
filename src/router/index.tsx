import { createBrowserRouter, Navigate } from 'react-router';

import { App } from '../App';
import { ListView, IssueView } from '../views';

export const router = createBrowserRouter([
    {
        path: '/issues',
        element: <App />,
        children: [
            { path: 'list', element: <ListView /> },
            { path: 'issue/:id', element: <IssueView /> },
            { path: '*', element: <Navigate to="list" /> },
        ],
    },
    {
        path: '/',
        element: <Navigate to="issues/list" />,
    },
    {
        path: '*',
        element: <h1>Not found</h1>,
    },
]);
