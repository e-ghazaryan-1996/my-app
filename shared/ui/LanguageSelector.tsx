import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en-US', name: 'English' },
    { code: 'ru-RU', name: 'Русский' },
    { code: 'hy-AM', name: 'Հայերեն' },
  ];

  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem('language');
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
      }
    };
    loadLanguage();
  }, [i18n]);

  const changeLanguage = async (lang: string) => {
    await AsyncStorage.setItem('language', lang);
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.select} onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.selectText}>
          {languages.find(lang => lang.code === i18n.language)?.name}
        </Text>
        <AntDesign name={isOpen ? 'up' : 'down'} size={16} color="#666" />
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.optionsContainer}>
          {languages.map(lang => (
            <TouchableOpacity
              key={lang.code}
              style={[styles.option, i18n.language === lang.code && styles.selectedOption]}
              onPress={() => changeLanguage(lang.code)}
            >
              <Text
                style={[
                  styles.optionText,
                  i18n.language === lang.code && styles.selectedOptionText,
                ]}
              >
                {lang.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 200,
    zIndex: 1000,
  },
  option: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    padding: 12,
  },
  optionText: {
    color: '#333',
    fontSize: 16,
  },
  optionsContainer: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderRadius: 4,
    borderWidth: 1,
    elevation: 5,
    left: 0,
    marginTop: 4,
    position: 'absolute',
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    top: '100%',
  },
  select: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  selectText: {
    color: '#333',
    fontSize: 16,
  },
  selectedOption: {
    backgroundColor: '#f0f0f0',
  },
  selectedOptionText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default LanguageSelector;
