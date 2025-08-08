import { useContext } from "react";
import { CartContext } from "../context/cart.jsx";

export const useCart = () => {
    const cartContext = useContext(CartContext);
    
    if (cartContext === undefined) {
        throw new Error("useCart debe usarse dentro de un CartProvider");
    }
    
    return cartContext;
};