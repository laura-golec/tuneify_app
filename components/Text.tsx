import { Text as ReactText, ViewProps } from 'react-native';
import { Colours, ColourValues, defaultFontFamily, Fonts, FontWeights, FontVariants, FontStyles } from '@constants';

type Font = 'default';

type FontFamiliesDict = {
    [key in Font]: keyof typeof Fonts;
};

type Size = 'extraLarge' 
               | 'large'
               | 'medium'
               | 'semiMedium'
               | 'small';

type SizeDict = {
    [key in Size]: number;
};

const sizes: SizeDict = {
    'extraLarge': 22,
    'large': 20,
    'medium': 15,
    'semiMedium': 12,
    'small': 10
}

const fontFamilies: FontFamiliesDict = {
    'default': defaultFontFamily,
}

type PresetConfig = {
    font: Font;
    size: Size;
    weight: keyof typeof FontWeights;
    fontStyle: keyof typeof FontStyles;
    colour: ColourValues;
};

type Preset = 'default' | 'title' | 'heading' | 'subheading' | 'descriptor';

const presetConfigs: Record<Preset, PresetConfig> = {
    'default': {
        font: 'default',
        size: 'semiMedium',
        weight: 'regular',
        fontStyle: 'normal',
        colour: Colours.buttonText,
    },
    'title': {
        font: 'default',
        size: 'medium',
        weight: 'regular',
        fontStyle: 'normal',
        colour: Colours.buttonText,
    },
    'heading': {
        font: 'default',
        size: 'extraLarge',
        weight: 'black',
        fontStyle: 'normal',
        colour: Colours.buttonText,
    },
    'subheading': {
        font: 'default',
        size: 'medium',
        weight: 'thin',
        fontStyle: 'normal',
        colour: Colours.buttonText,
    },
    'descriptor': {
        font: 'default',
        size: 'small',
        weight: 'thin',
        fontStyle: 'normal',
        colour: Colours.buttonTextMuted,
    },
};
               
type TextProps = {
  font?: Font;
  size?: Size;
  weight?: keyof typeof FontWeights;
  fontStyle?: keyof typeof FontStyles;
  colour?: ColourValues;
  preset?: Preset;
} & ViewProps;


export function Text({ children, preset, font = 'default', size = 'semiMedium', weight = 'black', fontStyle = 'normal', colour = Colours.buttonText}: TextProps) {
    if (preset) {
        const presetConfig = presetConfigs[preset];
        ({font, size, weight, fontStyle, colour} = presetConfig);
    }
    const fontFamilyObject = Fonts[fontFamilies[font]];
    const fontVariant = weight + fontStyle;
    const fontFamilyValue = fontFamilyObject[fontVariant as keyof typeof FontVariants];
    return (
        <ReactText style={[{ fontFamily: fontFamilyValue, fontSize: sizes[size], color: colour }]}>{children}</ReactText>
    );
}