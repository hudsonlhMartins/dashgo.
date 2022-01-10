import { Box, Button, Stack } from "@chakra-ui/react";
import PaginationItem from "./Paginationtem";




export default function Pagination (){

    return(
        <Stack
            direction='row'
            mt='8'
            justify='space-between'
            align='center'
            spacing='6'
        >
           
           <Box>
               <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
           </Box>

           <Stack spacing='2' direction='row'>

                <PaginationItem isCurrent = {true} number='1' />
                <PaginationItem number='2' />
                <PaginationItem number='3' />
                <PaginationItem number='4' />
 
           </Stack>
        </Stack>
    )
}