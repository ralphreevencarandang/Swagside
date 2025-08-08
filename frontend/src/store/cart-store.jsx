import {create} from 'zustand';



export const useCartStore = create((set)=>({
    // Initialize cart
    cart: [],
    addToCart: (product) =>
    set((state) => {
      const existingIndex = state.cart.findIndex(
        (item) => item._id === product._id && item.size === product.size
      );

      if (existingIndex !== -1) {
        // If same product + same size exists, update quantity
        const updatedCart = [...state.cart];
        updatedCart[existingIndex].quantity += product.quantity;
        return { cart: updatedCart };
      } else {
        // Otherwise, add as a new cart item
        return { cart: [...state.cart, product] };
      }
    }),

    removeToCart: (productId)=> set((state)=>({ cart: state.cart.filter( product => product._id !== productId)})),
    updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((product) =>
        product._id === productId
          ? { ...product, quantity: Number(quantity) }
          : product
      ),
    })),

}))