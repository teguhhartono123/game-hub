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


// import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

// const config = defineConfig({
//   theme: {
//     semanticTokens: {
//       colors: {
//         gray: {
//           // RAWG's main background is often #151515
//           // Cards and sidebars are often #202020
//           50: { value: "#f3f3f3" },
//           100: { value: "#d9d9d9" },
//           200: { value: "#bfbfbf" },
//           300: { value: "#a6a6a6" },
//           400: { value: "#8c8c8c" },
//           500: { value: "#737373" },
//           600: { value: "#595959" },
//           700: { value: "#333333" }, // Lighter borders/dividers
//           800: { value: "#202020" }, // Card backgrounds
//           900: { value: "#151515" }, // Deep sidebar/Main background
//           950: { value: "#0b0b0b" }  // Purest black areas
//         }
//       }
//     }
//   }
// })

// export default createSystem(defaultConfig, config)
