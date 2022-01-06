import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps{
    name: string;
    label?: string;
}

// esse ..rest e passando la em baixo tbm e para pode passa type com props
// lembrando que tem que tipa a interface com InputProps vindo do chakra
export default function Input ({name, label, ...rest }: InputProps) {

    return(
        <FormControl>
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
            {...rest}
            />
      </FormControl>
    )
}