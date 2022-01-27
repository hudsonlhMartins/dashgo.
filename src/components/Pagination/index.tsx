import { Box, Button, Stack, Text } from "@chakra-ui/react";
import PaginationItem from "./Paginationtem";



interface PaginationProps {
    totalCountOfRegister: number;
    registersPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void
}


const siblingsCount = 1

function generatePagesArray(from: number, to: number){
    return [...new Array(to - from)] // vai criar um array com essa soma
        .map((_, index)=>{
            return from + index + 1
        })
        .filter(page => page >0)
}

export default function Pagination ({
    totalCountOfRegister,
    registersPage = 10,
    currentPage = 1 ,
    onPageChange} :PaginationProps
){

    const lastPage = Math.floor(totalCountOfRegister /registersPage)
    // se page for numero quebrado vai redonda para cima

    const previousPages = currentPage > 1 
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage -1)
    :[] // isso e para dizer quantas page vai criar no caso so uma

    const nextPages = currentPage < lastPage 
    ? generatePagesArray(currentPage, Math.min(currentPage+siblingsCount, lastPage))
    : []



    return(
        <Stack
            direction={['column' ,'row']}
            mt='8'
            justify='space-between'
            align='center'
            spacing='6'
        >
           
           <Box>
               <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
           </Box>

           <Stack spacing='2' direction='row'>

                {currentPage > (1 + siblingsCount) && (
                    <>
                        <PaginationItem onPageChange={onPageChange} number={1} />
                        {currentPage >(2 + siblingsCount)&&
                            <Text color='gray.300' width='8' textAlign='center'>...</Text>
                        }
                    </>
                )}


                {previousPages.length > 0 && previousPages.map(page =>{
                    return <PaginationItem onPageChange={onPageChange} key={page} number={page} />

                })}

                <PaginationItem onPageChange={onPageChange} isCurrent = {true} number={currentPage} />
                

                {nextPages.length > 0 && nextPages.map(page =>{
                    return <PaginationItem onPageChange={onPageChange} key={page} number={page} />

                })}

                {(currentPage + siblingsCount) < lastPage && (
                    <>
                        {(currentPage +1 +siblingsCount) < lastPage  &&
                            <Text color='gray.300' width='8' textAlign='center'>...</Text>
                        }
                        <PaginationItem onPageChange={onPageChange} number={lastPage} />
                    </>
                ) }
           </Stack>
        </Stack>
    )
}