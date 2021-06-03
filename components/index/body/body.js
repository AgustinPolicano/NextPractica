import { Box, Center, Heading } from "@chakra-ui/react"
import { Image, Button, Flex, Spacer, SimpleGrid } from "@chakra-ui/react";
import {BodyFunciones} from "./bodyFunciones"

export const Body = () => {
    return (
        <Box>
        <Box bg="blanco" h={{ base: "auto", md: "auto", lg: "auto", xl: 1250 }}>

            <Box
                pos="relative"
                right={{ base: 0, lg: 160, xl: 250 }}
                top={{ base: "7rem", xl: "11rem" }}
            >
                <Center>
                    <Image
                        borderRadius="full"
                        boxSize={{ base: 300, lg:400, xl: "400px" }}
                        src="./vector1.png"
                        alt=""
                    />
                </Center>
            </Box>
            <Box
                fontFamily="Mohave"
                color="azulninox"
                fontSize={{ base: 40,lg:50, xl: "50px" }}
                position="relative"
                mt={{ base: "9rem", lg:"-14rem", xl: "-11rem" }}
                textAlign="center"
                ml={{ base: 0, lg: 550, xl: 800, }}

            >
                Somos un sistema web <br></br>
                de Gestión Comercial
<Box
                    fontFamily="Montserrat"
                    fontSize={{base:18, lg:20, xl:"20px"}}
                    mt={{base:"1rem", xl:"0"}}
                    color="negro"

                >
                    Un sistema ágil e intuitivo. <br></br> Preparado para cubrir las  <br></br>
 necesidades del circuito comercial.
</Box>
                <Box id="funcionamiento"
                    fontFamily="Montserrat"
                    fontSize="20px"
                    color="primary"
                    mt="5"
                >

                    Ventas + Compras + Stock + Facturación
</Box>
            </Box>

            <Box
                pos="relative"
                ml={{ base: 0, lg: 550, xl: 800, }}
                top="15rem"
               
            >
                <Center>
                    <Image
                        borderRadius="full"
                        boxSize={{ base: 300, lg:400, xl: "400px" }}
                        src="./vector2.png"
                        alt="Segun Adebayo"
                        mt={{base:"-12rem", lg:"0", xl:"0"}}

                    />
                </Center>
            </Box>
            <Box
                fontFamily="Mohave"
                color="azulninox"
                fontSize={{ base: 40, lg:"50px", xl: "50px" }}
                position="relative"
                textAlign="center"
                mt={{base:"17rem", lg:"-15rem", xl:"-15rem"}}
                
                right={{ base: 0, lg: 160, xl: 250 }}
            >
                Ventajas de <br></br>
         Ninox•Net
         </Box>
            <SimpleGrid columns={2} spacingY={5} mt="10" textAlign="center">
                <Box
                    fontFamily="Montserrat"
                    color="primary"
                    fontSize={{base:"20", xl:"25px"}}
                    position="relative"
                    right={{base:"0", lg:"100px"}}
                >No requiere instalación
    <Box
                        color="negro"
                        fontSize={{base:"14px", xl:"15px"}}
                        mt="2"
                    >
                        Solo necesitas un navegador para <br></br>
    acceder a nuestra herramienta, sin <br></br>
    ninguna instalación previa.
    </Box>

                </Box>
                <Box
                    fontFamily="Montserrat"
                    color="primary"
                    fontSize={{base:"20", xl:"25px"}}
                    position="relative"
                    right={{ base: 0, lg:330, xl: 400, }}
                >Acceso universal
    <Box
                        color="negro"
                        fontSize={{base:"14px", xl:"15px"}}
                        mt="2"
                    >
                        Con Ninox•Net podes consultar la <br></br>
    caja, movimientos diarios, ventas y <br></br>
     otros datos desde cualquier <br></br>
      computadora o dispositivo móvil con <br></br>
      acceso a internet.
    </Box>

                </Box>
                <Box
                    fontFamily="Montserrat"
                    color="primary"
                    fontSize={{base:"20", xl:"25px"}}
                    position="relative"
                    right={{base:"0", lg:"100px"}}
                >Datos Seguros
  <Box
                        color="negro"
                        fontSize={{base:"14px", xl:"15px"}}
                        mt="2"
                    >
                        Tu información estará protegida. Los <br></br>
   backups son automáticos y en la <br></br>
    nube. No quedará información <br></br>
     almacenada en la computadora.
  </Box>
                </Box>
                <Box
                    fontFamily="Montserrat"
                    color="primary"
                    fontSize={{base:"20", xl:"25px"}}
                    position="relative"
                    className="responsivegrid"
                    right={{ base: 0, lg:330, xl: 400, }}
                >Actualizaciones
  <Box
                        color="negro"
                        fontSize={{base:"14px", xl:"15px"}}
                        mt="2"
                        mb={{lg:"20"}}
                    >
                        Realizamos actualizaciones con <br></br>
   frecuencia. Elaboramos un sistema <br></br>
    ágil e intuitivo gracias al feedback de <br></br>
     nuestros clientes.
  </Box>
                </Box>

            </SimpleGrid>


        </Box>

            <BodyFunciones/>


        </Box>
    )
}