import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import {FieldError} from 'react-hook-form'

interface InputProps extends ChakraInputProps{
    name: string;
    label?: string;
    error?: FieldError
}

// esse ..rest e passando la em baixo tbm e para pode passa type com props
// lembrando que tem que tipa a interface com InputProps vindo do chakra
const InputBase = ({name, label, error=null, ...rest }: InputProps, ref) => {

    return(
        <FormControl isInvalid={!!error}>
           { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput 
            name={name}
            id={name}
            focusBorderColor='pink.500'
            bgColor='gray.900'
            variant='filled'
            _hover={{
                bgColor:'gray.900'
            }}
            size='lg'
            ref={ref}
            {...rest}
            />

            {!!error &&(
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            )}
      </FormControl>
    )
}

export const Input = forwardRef(InputBase)