import { Box, Center, Heading } from "@chakra-ui/react"
import {
    Image, SimpleGrid, Flex, Spacer, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";
import {AddIcon, MinusIcon} from "@chakra-ui/icons"



export const BodyFunciones = () => {
    return (
        <Box>
            <Box w="100%" bg="primary" h="auto">
                <Center>
                    <Box
                        color="blanco"
                        fontFamily="Mohave"
                        fontSize={{ base: 40, lg: 50, xl: "50px" }}
                        pos="relative"
                        top="50px"
                        ml={{ base: 0, lg: 550, xl: 800, }}
                        textAlign="center"
                    >
                        Funciones
            <Box
                            fontFamily="Montserrat"
                            fontSize={{base:"18px", xl:"20px"}}
                        >
                            Ninox•Net simplifica la gestión de tu negocio.
            </Box>

                    </Box>
                </Center>
         
                <Accordion>
                    
                    <Box
                        mt="5rem"
                        w={{base:"75%", lg:"40%", xl:"32%"}}
                        mr="auto"
                        pos="relative"
                        ml={{ base: "auto", lg: 580, xl: 890, }}
                        mb={{base:0, xl:20}}
                    >
                    <AccordionItem
                    bg="blanco"
                    mb="1rem"
                    > 
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left"
                color="negro"
                fontFamily="Montserrat"
                fontSize="18px"
                >
                Ventas sin internet
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px"  color="negro" />
                ) : (
                  <AddIcon fontSize="12px"  color="negro" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="negro" fontFamily="Montserrat" fontSize="14px">
            Ninox·Net te permite seguir utilizando nuestra app de punto de venta sin internet y cuando se restaure la conexión podés sincronizar las ventas
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem 
      bg="blanco"
      mb="1rem"
      >
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left"  color="negro"
                fontFamily="Montserrat" fontSize="18px">
               Factura eléctronica e impresion fiscal
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" color="negro" />
                ) : (
                  <AddIcon fontSize="12px" color="negro"/>
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="negro" fontFamily="Montserrat" fontSize="14px">
            Emití facturas electrònicas y tickes fiscales en segundos.
             Solo con el número de CUIT podrás completar datos de clientes 
             consultando directamente en la base de datos de AFIP.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem
      bg="blanco"
      mb="1rem"
      >
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" color="negro" fontFamily="Montserrat" fontSize="18px">
                  Cuentas Corrientes
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" color="negro"/>
                ) : (
                  <AddIcon fontSize="12px" color="negro"/>
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="negro" fontFamily="Montserrat" fontSize="14px">
            Manejá las cuentas de tus clientes y proveedores.
             Cobrá y pagá en pocos pasos. Visualiza los saldos
              y movimientos de cada uno desde cualquier dispositivo.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem
      bg="blanco"
      mb="1rem"
      >
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" color="negro" fontFamily="Montserrat" fontSize="18px">
                    Cajas Diarias
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px"  color="negro" />
                ) : (
                  <AddIcon fontSize="12px"  color="negro" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}  color="negro" fontSize="14px" fontFamily="Montserrat">
            Controlá los movimientos de dinero en efectivo.
             Cargá los gastos, retiros y más. Usá una o más cajas por sucursal.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
     
      <AccordionItem bg="blanco"
        mb="1rem"
      >
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left"
                 color="negro"
                 fontFamily="Montserrat"
                 fontSize="18px"
                >
                Cartera de Cheques
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px"  color="negro" />
                ) : (
                  <AddIcon fontSize="12px"  color="negro" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="negro" fontFamily="Montserrat" fontSize="14px">
            Descubrí el origen de los cheques rechazados. Contá con el registro de los movimientos de tus cheques, desde el ingreso o emisión hasta a quien se entregó.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
   
      <AccordionItem bg="blanco"
        mb="1rem"
      >
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left"
                 color="negro"
                 fontFamily="Montserrat"
                 fontSize="18px"
                >
                Movimiento de stock entre sucursales
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px"  color="negro" />
                ) : (
                  <AddIcon fontSize="12px"  color="negro" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="negro" fontFamily="Montserrat" fontSize="14px">
            Contá con las cantidades exactas de entrada y salida de mercadería. Imprimí los comprobantes que acompañan las transferencias entre sucursales.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem bg="blanco"
        mb="1rem"
      >
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left"
                 color="negro"
                 fontFamily="Montserrat"
                 fontSize="18px"
                >
                    Múltiples sucursales
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px"  color="negro" />
                ) : (
                  <AddIcon fontSize="12px"  color="negro" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="negro" fontFamily="Montserrat" fontSize="14px">
            Controlá en tiempo real las operaciones realizadas en tus sucursales en un solo sistema todo unificado.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem bg="blanco"
       
      >
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left"
                 color="negro"
                 fontFamily="Montserrat"
                 fontSize="18px"
                >
                   Usuarios personalizados
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px"  color="negro" />
                ) : (
                  <AddIcon fontSize="12px"  color="negro" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="negro" fontFamily="Montserrat" fontSize="14px">
            Configuramos permisos y restricciones a elección para cada usuario según el rol que cumplan tus empleados.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      </Box>
    
    </Accordion>

<Box
       pos="relative"
       right={{ base: 0, lg: 160, xl: 250 }}
>
    <Center>
        <Image 
           borderRadius="full"
           mt={{base:"5rem", xl:"-37rem"}}
           mb={{base:"2rem", xl:"0"}}
           boxSize={{ base: 300, lg:400, xl: "400px" }}
        src="./vector3.png"/>
    </Center>
</Box>
                </Box>
              

          
        </Box>
    )



}