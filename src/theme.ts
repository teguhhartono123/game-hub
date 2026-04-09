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

//--------------------------

// import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

// const config = defineConfig({
//   theme: {
//     // semanticTokens ensure these colors work in Dark Mode
//     semanticTokens: {
//       colors: {
//         gray: {
//           50: { value: "#f9f9f9" },
//           100: { value: "#ededed" },
//           200: { value: "#dedede" },
//           300: { value: "#b3b3b3" },
//           400: { value: "#a0a0a0" },
//           500: { value: "#898989" },
//           600: { value: "#6c6c6c" },
//           700: { value: "#202020" }, 
//           800: { value: "#121212" }, 
//           900: { value: "#111" },
//           950: { value: "#151515" }, // Main background color for RAWG
//         },
//       },
//     },
//   },
// })

// // createSystem is the v3 replacement for extendTheme
// const theme = createSystem(defaultConfig, config)

// export default theme
