import { StyleSheet, Pressable, Alert, ViewProps } from 'react-native';
import { Colours } from '@constants';
import { Text } from './Text'

type StyleName = 'default' 
                | 'special';

type ButtonProps = {
  styleName?: StyleName;
} & ViewProps;

// Define the Button component as a function
export function Button({ children, styleName = 'default' }: ButtonProps) {
  const createTwoButtonAlert = () =>
      Alert.alert('Alert Title', 'My Alert Msg', [
          {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);

  return (
      <Pressable
          onPress={createTwoButtonAlert}
          style={styles[styleName]}
      >
          <Text>{children}</Text>
      </Pressable>
  );
}

const styles = StyleSheet.create({
  default: {
    flex: 0,
    padding: 10,
    borderRadius: 20,
    backgroundColor: Colours.accentColour,
    overflow: 'hidden'
  },
  special: {
    flex: 0,
    padding: 10,
    borderRadius: 20,
    backgroundColor: Colours.secondaryAccentColour,
    overflow: 'hidden'
  },
});