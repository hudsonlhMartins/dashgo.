import { Link as ChakraLink, Icon, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from 'next/link'
import ActiveLink from "../ActiveLink";


interface NavLinksProps extends ChakraLinkProps {
    icon: ElementType; // assim e quando passa do jeito que esta no as__
                        // so com o nome não = um component
    children: string;
    // esse extends para pegar tudo que tem no link do chakra
    // pos assim pegar todos as estilização passada e a quele eu posso passar como props

    href: string;
}


export default function NavLinks({icon, children, href, ...rest}: NavLinksProps){

    return(
        <ActiveLink shouldMatchExactHref={false} href={href} passHref>
            <ChakraLink display='flex' align='center' {...rest}  >
                <Icon  as={icon} fontSize='20'/>
                <Text ml='4' fontWeight="medium">{children}</Text>
            </ChakraLink>
        </ActiveLink>
 
    )

}