import {create} from 'zustand';



export const useCartStore = create((set)=>({
    // Initialize cart
    cart: [],
    
    shippingFee: 10,
    subTotal: 0,
    totalPrice: 0,
    calculateTotals: (cart, shippingFee) => {
    const subTotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return {
      subTotal,
      totalPrice: subTotal + shippingFee,
    };
  },



    addToCart: (product) =>
    set((state) => {
      const existingIndex = state.cart.findIndex(
        (item) => item._id === product._id && item.size === product.size
      );

      let updatedCart;
      if (existingIndex !== -1) {
        updatedCart = [...state.cart];
        updatedCart[existingIndex].quantity += product.quantity;
      } else {
        updatedCart = [...state.cart, product];
      }

      const { subTotal, totalPrice } = state.calculateTotals(
        updatedCart,
        state.shippingFee
      );

      return { cart: updatedCart, subTotal, totalPrice };
    }),

  removeToCart: (productId) =>
    set((state) => {
      const updatedCart = state.cart.filter(
        (product) => product._id !== productId
      );

      const { subTotal, totalPrice } = state.calculateTotals(
        updatedCart,
        state.shippingFee
      );

      return { cart: updatedCart, subTotal, totalPrice };
    }),

  updateQuantity: (productId, quantity) =>
    set((state) => {
      const updatedCart = state.cart.map((product) =>
        product._id === productId
          ? { ...product, quantity: Number(quantity) }
          : product
      );

      const { subTotal, totalPrice } = state.calculateTotals(
        updatedCart,
        state.shippingFee
      );

      return { cart: updatedCart, subTotal, totalPrice };
    }),

    clearCart: ()=> set(({cart: []}))
}));

