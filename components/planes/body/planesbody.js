import { Box, Center, Heading } from "@chakra-ui/react"
import { Image, Button, Flex, Icon, SimpleGrid,   Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption, } from "@chakra-ui/react";
    import { IoLocation, IoCloseSharp, IoCheckmarkSharp } from "react-icons/io5";

export const PlanesBody = () => {
    return(
        <Box>
            <Box bg="blanco" h={{ base: "auto", md: "auto", lg: "auto", xl: "auto" }}>
               <Flex  flexDir="column"
                 pos="relative"
                 top={{ base: "7rem", xl: "11rem" }}
                >
                 <Flex
                        ml="auto"
                        mr="auto"
                        > 
             
                        <Box
                        bg="#002B35"
                        w={{base:"25%", md:"200px", xl:"300px"}}
                        h={{base:"150", xl:"160px"}}
                        >
                            <Box
                            textAlign="center"
                            color="blanco"
                            fontFamily="Mohave"
                            pt={{base:"30px", xl:"20px"}}
                            fontSize={{base:"30px", md:"40px", xl:"50px"}}
                            >Planes<Box
                            fontSize={{base:"15px", md:"20px", xl:"30px"}}
                            
                            fontFamily="Montserrat"
                            >
                                 Ninox•Net ERP
                            </Box>
                           </Box>
                           
                        </Box>
                        <Box
                         bg="primary"
                         w={{base:"25%", md:"125px", xl:"200px"}}
                         h={{base:"150", xl:"160px"}}
                        >
                            <Box
                             textAlign="center"
                             color="blanco"
                             fontFamily="Montserrat"
                             p=""
                             mt="5"
                             fontSize={{base:"15px", md:"20px", xl:"25px"}}
                            >
                            Solucion Esencial
                            <hr></hr>
                            <Box
                             fontSize={{base:"15px", md:"20px", xl:"25px"}}
                            >
                            $2.000 +IVA
                            <Box
                            fontSize={{base:"10px", md:"12px", xl:"15px"}}
                            >
                            por mes
                            </Box>

                            </Box>
                            </Box>
                        </Box>
                        <Box
                        bg="#002B35"
                        w={{base:"25%", md:"125px", xl:"200px"}}
                        h={{base:"150", xl:"160px"}}
                        >
                            <Box
                              textAlign="center"
                              color="blanco"
                              fontFamily="Montserrat"
                              p=""
                              mt="5"
                              fontSize={{base:"15px", md:"20px", xl:"25px"}}
                            >
                                Solucion <br></br>Pyme
                                <hr></hr>
                                <Box
                         fontSize={{base:"15px", md:"20px", xl:"25px"}}
                            >
                            $3.000 +IVA
                            <Box
                             fontSize={{base:"10px", md:"12px", xl:"15px"}}
                            >
                            por mes
                            </Box>

                            </Box>
                                
                            </Box>
                           </Box>
                        <Box
                        bg="primary"
                        w={{base:"25%", md:"125px", xl:"200px"}}
                        h={{base:"150", xl:"160px"}}
                        >
                             <Box
                              textAlign="center"
                              color="blanco"
                              fontFamily="Montserrat"
                              p=""
                              mt="5"
                              fontSize={{base:"15px", md:"20px", xl:"25px"}}
                            >
                                Solucion Custom
                                <hr></hr>
                                <Box
                             fontSize={{base:"15px", md:"20px", xl:"25px"}}
                             pt="2"
                            >
                              Consultar
                          

                            </Box>
                                
                            </Box>
                        </Box>
                        
                   
                        </Flex>
                    <Flex
                         ml={{base:"0", md:"auto", xl:"auto"}}
                         mr={{base:"0", md:"auto",  xl:"auto"}}
                         mb={{base:"10rem", md:"10rem", lg:"0", xl:"15rem"}}
                         w={{ md:"575px", xl:"900px"}}
                         display={{base:"none", md:"flex", lg:"flex", xl:"flex"}}
                         
                        >
                            <Table variant="simple">
  <TableCaption>Los precios no incluyen IVA</TableCaption>
  <Thead
    bg="secondary"
      
  >
    <Tr>
      <Th>Función</Th>
     <Th>&nbsp;&nbsp;</Th>
     <Th>&nbsp;</Th>
     <Th>&nbsp;</Th>
    </Tr>
  </Thead>
  <Tbody
      >
    <Tr
 
    >
      <Td>Ventas y clientes</Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" pos="relative" left="75%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green" pos="relative" left="65%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" pos="relative" left="65%" boxSize="25px"/></Td>
     
    </Tr>
    <Tr
    bg="#C0C0C0"
    >
      <Td>Pedidos de venta</Td>
      <Td><Icon as={IoCloseSharp} color="red" pos="relative" left="75%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green" pos="relative" left="65%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" pos="relative" left="65%" boxSize="25px"/></Td>
     
    </Tr>
    
    <Tr>
      <Td>Preventa</Td>
      <Td><Icon as={IoCloseSharp} color="red" pos="relative" left="75%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green" pos="relative" left="65%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" pos="relative" left="65%" boxSize="25px"/></Td>
    </Tr>
    <Tr
     bg="#C0C0C0"
    >
      <Td>Efectivo, Tarjeta, Deposito</Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" pos="relative"left="75%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green" pos="relative" left="65%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" pos="relative" left="65%" boxSize="25px"/></Td>
    </Tr>
    <Tr>
      <Td>Compras y proveedores</Td>
      <Td><Icon as={IoCloseSharp} color="red" pos="relative" pos="relative" left="75%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green" pos="relative" left="65%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" pos="relative" left="65%" boxSize="25px"/></Td>
    </Tr>
    <Tr
     bg="#C0C0C0"
    >
      <Td>Cuentas Corrientes</Td>
      <Td><Icon as={IoCloseSharp} color="red" pos="relative" left="75%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green" pos="relative" left="65%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green"pos="relative" left="65%" boxSize="25px"/></Td>
    </Tr>
    <Tr>
      <Td>Cartera de cheques</Td>
      <Td><Icon as={IoCloseSharp} color="red"pos="relative" left="75%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green" pos="relative" left="65%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" pos="relative" left="65%" boxSize="25px"/></Td>
    </Tr>
    <Tr
     bg="#C0C0C0"
    >
      <Td>Articulos y Stock</Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" pos="relative" left="75%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green" pos="relative" left="65%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green"pos="relative" left="65%" boxSize="25px"/></Td>
    </Tr>
    <Tr>
      <Td>Talle y Color</Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" pos="relative" left="75%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green" pos="relative" left="65%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" pos="relative" left="65%" boxSize="25px"/></Td>
    </Tr>
    <Tr
     bg="#C0C0C0"
    >
      <Td>Caja Diaria</Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" pos="relative" left="75%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green" pos="relative" left="65%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" pos="relative" left="65%" boxSize="25px"/></Td>
    </Tr>
    <Tr>
      <Td>Funciones especiales</Td>
      <Td><Icon as={IoCloseSharp} color="red" pos="relative" left="75%" boxSize="25px"/></Td>
      <Td pos="relative" left="9%">Adicionales</Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" pos="relative" left="65%" boxSize="25px"/></Td>
    </Tr>
    </Tbody>
 
    <Thead
    bg="secondary"
  >
    <Tr>
      <Th>Opcionales</Th>
     <Th>&nbsp;</Th>
     <Th>&nbsp;</Th>
     <Th>&nbsp;</Th>
    </Tr>
  </Thead>
  <Tbody>
      <Tr>
      <Td>Facturación Electrónica</Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" pos="relative" left="75%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green" pos="relative" left="65%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" pos="relative" left="65%" boxSize="25px"/></Td>
      </Tr>
      <Tr
       bg="#C0C0C0"
      >
      <Td
      >Impresión Fiscal</Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" pos="relative" left="75%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green" pos="relative" left="65%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green"pos="relative" left="65%" boxSize="25px"/></Td>
      </Tr>
      <Tr>
      <Td>Código de barras</Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" pos="relative" left="75%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green" pos="relative" left="65%" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" pos="relative" left="65%" boxSize="25px"/></Td>
      </Tr>
  </Tbody>
  <Thead
    bg="secondary"

  >
    <Tr>
      <Th>Especificaciones</Th>
     <Th>&nbsp;&nbsp;</Th>
     <Th>&nbsp;</Th>
     <Th>&nbsp;</Th>
    </Tr>
  </Thead>
  <Tbody>
   <Tr 
  >
      <Td>Sucursal(es)</Td>
      <Td pos="relative" left="14.5%">1</Td>
      <Td pos="relative" left="12.5%">1</Td>
      <Td pos="relative" left="11%">Custom</Td>
      </Tr>

      <Tr>
      <Td>Usuario(s)</Td>
      <Td pos="relative" left="14.5%">2</Td>
      <Td pos="relative" left="12.5%">4</Td>
      <Td pos="relative"left="11%">Custom</Td>
      </Tr>
      <Tr>
      <Td>Punto(s) de venta</Td>
      <Td pos="relative" left="14.5%">1</Td>
      <Td pos="relative" left="12.5%">1</Td>
      <Td pos="relative" left="11%">Custom</Td>
      </Tr>
      <Tr>
      <Td>Atención al usuario</Td>
      <Td pos="relative" left="8%">Remota / Telefónica</Td>
      <Td pos="relative" left="6%">Remota / Telefónica</Td>
      <Td pos="relative" left="7%">Remota / Telefónica / <br></br>
Relevo presencial *</Td>
      </Tr>
      <Tr>
      <Td>DataBase</Td>
      <Td pos="relative" left="14%">B1</Td>
      <Td pos="relative" left="12.5%">B1</Td>
      <Td  pos="relative" left="13%">S1*</Td>
      </Tr> 
  </Tbody>
</Table>
                        </Flex>  
                </Flex>
              <Flex
              mt="7rem"
              display={{base:"flex", md:"none", lg:"none", xl:"none"}}
              >
              <Table variant="simple" size="sm">
  <TableCaption>Los precios no incluyen IVA</TableCaption>
  <Thead>
    <Tr
    bg="secondary"
    >
    <Th>Función</Th>
     <Th>&nbsp;&nbsp;</Th>
     <Th>&nbsp;</Th>
     <Th>&nbsp;</Th>
    </Tr>
  </Thead>
  <Tbody
      >
    <Tr
 
    >
      <Td>Ventas y clientes</Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" boxSize="25px"/></Td>
     
    </Tr>
    <Tr
    bg="#C0C0C0"
    >
      <Td>Pedidos de venta</Td>
      <Td><Icon as={IoCloseSharp} color="red" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green"  boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green"  boxSize="25px"/></Td>
     
    </Tr>
    
    <Tr>
      <Td>Preventa</Td>
      <Td><Icon as={IoCloseSharp} color="red" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green"  boxSize="25px"/></Td>
    </Tr>
    <Tr
     bg="#C0C0C0"
    >
      <Td>Efectivo, Tarjeta, Deposito</Td>
      <Td><Icon as={IoCheckmarkSharp} color="green"  boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green"  boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green"  boxSize="25px"/></Td>
    </Tr>
    <Tr>
      <Td>Compras y proveedores</Td>
      <Td><Icon as={IoCloseSharp} color="red"  boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green"  boxSize="25px"/></Td>
    </Tr>
    <Tr
     bg="#C0C0C0"
    >
      <Td>Cuentas Corrientes</Td>
      <Td><Icon as={IoCloseSharp} color="red"  boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green"  boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green"boxSize="25px"/></Td>
    </Tr>
    <Tr>
      <Td>Cartera de cheques</Td>
      <Td><Icon as={IoCloseSharp} color="red" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green"  boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" boxSize="25px"/></Td>
    </Tr>
    <Tr
     bg="#C0C0C0"
    >
      <Td>Articulos y Stock</Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green"  boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green"boxSize="25px"/></Td>
    </Tr>
    <Tr>
      <Td>Talle y Color</Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green"  boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green"  boxSize="25px"/></Td>
    </Tr>
    <Tr
     bg="#C0C0C0"
    >
      <Td>Caja Diaria</Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" boxSize="25px"/></Td>
    </Tr>
    <Tr>
      <Td>Funciones especiales</Td>
      <Td><Icon as={IoCloseSharp} color="red" boxSize="25px"/></Td>
      <Td pos="relative" >Adicionales</Td>
      <Td><Icon as={IoCheckmarkSharp} color="green"  boxSize="25px"/></Td>
    </Tr>
    </Tbody>
 
    <Thead
    bg="secondary"
  >
    <Tr>
      <Th>Opcionales</Th>
     <Th>&nbsp;</Th>
     <Th>&nbsp;</Th>
     <Th>&nbsp;</Th>
    </Tr>
  </Thead>
  <Tbody>
      <Tr>
      <Td>Facturación Electrónica</Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green"  boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green"  boxSize="25px"/></Td>
      </Tr>
      <Tr
       bg="#C0C0C0"
      >
      <Td
      >Impresión Fiscal</Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" boxSize="25px"/></Td>
      </Tr>
      <Tr>
      <Td>Código de barras</Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp}color="green" boxSize="25px"/></Td>
      <Td><Icon as={IoCheckmarkSharp} color="green" boxSize="25px"/></Td>
      </Tr>
  </Tbody>

</Table>
              </Flex>

            </Box>
        </Box>
    )




}