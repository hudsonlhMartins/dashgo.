import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";



export default function NotificationsNav(){

    return(
        <HStack // esse Hstack e para deixa em linha o Stack e em coluna
        spacing={['6', '8']}
        mx={['6', '8']}
        pr={['6', '8']} // esse padding e margin e para fazer um linha para seprar o icon do perfil
        py='1'
        color='gray.300'
        borderRightWidth={1}
        borderColor='gray.700'

    >
        <Icon as={RiNotificationLine} fontSize='20' />
        <Icon as={RiUserAddLine} fontSize='20' />
    </HStack>
    )
}