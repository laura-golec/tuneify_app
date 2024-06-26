import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, ButtonProps } from './Button';
import { Icon, Icons } from '@constants';
import { Colours, Size, Sizes } from '@constants';

export interface IconButtonProps extends ButtonProps {
    icon?: Icon;
    size?: Size;
    fillRule?: 'evenodd' | 'nonzero';
    onPress?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon = 'Home', fillRule = 'evenodd', defaultColour = Colours.buttonText, activeColour = Colours.buttonTextMuted, size = 'extraLarge', ...buttonProps }) => {
    const IconComponent = Icons[icon];
    const [localColour, setLocalColour] = useState(defaultColour);

    buttonProps.onPressIn = buttonProps.onPressIn ?? (() => setLocalColour(activeColour));
    buttonProps.onPressOut = buttonProps.onPressOut ?? (() => setLocalColour(defaultColour));

    const dynamicStyles = StyleSheet.create({
        icon: {
          flex: 0,
        }
      });

    return (
        <Button
            {...buttonProps}
            styleName={dynamicStyles.icon}
            defaultColour={defaultColour}
            activeColour={activeColour}
        >
            <IconComponent width={Sizes[size]} height={Sizes[size]} fill={localColour} fillRule="evenodd"/>
        </Button>
    );
}
