import { createTheming } from "@callstack/react-theme-provider"

import defaultTheme from "./default"

const { ThemeProvider, withTheme } = createTheming(defaultTheme)

export { ThemeProvider, withTheme }
