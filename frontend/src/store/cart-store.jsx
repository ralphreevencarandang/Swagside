import {create} from 'zustand';



export const useCartStore = create((set)=>({
    // Initialize cart
    cart: [],
    addToCart: (product) => set((state)=>({cart: [...state.cart, product]})),
}))