import { View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';

const LoginScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedText>Login Screen</ThemedText>
    </View>
  );
};

export default LoginScreen;
