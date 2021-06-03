import { Box, Center, Heading } from "@chakra-ui/react"
import {HeaderContent} from "../components/index/header/headercontent"
import {Body} from "../components/index/body/body"
import {Footer} from "../components/footer/footer";
import { Image,Button } from "@chakra-ui/react";



export default function Home() {
  return (
          <Box>
            <HeaderContent/>
            <Body/>
        <Footer/>
             </Box>
     
  )
}
