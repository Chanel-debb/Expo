import {create} from 'zustand';
import { getBlogs } from '../services/blog';

export const useBlogStore = create((set) => ({
    blogs: [],
    setBlogs: async () => {
        const blogs = await getBlogs();
        set({ blogs });
    },
}));