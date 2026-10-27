import { ProductList } from '..';
import { useProducts } from '../hooks/useProdutcs';

export const WomensPage = () => {
    const { isLoading, products } = useProducts({ filterKey: `women's clothing` });

    return (
        <div className="flex-col">
            <h1 className="text-2xl font-bold">Productos para mujeres</h1>
            {isLoading && (
                <p className="flex justify-center items-center text-gray-700">
                    Obteniendo productos
                </p>
            )}
            <ProductList
                products={products.filter((product) => product.category === `women's clothing`)}
            />
        </div>
    );
};
