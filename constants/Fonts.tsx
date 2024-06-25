import { Lato } from '@assets'

export function loadCustomFonts() {
    const [loaded, error] = Lato()
    return [loaded, error]
}

export const FontWeights = {
    'black': 'black',
    'bold': 'bold',
    'light': 'light',
    'regular': 'regular',
    'thin': 'thin',
};

export const FontStyles = {
    'normal': '',
    'italic': 'Italic',
};

export const FontVariants = {
    'black': 'black',
    'blackItalic': 'blackItalic',
    'bold': 'bold',
    'boldItalic': 'boldItalic',
    'light': 'light',
    'lightItalic': 'lightItalic',
    'regular': 'regular',
    'regularItalic': 'regularItalic',
    'thin': 'thin',
    'thinItalic': 'thinItalic'
}

export const Fonts = {
    'Lato': {
        'black': 'LatoBlack',
        'blackItalic': 'LatoBlackItalic',
        'bold': 'LatoBold',
        'boldItalic': 'LatoBoldItalic',
        'regularItalic': 'LatoRegularItalic',
        'light': 'LatoLight',
        'lightItalic': 'LatoLightItalic',
        'regular': 'LatoRegular',
        'thin': 'LatoThin',
        'thinItalic': 'LatoThinItalic'
    },
};


export const defaultFontFamily = 'Lato'