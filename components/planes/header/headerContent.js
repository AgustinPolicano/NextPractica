import { Box, Center, Image } from "@chakra-ui/react"
import {HeaderBar} from "../../index/header/header";

export const HeaderPlanes = () => {
    return(
        <Box>
          <Box bg="primary" h={{base: 700, md:800, lg: 850, xl: 800 }}>
                <HeaderBar/>
     
            <Box
              textAlign="center"
              pos="relative"
              right={{base: 0,lg:160, xl: 250}}
              mt={{base: 10, lg:40, xl:28}}
            >
              <Box 
              color="blanco"
              fontFamily="Mohave"
              fontSize={{base: 50,lg:60, xl:60}}
              mt={{md:100}}
              >
                Planes de Servicios
                <Box
                   fontFamily="Montserrat"
                   fontSize={{base: 15,lg:20, xl:20}}
                >
                Ninox•Net tiene justo lo <br></br>
                que necesitas para tu comercio.
                </Box>
            </Box>
            </Box>
            <Center>
                <Image
            src="./planes.png"
            w={{base: 400, md:550 ,lg:550, xl:700}}
            position="relative"
            top={{base: 160, md: 50, lg:"-1rem", xl:"-5rem"}}
            ml={{base:0, lg:450, xl:600,}}
          />
          </Center>
        </Box>
        </Box>
    )







}