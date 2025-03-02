import { useTranslation } from 'react-i18next';
import { View, StyleSheet, Image } from 'react-native';

import { Spacing } from '@/constants/design';
import Button from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';

const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logo}
          source={require('@/assets/images/splash-flower.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.formWrapper}>
        <Input placeholder={t('login.email')} />
        <Input type="password" placeholder={t('login.password')} />
        <Button text="login.login" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingInline: Spacing['4xl'],
  },
  formWrapper: {
    gap: Spacing.md,
  },
  logo: {
    height: 120,
    width: 120,
  },
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
});

export default HomeScreen;
