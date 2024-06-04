export const Colours = {
    buttonColour: "#00000066",
    buttonColourFocused: "#000000CC",
    buttonText: "#FFFFFF",
    buttonTextMuted: "#7F7F7F",
    backgroundColour: '#0F0F0F',
    backgroundGradient: '#999999',
    neutralBackground: "#E1E1E1",
    accentColour: "#CF63BB",
    secondaryAccentColour: "#3E1336",
    accentColourFocued: "#0000004D",
    secondaryAccentColourFocused: "#0000004D"
  }

 export type ColourValues = typeof Colours[keyof typeof Colours];