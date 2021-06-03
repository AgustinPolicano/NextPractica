import { Image, Flex, Button, IconButton, Link, Box } from "@chakra-ui/react";
import { useState } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"


export const HeaderBar = () => {
    const [display, changeDisplay] = useState("none")

    return (
        <Flex>
            <Flex

                position="relative"
                mt="1rem"
                align="center"

                left={{ md: "15%", xl: "20%" }}

            >



                <Flex
                    display={["none", "none", "flex", "flex"]}

                >
                    <Link href="./">
                        <Image
                            src="./logo.png"
                            mt="-40px"
                            position="relative"
                            right="20px"

                        />
                    </Link>
                    <Link href="">
                        <Button as="button"
                            bg="none"
                            my={5}
                            color="blanco"
                            w="100%"

                            fontSize="17px"
                            _hover={{ bg: "negro" }}
                        >
                            Directorio
                        </Button>
                    </Link>
                    <Link href="planes">
                        <Button as="button"
                            bg="none"
                            fontSize="17px"
                            my={5}
                            color="blanco"
                            w="100%"
                            _hover={{ bg: "negro" }}
                        >
                            Planes
                        </Button>
                    </Link>
                    <Link href="create">
                        <Button as="button"
                            bg="none"
                            my={5}
                            color="blanco"
                            w="100%"
                            fontSize="17px"
                            _hover={{ bg: "negro" }}
                        >
                            Nosotros
                        </Button>
                    </Link>
                    <Link href="create">
                        <Button as="button"
                            bg="none"
                            my={5}
                            fontSize="17px"
                            color="blanco"
                            w="100%"
                            _hover={{ bg: "negro" }}
                        >
                            Ayuda
                        </Button>
                    </Link>
                </Flex>

            </Flex>

            <IconButton justifyItems="flex-start"
                aria-label="Open Menu"
                size="md"
                mt={5}
                ml={"85%"}
                icon={<HamburgerIcon />}

                display={["flex", "flex", "none", "none"]}
                onClick={() => changeDisplay("flex")}
            />

            <Flex
                w="100vw"
                bgColor="secondary"
                zIndex={20}
                h="100vh"
                pos="fixed"
                top="0"
                left="0"
                overflowY="auto"
                flexDir="column"
                display={display}
            >
                <Flex justify="flex-start">
                    <IconButton
                        mt={5}
                        ml={"85%"}
                        aria-label="Close Menu"
                        size="md"
                        icon={<CloseIcon />}
                        onClick={() => changeDisplay("none")}
                    />
                </Flex>
                <Flex
                    flexDir="column"
                    align="center"
                >

                    <Link href="/">
                        <Button as=""
                            variant="outline"
                            aria-label="Home"
                            mt={15}
                            mb={2}
                            my={2}
                            mr={6}
                            w="100%">
                            Home
                        </Button>
                    </Link>
                    <Link href="planes">
                        <Button as=""
                            variant="outline"
                            aria-label="Home"
                            my={2}
                            mr={6}
                            w="100%">
                            Planes
                        </Button>
                    </Link>
                    <Link href="create">
                        <Button as=""
                            variant="outline"
                            aria-label="Home"
                            my={2}
                            mr={1}
                            w="100%">
                            Nosotros
                        </Button>
                    </Link>
                    <Link href="create">
                        <Button as=""

                            variant="outline"
                            aria-label="Home"
                            my={2}
                            mr={6}
                            w="100%">
                            Ayuda
                        </Button>
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    )
}
