import {Flex, Box, Text, Avatar} from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: Boolean
}

export default function Profile({showProfileData = true}: ProfileProps){

    return(
        <Flex
        align='center'
    >
        {showProfileData &&(
            <Box mr='4' textAlign='right' >
                <Text>Hudson Martins</Text>
                <Text color='gray.300' fontSize='small' >hudson@gmail.com</Text>
            </Box>
        )}

        <Avatar size='md' name='Hudson Martins' src='https://github.com/hudsonlhMartins.png' />
    </Flex>
    )
}