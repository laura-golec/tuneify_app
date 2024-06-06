import React from 'react';
import { StyleSheet, Pressable, ViewProps } from 'react-native';
import { Icon, Icons } from '@constants'
import { ColourValues, Colours, Size, Sizes } from '@constants';

type IconButtonProps = {
    icon?: Icon;
    colour?: ColourValues;
    size?: Size;
} & ViewProps;

export function IconButton({ icon = 'Settings', colour = Colours.buttonText, size = 'extraLarge', ...props }: IconButtonProps) {
    const IconComponent = Icons[icon];
    return (
        <Pressable onPress={() => console.debug('eurmmmm')} style={styles.default}>
            <IconComponent width={Sizes[size]} height={Sizes[size]} fill={colour}/>
        </Pressable>
    );
}

// Define the styles for the component
const styles = StyleSheet.create({
    default: {
        flex: 0,
        overflow: 'hidden',
        margin: 5,
    },
    special: {
        flex: 0,
        padding: 10,
        borderRadius: 20,
        backgroundColor: Colours.secondaryAccentColour,
        overflow: 'hidden'
    },
});
