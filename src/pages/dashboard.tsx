import { Box, Flex, Text, SimpleGrid, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar";
import dynamic from "next/dynamic";

const Chart = dynamic(()=> import('react-apexcharts'),{
    ssr: false,
})
const options ={
    // estilixar o gloafico
    chart: {
        toolbar:{
            show: false,

        },
        zoom:{
            enabled: false,
        },
        foreColor: theme.colors.gray[500],
        // esse foreCOlor e a cor do numero que ficar do lado do grafico do

    },

    grid:{
        show: false,
    },
    dataLabels: {
        enabled: false,
        // tira as label que ficar no grafico numero que ficar em cima
    },
    tooltip: {
        enabled: false,
        // quando user passar mouse por cima não fazer nada
    },
    xaxis: {
        type:'datetime',
        axisBorder:{
            color: theme.colors.gray[600],
            // isso e a border que ficar em baixo
        },

        axisTicks:{
            color: theme.colors.gray[600],
            // os potinhos que tem na border
        },
        categories:[
            '2021-03-18T00:00:00.000Z',
            '2021-03-19T00:00:00.000Z',
            '2021-03-20T00:00:00.000Z',
            '2021-03-21T00:00:00.000Z',
            '2021-03-22T00:00:00.000Z',
            '2021-03-23T00:00:00.000Z',
            '2021-03-24T00:00:00.000Z',
        ]  
    },
    fill: {
        opacity:0.3,
        // opacity:  do cor do grafico;
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: '0.7',
            opacityTo: '0.3',
        }
    }
}

const series=[
    // vai ser u vetor []
    {name: 'Series1', data:[31, 120, 10, 28, 51, 18, 109]} 
    // vai ter um um tipo de dados por isso so uma {}
]

export default function Dashboard(){
    return(
        <Flex direction="column" h='100vh'>
            <Header/>

            <Flex
                w='100%'
                my='6'
                maxWidth={1480}
                mx='auto'
                px='6'

            >

                <SideBar/>

                <SimpleGrid flex='1' gap='4' minChildWidth='320px' align='flex-start' >

                    <Box
                        p={['6' ,'8']}
                        bg='gray.800'
                        borderRadius={8}
                        pb='4'
                    >

                        <Text fontSize='lg' mb='4'>Incrito da semana</Text>
                        <Chart options={options} series={series} height={160} type='area'  />
                    </Box>

                    <Box
                        p={['6' ,'8']}
                        bg='gray.800'
                        borderRadius={8}
                    >

                        <Text fontSize='lg' mb='4'>Taxa de abertura</Text>
                        <Chart options={options} series={series} height={160} type='area'  />

                    </Box>

                </SimpleGrid>


            </Flex>

        </Flex>
    )
}