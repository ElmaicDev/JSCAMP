import {create} from 'zustand'

export const useAuthStore = create((set) => ({
    // Estado
    isLoggedIn: false,

    // Funciones para modificar el estado
    login: () => set({isLoggedIn: true}),
    logout: () => set({isLoggedIn: false})
}))