import { create } from 'zustand';
import { getProducts } from '../services/products';

export const useProductStore = create((set) => ({
    products: [],
    setProducts: async () => {
        const products = await getProducts();
        set({ products});
    },
}));