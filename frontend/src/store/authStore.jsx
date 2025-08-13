import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  isUserLoggedIn: false,
  setIsUserLoggedIn: (status) => set({ isUserLoggedIn: status }),
  isAdminLoggedIn: false,
  setIsAdminLoggedIn: (status) => set({ isAdminLoggedIn: status }),

}));
