import {extendTheme} from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"

export const myNewTheme = extendTheme ({
    colors: {
        primary: "#015469",
        secondary: "#CDAFD2",
        azulninox: "#003FA3",
        blanco: "#F5F9FF",
        piel: "#FEB2B2",
        negro: "#10141B"

    },

})

// This is the default breakpoint
const breakpoints = createBreakpoints({
  sm: "400px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
})
