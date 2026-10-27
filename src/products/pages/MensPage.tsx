import { ProductList } from '..';
import { useProducts } from '../hooks/useProdutcs';

export const MensPage = () => {
    const { isLoading, products } = useProducts({ filterKey: `men's clothing` });

    return (
        <div className="flex-col">
            <h1 className="text-2xl font-bold">Productos para hombres</h1>
            {isLoading && (
                <p className="flex justify-center items-center text-gray-700">
                    Obteniendo productos
                </p>
            )}

            <ProductList
                products={products.filter((product) => product.category === `men's clothing`)}
            />
        </div>
    );
};
