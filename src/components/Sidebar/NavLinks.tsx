import { Link, Icon, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinksProps extends ChakraLinkProps {
    icon: ElementType; // assim e quando passa do jeito que esta no as__
                        // so com o nome não = um component
    children: string;

    // esse extends para pegar tudo que tem no link do chakra
    // pos assim pegar todos as estilização passada e a quele eu posso passar como props

}


export default function NavLinks({icon, children, ...rest}: NavLinksProps){

    return(
        <Link display='flex' align='center' {...rest}  >
            <Icon  as={icon} fontSize='20'/>
            <Text ml='4' fontWeight="medium">{children}</Text>
        </Link>
    )

}