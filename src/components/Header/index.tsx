import {Flex, useBreakpointValue, IconButton, Icon} from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../context/SidebarDrawerContext'
import Logo from './Logo'
import NotificationsNav from './NotificationsNav'
import Profile from './Profile'
import SearchBox from './SearchBox'

export function Header (){

    const {onOpen} = useSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false, // por padrão
        lg: true // quando passar desse tamanho vai ser true
    })
// esse true ou false e return nessa var


    return(
        <Flex
            w='100%'
            as='header'
            maxWidth={1480}
            h='20'
            mx='auto'
            mt='4'
            px='6'
            align='center'
        >
            
            {!isWideVersion && (
                <IconButton 
                // ussar esse iconButtom quando queremos ter um button que e so um icon
                    icon={<Icon as={RiMenuLine} />}
                    fontSize='24'
                    variant='unstyled'
                    onClick={onOpen}
                    aria-label='Open navigation'
                    mr='2'
                    mt='2'
                    p='0'
                >

                </IconButton>
            )}

            <Logo/>
            
            {isWideVersion && <SearchBox />}

            


            <Flex
                align='center'
                ml='auto' // aqui e para jogar tudo para esquerda


            >
                <NotificationsNav/>
            
                <Profile showProfileData={isWideVersion}/>

            </Flex>

        </Flex>
    )
}