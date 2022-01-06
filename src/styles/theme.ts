import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({
// pegar tudo que o chakra ja tem aqui dentro vou colocar so oque eu quero substituir

    // PARA MUDAR AS CORES PADRÃO DO CHAKRA
    colors:{
        gray:{
            "900": "#181B23",
            "800": "#1F2029",
            "700": "#353646",
            "600": "#4B4D63",
            "500": "#616480",
            "400": "#797D9A",
            "300": "#9699B0",
            "200": "#B3B5C6",
            "100": "#D1D2DC",
            "50": "#EEEEF2",
        }
    },

    fonts:{
        body: 'Roboto',
        heading: 'Roboto',
    },

    styles: {
        global:{
            body:{
                bg: 'gray.900',
                color: 'gray.50'
            }
        }
    }

})