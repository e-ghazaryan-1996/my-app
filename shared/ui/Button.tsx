import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Colors, Spacing } from '@/constants/design';

import type { TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, ...props }) => {
  const { t } = useTranslation();

  return (
    <TouchableOpacity style={styles.buttonWrapper} {...props}>
      <Text style={styles.buttonText}>{t(text)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: Colors.white,
  },
  buttonWrapper: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    paddingBlock: Spacing.sm,
  },
});

export default Button;
