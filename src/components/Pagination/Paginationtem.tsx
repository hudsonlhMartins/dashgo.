import { Button } from "@chakra-ui/react";


interface PaginationItemProps {
    isCurrent ?: Boolean;
    number: number;
    onPageChange: (page: number) => void;
}


export default function PaginationItem (
    {isCurrent = false, number, onPageChange} : PaginationItemProps
){

    if(isCurrent){
        return(
            <Button 
                size='sm'
                fontSize='xs'
                width='4'
                colorScheme='pink'
                disabled
                _disabled={{
                    bgColor: 'pink.500',
                    cursor: 'default',
                }}   
        > 
                {number}
            </Button>
        )
    }

    return(
        <Button 
            size='sm'
            fontSize='xs'
            width='3'
            bgColor='gray.700'
            _hover={{
                bgColor: 'gray.500'
            }}  
            onClick={()=> onPageChange(number)}
        > 
            {number}
        </Button>
    )
}