import { API_URL } from "./api";
export const getBlogs = async () => {
    try {
        const response = await fetch(`${API_URL}/post`); // https://dummyjson.com/post
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.blogs;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
    }
}
