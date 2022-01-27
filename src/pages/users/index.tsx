import { Box, useBreakpointValue, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, Spinner, Link } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import Pagination from "../../components/Pagination";
import { SideBar } from "../../components/Sidebar";

import NextLink from 'next/link'
import { getUsers, useUsers } from "../../services/hooks/useUsers";
import { useState } from "react";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";

export default function UsersList(){
    const [ page, setPage] = useState(1)

    const {data, isLoading, isFetching ,error} = useUsers(page)


    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    async function handlePrefetchUser (userId: string){
        queryClient.prefetchQuery(['user', userId], async()=>{
            const res = await api.get(`users/${userId}`)
            
            return res.data
        }, {
            staleTime: 1000 * 60 * 10 // 10min
        })
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
                    flex='1' borderRadius={8} bg='gray.800' p='8'
                >   
                    <Flex
                        mb='8' justify='space-between' align='center'
                    >
                        <Heading size='lg' fontWeight='normal'>
                            Usuarios
                            {!isLoading && isFetching && <Spinner size='sm' color="gray.500" ml='4' />}
                        </Heading>

                        <NextLink href='/users/create' passHref>
                                <Button
                                    as='a'
                                    size='sm'
                                    fontSize='sm'
                                    colorScheme='pink'
                                    // colocar icon a esuqerda o button tem essa prop
                                    leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                                    cursor='pointer'
                                >
                                    Criar novo

                                </Button>
                        </NextLink>
                    </Flex>
                    
                    {isLoading ? (
                        <Flex justify='center'>
                            <Spinner/>
                        </Flex>
                    ) : error ? (
                        <Flex justify='center'>
                            <Text>Falar na buscar dos usuarios</Text>
                        </Flex>
                    ) :(
                        <>
                            <Table colorScheme='whiteAlpha'>
                            <Thead>
                                <Tr>
                                    <Th px={['4', '4', '6']} color='gray.300' width='8'>
                                        <Checkbox colorScheme='pink' />
                                    </Th>
                                    <Th>Usuario</Th>
                                    {isWideVersion && <Th>Data de cadastro</Th>} 
                                    {isWideVersion && <Th width='8'></Th>}
                                
                                </Tr>
                            </Thead>

                            <Tbody>
                                {data.users.map(user =>{
                                    return(
                                        <Tr key={user.id}> 
                                        <Td px={['4', '4', '6']}>
                                            <Checkbox colorScheme='pink' />
                                        </Td>
                                        <Td>
                                            <Box>
                                                <Link color='purple.400' onMouseEnter={()=> handlePrefetchUser(user.id)}>
                                                    <Text fontWeight='bold'> {user.name}</Text>

                                                </Link>
                                                <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                                            </Box>
                                        </Td>
                                        {isWideVersion && (<Td>{user.createdAt}</Td>)}
    
                                        {isWideVersion && (
                                            <Td>
                                                <Button
                                                    size='sm'
                                                    fontSize='sm'
                                                    colorScheme='purple'
                                                    // colocar icon a esuqerda o button tem essa prop
                                                    leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                                                    cursor='pointer'
                                                >
                                                    Edita
    
                                                </Button>
                                            </Td>
                                        )}
                                        
                                    </Tr>
                                    )
                                })}
                            </Tbody>
                            </Table>
                            <Pagination 
                                totalCountOfRegister={data.totalCount}
                                currentPage={page}
                                onPageChange={setPage}
                            />
                        </>
                    )
                    
                    }

                    
                </Box>
            </Flex>
        </Box>
    )
}