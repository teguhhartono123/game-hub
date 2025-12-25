import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  // In v3, initial color mode is often handled via the provider or next-themes
  // but can be defined here for the system engine.
  theme: {
    // Customize your tokens here (colors, fonts, etc.)
  }
})

// createSystem replaces extendTheme
export default createSystem(defaultConfig, config)
