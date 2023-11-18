import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {faker} from "@faker-js/faker"


// slow internet simuluate
const pauseLoadingOneSecond =(duration) => {
    return new Promise((res) => {
        setTimeout(res,duration)
        })

}

const usersDb = createApi({
    reducerPath: 'user',
    baseQuery:fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
        fetchFn: async (...args) => {
            await pauseLoadingOneSecond(1000)
            return fetch(...args)
        }
    }),
    endpoints(builder){
        return{
            fetchUser: builder.query({
                providesTags:['User'],
                query:()=>{
                return{
                    url:"/users",
                    method: "GET",
                }
                }
            }),
            addUser: builder.mutation({
                invalidatesTags:()=>{
                    return[{type: 'User'}]
                },
                query:()=>{
                return{
                    url:"/users",
                    method: "POST",
                    body:{
                        name: faker.name.fullName()
                    }
                }
                }
            }),
            deleteUser: builder.mutation({
                invalidatesTags:()=>{
                    return[{type: 'User'}]
                },
                query:(user)=>{
                return{
                    url:`/users/${user.id}`,
                    method: "DELETE",
                }
                }
            })
        
        }
    }

});

export const {useFetchUserQuery,useAddUserMutation,useDeleteUserMutation} = usersDb;
export {usersDb}

