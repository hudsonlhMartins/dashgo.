import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import NavLinks from "./NavLinks";
import NavSection from "./NavSection";

export default function SideBarNav(){

    return(
        <Stack spacing='12' align='flex-start' >

                <NavSection title='GERAL'>
                    <NavLinks href='/dashboard' icon={RiDashboardLine} >
                        Dashboard
                    </NavLinks>

                    <NavLinks href='/users' icon={RiContactsLine} >
                        Usuarios
                    </NavLinks>
                </NavSection>


                <NavSection title='AUTOMAÇÂO' >
                
                    <NavLinks href='/forms' icon={RiInputMethodLine}>
                        Forularios
                    </NavLinks>

                    <NavLinks href='/automation' icon={RiGitMergeLine}>
                        Automação
                    </NavLinks>
                    
                </NavSection>
                
            </Stack>
    )
}