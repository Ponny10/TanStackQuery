import { createBrowserRouter } from 'react-router';

import { CompleteListPage, MensPage, NewProduct, StoreLayout, WomensPage } from '../products';
import { ErrorPage } from '../ErrorPage';
import { ProductByIdPage } from '../products/pages/ProductByIdPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <StoreLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <CompleteListPage />,
            },
            {
                path: 'men',
                element: <MensPage />,
            },
            {
                path: 'women',
                element: <WomensPage />,
            },
            {
                path: 'productById/:productId',
                element: <ProductByIdPage />,
            },
            {
                path: 'new',
                element: <NewProduct />,
            },
        ],
    },
    {},
]);
