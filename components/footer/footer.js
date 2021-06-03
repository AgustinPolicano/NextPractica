import { Box, SimpleGrid, Center, Link } from '@chakra-ui/react'
import { Icon } from "@chakra-ui/react"
import { PhoneIcon, EmailIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { IoLocation, IoLogoInstagram } from "react-icons/io5";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => (
  <Box
  bg="negro"

  h="auto"
  w="100%"
  >
   <SimpleGrid columns={3} pos="relative" top="25px" 
   color="blanco"
   fontFamily="Montserrat"
   fontSize={{base:"16px", md:"20px", lg:"24px", xl:"24px"}}
   ml={{base:"40px", xl:"300px"}}
   >
        <Box>
          Contactanos
          <Box
          fontSize={{base:"10px", md:"12px", lg:"15px", xl:"15px"}}
          mt="10px"
          >
            <Link _hover={{textDecoration:"none", color:"primary" }}
             href="https://www.google.com.ar/maps/place/Banhaia/@-34.628342,-58.4758832,17z/data=!4m5!3m4!1s0x95bcc98de525828d:0xd2850df353a4ef42!8m2!3d-34.6235852!4d-58.4749344">
           <Icon as={IoLocation}/> Felipe Vallese 3013, Flores
            </Link>
            <Box>
            <Link _hover={{textDecoration:"none", color:"primary" }} href="https://wa.me/+54 9 11 3277-1640">
            <PhoneIcon/> +54 9 11 3277-1640
            </Link>
            </Box>
            <Box>
              <Link _hover={{textDecoration:"none", color:"primary" }} href="mailto:info@banhaia.com">
              <EmailIcon /> info@banhaia.com
              </Link>
            </Box>
          </Box>
        </Box>
        <Box
        ml={{base:"20px", xl:"0px"}}
        >
          Siganos
          <Box 
      
          >
            <Link href="https://www.facebook.com/banhaia" _hover={{color: "primary"}}>
              <Icon as={FaFacebook} /> 
            </Link>
            <Link href="https://www.instagram.com/banhaia_/" _hover={{color: "primary"}}>
            <Icon ml="2"  as={IoLogoInstagram}/> 
            </Link>
            <Link href="https://www.linkedin.com/company/banhaia/" _hover={{color: "primary"}}>
            <Icon ml="2"  as={FaLinkedinIn}/>
            </Link>
          </Box>
        </Box>
        <Box>
          Links de Interés
         
          <Box
            fontSize={{base:"10px", md:"12px", lg:"15px", xl:"15px"}}
            mt="10px"
          >
             <Link _hover={{textDecoration:"none", color:"primary" }}href="https://www.banhaia.com/ninox-net">
            <ChevronRightIcon/> Ninox
            </Link>
            <Box>
              <Link _hover={{textDecoration:"none", color:"primary" }} href="https://www.banhaia.com/servicios/video-vigilancia">
              <ChevronRightIcon/> Video Vigilancia
              </Link>
            </Box>
            <Box>
              <Link _hover={{textDecoration:"none", color:"primary" }}>
              <ChevronRightIcon/> Servicio Técnico
              </Link>
            </Box>
            <Box>
              <Link _hover={{textDecoration:"none", color:"primary" }}>
              <ChevronRightIcon/> Blog
              </Link>
            </Box>
            <Box>
              <Link _hover={{textDecoration:"none", color:"primary" }}>
              <ChevronRightIcon/> Politicas de Privacidad
              </Link>
            </Box>
            <Box>
              <Link _hover={{textDecoration:"none", color:"primary" }}>
                <ChevronRightIcon/> Contacto
              </Link>
            </Box>
          </Box>
        </Box>
   </SimpleGrid>
   <Center>
   <Box
   color="blanco"
   mt="90px"
   mb="10px"
   fontSize="12px"
   >
     
   Copyright © 2021 [Banhaia] | Todos los derechos reservados
   </Box>
   </Center>
  </Box>
)
