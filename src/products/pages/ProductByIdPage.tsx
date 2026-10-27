import { useParams } from 'react-router';
import { ProductCard } from '..';
import { useProduct } from '../hooks/useProdutc';

export const ProductByIdPage = () => {
    const { productId } = useParams();
    const { isLoading, product } = useProduct({ productId: Number(productId) });

    return (
        <div className="flex flex-col flex-1 gap-2">
            <h1 className="text-2xl font-bold text-gray-200">Todos los productos</h1>

            {isLoading && (
                <p className="flex justify-center items-center text-gray-700">
                    Obteniendo productos
                </p>
            )}

            {product && <ProductCard {...product} />}
        </div>
    );
};
