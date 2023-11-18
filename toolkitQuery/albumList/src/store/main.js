import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { usersDb } from "./apis/userdb";
import { albumDb } from "./apis/albumdb";
import { photoDb } from "./apis/photodb";

export const store  =  configureStore({
    reducer:{
        [usersDb.reducerPath]: usersDb.reducer,
        [albumDb.reducerPath] : albumDb.reducer,
        [photoDb.reducerPath] : photoDb.reducer,
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(usersDb.middleware).concat(albumDb.middleware).concat(photoDb.middleware)
    }

})

setupListeners(store.dispatch)

export {useFetchPhotosQuery,useAddPhotoMutation,useDeletePhotoMutation} from "./apis/photodb"
export {useFetchAlbumQuery,useAddAlbumMutation, useDeleteAlbumMutation} from "./apis/albumdb"
export {useAddUserMutation,useDeleteUserMutation,useFetchUserQuery} from './apis/userdb'