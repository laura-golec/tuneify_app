import { StyleSheet} from 'react-native';
import { BackgroundGradient, Button, Text, IconButton } from '@components'
import { Colours, loadCustomFonts} from '@constants';
import { Link, useRouter } from 'expo-router';
import { registerRootComponent } from 'expo';

const HomeScreen: React.FC = () => {
  loadCustomFonts();
  const router = useRouter();
  return (
      <BackgroundGradient>
          <Text preset='heading'>Tuneify</Text>
      </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  
});

registerRootComponent(HomeScreen)

export default HomeScreen;