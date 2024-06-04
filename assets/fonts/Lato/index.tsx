import { useFonts } from 'expo-font';


export function Lato() {
    const [fontsLoaded] = useFonts({
        'LatoBlack': require('./Lato-Black.ttf'),
        'LatoBlackItalic': require('./Lato-BlackItalic.ttf'),
        'LatoBold': require('./Lato-Bold.ttf'),
        'LatoBoldItalic': require('./Lato-BoldItalic.ttf'),
        'LatoLight': require('./Lato-Light.ttf'),
        'LatoLightItalic': require('./Lato-LightItalic.ttf'),
        'LatoRegular': require('./Lato-Regular.ttf'),
        'LatoRegularItalic': require('./Lato-Italic.ttf'),
        'LatoThin': require('./Lato-Thin.ttf'),
        'LatoThinItalic': require('./Lato-ThinItalic.ttf'),
    });
} 