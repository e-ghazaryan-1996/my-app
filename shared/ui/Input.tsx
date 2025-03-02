import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

import { BorderRadius, Colors, Spacing } from '@/constants/design';

import type { TextInputProps } from 'react-native';

type InputType = 'text' | 'password';

interface InputProps extends TextInputProps {
  type?: InputType;
}

const Input: React.FC<InputProps> = ({ type, ...props }) => {
  const [isPasswirdVisible, setIsPasswordVisible] = useState(false);
  const isPassword = type === 'password';
  const icon = isPasswirdVisible ? 'eye-off' : 'eye';

  const togglePasswordVisibility = () => setIsPasswordVisible(prev => !prev);
  const isSecureTextEntry = isPassword && !isPasswirdVisible;

  return (
    <View style={styles.inputContainer}>
      <TextInput
        secureTextEntry={isSecureTextEntry}
        autoComplete="off"
        selectionColor={Colors.primary}
        style={styles.input}
        {...props}
      />
      {isPassword && (
        <Pressable style={styles.passwordIcon} onPress={togglePasswordVisibility}>
          <Ionicons name={icon} size={20} color={Colors.primary} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.primary,
    borderRadius: BorderRadius.rounded,
    borderWidth: 1,
    paddingBlock: Spacing.sm,
    paddingInline: Spacing.xs,
  },
  inputContainer: {
    position: 'relative',
  },
  passwordIcon: {
    position: 'absolute',
    right: Spacing.xs,
    top: '50%',
    transform: [{ translateY: '-50%' }],
  },
});

export default Input;
