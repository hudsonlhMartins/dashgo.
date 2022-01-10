import {Flex} from '@chakra-ui/react'
import Logo from './Logo'
import NotificationsNav from './NotificationsNav'
import Profile from './Profile'
import SearchBox from './SearchBox'

export function Header (){
// px e padding no eixo x
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
            
            <Logo/>
            
            <SearchBox />


            <Flex
                align='center'
                ml='auto' // aqui e para jogar tudo para esquerda


            >
                <NotificationsNav/>
            
                <Profile/>

            </Flex>

        </Flex>
    )
}