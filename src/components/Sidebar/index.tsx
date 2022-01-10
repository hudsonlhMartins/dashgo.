import {Box, Stack} from "@chakra-ui/react";
import {RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine} from 'react-icons/ri'
import NavLinks from "./NavLinks";

import NavSection from './NavSection'

export function SideBar(){

    return(
        <Box
            as='aside' // usar a tag aside para sidebar no html
            w='64'
            mr='8'
        >
            <Stack spacing='12' align='flex-start' >

                <NavSection title='GERAL'>
                    <NavLinks icon={RiDashboardLine} >
                        Dashboard
                    </NavLinks>

                    <NavLinks icon={RiContactsLine} >
                        Usuarios
                    </NavLinks>
                </NavSection>


                <NavSection title='AUTOMAÇÂO' >
                
                    <NavLinks icon={RiInputMethodLine}>
                        Forularios
                    </NavLinks>

                    <NavLinks icon={RiGitMergeLine}>
                        Automação
                    </NavLinks>
                    
                </NavSection>
                
            </Stack>
          

        </Box>
    )
}