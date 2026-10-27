import { productsApi } from '../api/productsApi';
import type { _ProductResponse } from '../models/productModel';

interface _GetProductsProps {
    filterKey?: string;
    productId?: number;
}

const getProducts = async ({}: _GetProductsProps) => {
    const { data } = await productsApi.get<_ProductResponse[]>(`products`);
    return data;
};

const getProduct = async ({ productId }: _GetProductsProps) => {
    const { data } = await productsApi.get<_ProductResponse>(`products/${productId}`);
    return data;
};

export { getProduct, getProducts };
