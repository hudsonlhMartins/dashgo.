import { Box, useBreakpointValue, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import Pagination from "../../components/Pagination";
import { SideBar } from "../../components/Sidebar";

import Link from 'next/link'

export default function UsersList(){

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

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
                        </Heading>

                        <Link href='/users/create' passHref>
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
                        </Link>
                    </Flex>
                    
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
                            <Tr>
                                <Td px={['4', '4', '6']}>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'> Hudson Martins</Text>
                                        <Text fontSize='sm' color='gray.300'>hudson.martins@gmail.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && (<Td>19/01/2022</Td>)}

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
                        </Tbody>
                    </Table>
                    <Pagination/>
                </Box>
            </Flex>
        </Box>
    )
}