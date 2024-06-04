import { Colours } from '@constants';
import { LinearGradient } from 'expo-linear-gradient';

import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

type BackgroundGradientProps = {
    colour?: string;
} & ViewProps;

export function BackgroundGradient({ children, colour = Colours.backgroundGradient }: BackgroundGradientProps) {
    const startColour = colour + '33'; // set opacity to 20%
    const endColour = colour + '05'; // set opacity to 5%
    return (
        <View style={styles.container}>
            <LinearGradient colors={[startColour, endColour]} style={styles.gradient} end={[0.9, 0.9]}>
                <View style={styles.content}>
                    {children}
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colours.backgroundColour,
        alignItems: 'center',
        justifyContent: 'center',
        color: Colours.buttonText
    },
    gradient: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
});