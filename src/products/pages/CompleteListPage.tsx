import { ProductList } from '..';
import { useProducts } from '../hooks/useProdutcs';

export const CompleteListPage = () => {
    const { isLoading, products } = useProducts({});

    return (
        <div className="flex-col">
            <h1 className="text-2xl font-bold">Todos los productos</h1>

            {isLoading && (
                <p className="flex justify-center items-center text-gray-700">
                    Obteniendo productos
                </p>
            )}

            <ProductList products={products} />
        </div>
    );
};
