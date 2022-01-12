import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import {Input} from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";


export default function UserCreate(){

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
                flex='1' borderRadius={8} bg='gray.800' p={['6','8']}
            >   

                <Heading size='lg' fontWeight='normal'>Criar usuarios</Heading>

                <Divider my='6' bordercolor='gray.700' // essa tag e uma linha igual o br 
                />
                <VStack spacing={['6','8']}>
                    <SimpleGrid minChildWidth='240px' spacing={['6','8']} width='100%' >
                        <Input name='name' label='Nome completo'  />
                        <Input name='email' label='E-mail' type='email' />
                    </SimpleGrid>

                    <SimpleGrid minChildWidth='240px' spacing={['6','8']} width='100%' >
                        <Input name='password' type='password' label='Senha'  />
                        <Input name='password_confirmation' type='password' label='Confimação da senha' />
                    </SimpleGrid>
                </VStack>

                <Flex mt='8' justify='flex-end'>
                    <HStack spacing='4'>
                        <Link href='/users' passHref>
                            <Button as='a' colorScheme='whiteAlpha'>Cancelar</Button>
                        </Link>
                        <Button colorScheme='pink'>Salvar</Button>
                    </HStack>

                </Flex>

            </Box>
        </Flex>
    </Box>
    )
}