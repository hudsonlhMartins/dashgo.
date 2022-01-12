import Link, {LinkProps} from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement, ReactElement } from 'react'

interface ActiveLinkProps extends LinkProps {

    children: ReactElement;
    // esse ReactElement diz que ele tem que ser um component react
    // passa assim quando vc so poder receber um component não pode ser text
    shouldMatchExactHref: Boolean 

}


export default function ActiveLink ({ 
        children, 
        shouldMatchExactHref = false, 
        ...rest
    }: ActiveLinkProps){

    const {asPath} = useRouter()
    // isso aqui vai return a rota que estamos

    let isActive = false
    console.log(rest.href == asPath)

    if(shouldMatchExactHref && (asPath == rest.href || asPath == rest.as)){
        isActive = true
    }

    if(!shouldMatchExactHref && 
            (asPath.startsWith(String(rest.href)) ||
            asPath.startsWith(String(rest.as))
        )){
            // esse startWith e para ver se começa com
            isActive = true
    }

    return(

        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'pink.400' : 'gray.50'
            } )}
        </Link>

    )
}