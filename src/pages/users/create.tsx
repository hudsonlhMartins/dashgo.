import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import {Input} from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";

import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/router";

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}


const createUserFormSchema = yup.object().shape({
    email: yup.string().required('E-mail obrigatorio').email('E-mail invalido'),
    password: yup.string().required('Senha obrigatorio').min(6, 'No min 6 caracteres'),
    password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'Senhas diferente') ,
    name: yup.string().required('Nome obrigatorio')

})

export default function UserCreate(){

    const router = useRouter()

    const createUser = useMutation(async(users: CreateUserFormData)=>{
        const res = api.post('users', {
            user:{
                ...users,
                created_at: new Date()
            }
        })

        return (await res).data.user
    },
        {
            onSuccess: ()=> {
                queryClient.invalidateQueries('users')
            }
        }
    )

    const {register, formState, handleSubmit} = useForm({
        resolver: yupResolver(createUserFormSchema)
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (value) =>{
         await createUser.mutateAsync(value)
         router.push('/users')
    }

    return(
        <Box>
        <Header/>
        <Flex
            w='100%'
            my='6'
            maxWidth={1480}
            mx='auto'
            px='6'

        >
            
            <SideBar/>

            <Box 
                flex='1' 
                borderRadius={8} 
                bg='gray.800' 
                p={['6','8']}
                as='form'
                onSubmit={handleSubmit(handleCreateUser)}
            >   

                <Heading size='lg' fontWeight='normal'>Criar usuarios</Heading>

                <Divider my='6' bordercolor='gray.700' // essa tag e uma linha igual o br 
                />
                <VStack spacing={['6','8']}>
                    <SimpleGrid minChildWidth='240px' spacing={['6','8']} width='100%' >
                        <Input 
                            name='name' 
                            label='Nome completo'
                            error={formState.errors.name}
 
                            {...register('name')} 
                        />
                        <Input 
                            name='email' 
                            label='E-mail' 
                            type='email' 
                            error={formState.errors.email}
                            {...register('email')} 
                        />
                    </SimpleGrid>

                    <SimpleGrid minChildWidth='240px' spacing={['6','8']} width='100%' >
                        <Input 
                            name='password' 
                            type='password' 
                            label='Senha'  
                            error={formState.errors.password}
                            {...register('password')}
                        />
                        <Input 
                            name='password_confirmation' 
                            type='password' 
                            label='Confimação da senha'
                            error={formState.errors.password_confirmation}
                            {...register('password_confirmation')}
                        />
                    </SimpleGrid>
                </VStack>

                <Flex mt='8' justify='flex-end'>
                    <HStack spacing='4'>
                        <Link href='/users' passHref>
                            <Button as='a' colorScheme='whiteAlpha'>Cancelar</Button>
                        </Link>
                        <Button type="submit" colorScheme='pink' isLoading={formState.isSubmitting}>Salvar</Button>
                    </HStack>

                </Flex>

            </Box>
        </Flex>
    </Box>
    )
}