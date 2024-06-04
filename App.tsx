import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { BackgroundGradient, Button, Text } from '@components'
import { Colours, loadCustomFonts} from '@constants';

export default function App() {
  loadCustomFonts();
  return (
      <BackgroundGradient>
          <Text preset='descriptor'>laura is silly</Text>
          <Button>Default Button</Button>
          <StatusBar style="auto" />
      </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  
});