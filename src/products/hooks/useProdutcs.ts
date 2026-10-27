import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../services/actionsProducts';

interface _UseProdcutsProducts {
    filterKey?: string;
}

export const useProducts = ({ filterKey }: _UseProdcutsProducts) => {
    const {
        data: products = [],
        error,
        isError,
        isFetching,
        isLoading,
    } = useQuery({
        queryKey: ['products', { filterKey }],
        queryFn: () => getProducts({ filterKey }),
        staleTime: 1000 * 60 * 30, // Equivale a 30 minutos
    });

    return {
        error,
        isError,
        isFetching,
        isLoading,
        products,
    };
};
