import {Box, useBreakpointValue, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../context/SidebarDrawerContext";
import SideBarNav from "./SideBarNav";

export function SideBar(){

    const {isOpen, onClose} = useSidebarDrawer()

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false
    })


    if(isDrawerSidebar){
        return (<Drawer isOpen={isOpen} placement='left' onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent bg='gray.800' p='4'>
                    <DrawerCloseButton />
                    <DrawerHeader>Navegação</DrawerHeader>
                    <DrawerBody>
                        <SideBarNav/>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
        )
    }

    return(
        <Box
            as='aside' // usar a tag aside para sidebar no html
            w='64'
            mr='8'
        >
            
            <SideBarNav />
          

        </Box>
    )
}