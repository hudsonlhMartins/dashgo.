import { useQuery, UseQueryOptions } from "react-query"
import { api } from "../api"


type User ={
    id: string;
    name: string;
    email: string;
    createdAt: string
}


type GetUsersRes ={
    totalCount: number;
    users: User[]
}


// e uma promise pq esse function e async e toda function async return uma promise
export async function getUsers(page: number): Promise<GetUsersRes> {
    
        const {data, headers} = await api.get('users', {
            params:{
                page,
            }
        })

        const totalCount = Number(headers['x-total-count'])

        const users = data.users.map(user =>{
            return{
                id: user.id,
                name: user.name,
                email: user.email,
                createAt: new Date(user.createAt).toLocaleDateString(
                    'pt-BR',{
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                    }
                )
            }
        })

        return {
            users,
            totalCount
        }
    
}


export function useUsers (page: number){

    // coloquei esse page para o cash ser tiverente por page
    // ele vai carregar users 1 depois users 2 assim o users 1 vai continuar ali__
    // para quando precisa dele
    return useQuery(['users', page],()=> getUsers(page) ,{
        staleTime: 1000*10, // 10s

    }
        
    )
}