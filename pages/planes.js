import { Box, Center, Heading } from "@chakra-ui/react"
import {HeaderPlanes} from "../components/planes/header/headerContent"
import {Footer} from "../components/footer/footer";
import {BodyPlanes} from "../components/planes/body/body"

export default function Planes() {
    return (
        <Box>
            <HeaderPlanes/>
            <BodyPlanes/>
            <Footer/>
        </Box>
    )
}