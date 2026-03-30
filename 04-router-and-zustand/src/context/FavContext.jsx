import {createContext, useState, useContext} from 'react';

export const FavContext = createContext()

export function FavoritesProvider({children}){

    const [favorites, setFavorites] = useState([])

    const addFavorite = (job) => {
        setFavorites([...favorites, job])
    }

    const removeFavorite = (jobId) => {
        setFavorites(favorites.filter(job => job.id !== jobId))
        
    }   

    const isFavorite = (jobId) => {

        return favorites.some((job) => job.Id === jobId) 
    } 

    const value = {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
    }

    return (
        <FavoritesProvider value={value}>
            {children}
        </FavoritesProvider>
    )
}

export function useFavorites(){
    const context = useContext(FavContext)
    if(context === undefined){
        throw new Error('useFavorites debe ser usado dentro de un FavoritesProvider')
    }

    return context
}