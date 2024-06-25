import { Text as ReactText, ViewProps } from 'react-native';
import { Colours, ColourValues, defaultFontFamily, Fonts, FontWeights, FontVariants, FontStyles, Size, Sizes } from '@constants';

type Font = 'default';

type FontFamiliesDict = {
    [key in Font]: keyof typeof Fonts;
};

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

export function Text({ children, ...props }: TextProps) {
    const presetConfig = props.preset ? presetConfigs[props.preset] : presetConfigs['default'];

    const finalValues = {
        ...presetConfig,
        ...props,
    };

    const { font, size, weight, fontStyle, colour } = finalValues;

    const fontFamilyObject = Fonts[fontFamilies[font]];
    const fontVariant = weight + fontStyle;
    const fontFamilyValue = fontFamilyObject[fontVariant as keyof typeof FontVariants];
    return (
        <ReactText style={[{ fontFamily: fontFamilyValue, fontSize: Sizes[size], color: colour}]}>{children}</ReactText>
    );
}