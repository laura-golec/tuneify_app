
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

export const Colours = {
    buttonColour: "#00000066",
    buttonColourFocused: () => combineColors(Colours.buttonColour, Colours.focusOverlay, 0.60),
    buttonText: "#FFFFFF",
    buttonTextMuted: "#7F7F7F",
    backgroundColour: '#0F0F0F',
    backgroundGradient: '#999999',
    neutralBackground: "#E1E1E1",
    accentColour: "#CF63BB",
    secondaryAccentColour: "#3E1336",
    accentColourFocused: () => combineColors(Colours.accentColour, Colours.focusOverlay, 0.30),
    secondaryAccentColourFocused: () => combineColors(Colours.secondaryAccentColour, Colours.focusOverlay, 0.30),
    focusOverlay: "#000000",
  }

 export type ColourValues = typeof Colours[keyof typeof Colours];