import { BackgroundGradient, Button, Text } from '@components';
import { useRouter } from 'expo-router';
import React from 'react';

const LibraryScreen: React.FC = () => {
  const router = useRouter();

  return (
    <BackgroundGradient>
      <Text preset='subheading'>Library Screen</Text>
      <Button onPress={}>Test API</Button>
    </BackgroundGradient>
  );
}

export default LibraryScreen;