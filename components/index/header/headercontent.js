import { Box, Center, Image,Button, Link  } from "@chakra-ui/react"

import {HeaderBar} from "./header"

export const HeaderContent = () => {
  return (

        <Box bg="primary" h={{base: "auto", md:800, lg: 850, xl: 800 }}>
       
       <HeaderBar/>
          <Image
            src="./logo.png"
            display={["flex", "flex", "none", "none"]}
            h={{base:120}}
            ml="5"
            mt="-5rem"
          />
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
              >
                Somos Ninox•Net
                <Box
                fontFamily="Montserrat"
                fontSize={{base: 15,lg:20, xl:20}}
                >
                  Un sistema de gestión para pymes
                  
                </Box>
                <Box    fontFamily="Montserrat"
                  fontSize={{base: 15,lg:20, xl:20}}
                  >
              Llevá tu comercio o negocios <br></br>
                al siguiente nivel
                </Box>
                <Link href="funcionamiento">
                <Button as="button"
                aria-label="Home"
                my={2}
                w={{base:"50%", lg:"25%", xl:"15%"}}
                color="negro"
                bg="blanco"
                fontSize={{base:20, }}
                _hover={{bg:"negro", color:"blanco", transition:"0.5s"}}
                >
                 ¿Cómo funciona?
                </Button>
                </Link>
              </Box>
              
            </Box>
            <Box

            >
              <Center>
             <Image 
              src="./gente.png"
              w={{base: 400, lg:550, xl:700}}
              position="relative"
              top={{base: 0, md: 10, lg:"-11rem", xl:"-17rem"}}
              ml={{base:0, lg:450, xl:600,}}
              />
              </Center>
            </Box>
        </Box>
  )
}