
// Utility function to combine colors with an overlay
const combineColors = (baseColor: string, overlayColor: string, overlayOpacity: number): string => {
  const baseRgb = hexToRgb(baseColor);
  const overlayRgb = hexToRgb(overlayColor);

  // Calculate overlay opacity
  const opacity = Math.min(1, Math.max(0, overlayOpacity));

  // Calculate combined color
  const combinedColor = {
    r: Math.round(baseRgb.r + (overlayRgb.r - baseRgb.r) * opacity),
    g: Math.round(baseRgb.g + (overlayRgb.g - baseRgb.g) * opacity),
    b: Math.round(baseRgb.b + (overlayRgb.b - baseRgb.b) * opacity),
  };

  return rgbToHex(combinedColor);
};

// Utility function to convert hex color to rgb object
const hexToRgb = (hex: string) => {
  // Remove # if present
  hex = hex.replace(/^#/, '');

  // Parse hex to RGB
  const bigint = parseInt(hex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
};

// Utility function to convert rgb object to hex color
const rgbToHex = (rgb: { r: number; g: number; b: number }) => {
  return `#${((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1)}`;
};

const createColours = () => {
  const Colours = {
    buttonColour: "#00000066",
    buttonText: "#FFFFFF",
    buttonTextMuted: "#7F7F7F",
    backgroundColour: '#0F0F0F',
    backgroundGradient: '#999999',
    neutralBackground: "#E1E1E1",
    primaryColour: "#CF63BB",
    secondaryColour: "#3E1336",
    accentColour: '#875EBA',
    focusOverlay: "#000000",
    buttonColourFocused: "",
    primaryColourFocused: "",
    secondaryColourFocused: "",
    accentColourFocused: "",
  };

  // Compute the focused colors
  Colours.buttonColourFocused = combineColors(Colours.buttonColour, Colours.focusOverlay, 0.60);
  Colours.primaryColourFocused = combineColors(Colours.primaryColour, Colours.focusOverlay, 0.30);
  Colours.secondaryColourFocused = combineColors(Colours.secondaryColour, Colours.focusOverlay, 0.30);
  Colours.accentColourFocused = combineColors(Colours.accentColour, Colours.focusOverlay, 0.30);

  return Colours;
};

export const Colours = createColours();
 export type ColourValues = typeof Colours[keyof typeof Colours];

 export const darkTheme = {
    text: Colours.buttonText,
    background: Colours.backgroundColour,
    tint: Colours.buttonText,
    tabIconDefault: Colours.buttonTextMuted,
    tabIconSelected: Colours.buttonText,
};

  export const lightTheme = {
      text: Colours.buttonText,
      background: Colours.backgroundColour,
      tint: Colours.buttonText,
      tabIconDefault: Colours.buttonTextMuted,
      tabIconSelected: Colours.buttonText,
  };