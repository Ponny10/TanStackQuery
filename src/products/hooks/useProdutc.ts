import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../services/actionsProducts';

interface _UseProdcutProduct {
    productId: number;
}

export const useProduct = ({ productId }: _UseProdcutProduct) => {
    const {
        data: product,
        error,
        isError,
        isFetching,
        isLoading,
    } = useQuery({
        queryKey: ['product', { productId }],
        queryFn: () => getProduct({ productId }),
        staleTime: 1000 * 60 * 30, // Equivale a 30 minutos
    });

    return {
        error,
        isError,
        isFetching,
        isLoading,
        product,
    };
};
