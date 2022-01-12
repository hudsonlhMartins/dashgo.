import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";


interface SideBarDrawerProviderProps {
    children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export default function SideBarDrawerProvider ({children}: SideBarDrawerProviderProps){

    const disclosure = useDisclosure()

    const router = useRouter()

    useEffect(()=>{
        disclosure.onClose()
    }, [router.asPath])
    // esse asPath e o caminho que ficar na url

    return(
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)