import { API_URL } from "./api";

export const getProducts = async () => {
    try{
        const response = await fetch(`${API_URL}/products`); // https://dummyjson.com/products
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.products;
    } catch (error){
        console.error("Error fetching products:", error);
        return [];
    }
}

// let firstName = "John";
// let lastName = "Doe";

// Concatenation
// console.log("My name is " + firstName + " " + lastName);

// Template literals
// console.log(`My name is ${firstName} ${lastName}`);