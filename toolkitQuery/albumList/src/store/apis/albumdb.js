import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {faker} from "@faker-js/faker"


// slow internet simuluate
const pauseLoadingOneSecond =(duration) => {
    return new Promise((res) => {
        setTimeout(res,duration)
        })

}

const albumDb = createApi({
    reducerPath: 'albums',
    baseQuery:fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
        fetchFn: async (...args) => {
            await pauseLoadingOneSecond(1000)
            return fetch(...args)
        }
    }),
    endpoints(builder){
        return{
            fetchAlbum: builder.query({
                providesTags:(result,error,user)=> {
                  const tags = result.map((album) => {
                    return {type: "Album", id: album.id}
                });
                tags.push({type: 'UsersAlbum', id: user.id}) 
                return tags 
                },
                query:(user)=>{
                return{
                    url:"/albums",
                    method: "GET",
                    params: {
                        userId: user.id
                    }
                }
                }
            }),
            addAlbum: builder.mutation({
                invalidatesTags:(result,error,user) => {
                    return [{type: 'UsersAlbum', id: user.id}]
                },
                query:(user)=>{
                return{
                    url:"/albums",
                    method: "POST",
                    body:{
                        userId: user.id,
                        title: faker.commerce.productName()
                    }
                }
                }
            }),
            deleteAlbum: builder.mutation({
                invalidatesTags:(result,error,album) =>{
                    return [{type: "Album", id: album.id}]
                },
                query:(album)=>{
                return{
                    url:`/albums/${album.id}`,
                    method: "DELETE",
                }
                }
            })
        
        }
    }

});

export const {useFetchAlbumQuery,useAddAlbumMutation,useDeleteAlbumMutation} = albumDb;
export {albumDb};

