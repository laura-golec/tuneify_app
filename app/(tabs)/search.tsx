import React from 'react';
import { Button, BackgroundGradient, Text } from '@components';
import { useRouter } from 'expo-router';

const SearchScreen: React.FC = () => {
  const router = useRouter();

  return (
    <BackgroundGradient>
      <Text preset='subheading'>Search Screen</Text>
    </BackgroundGradient>
  );
}

export default SearchScreen;
