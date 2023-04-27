import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { getIcon, changeIcon } from 'react-native-dynamic-change-icon';

export default function App() {
  const [result, setResult] = React.useState<string>('');

  const getIconApp = async () => {
    try {
      const iconName = await getIcon();
      setResult(iconName);
    } catch (error) {
      console.error('🚀 ~ file: App.tsx:15 ~ getIconApp ~ error:', error);
    }
  };

  const changeIconApp = async () => {
    try {
      const resultIconName = await changeIcon('default');
      setResult(resultIconName);
    } catch (error) {
      console.error('🚀 ~ file: App.tsx:23 ~ changeIconApp ~ error:', error);
    }
  };

  React.useEffect(() => {
    getIconApp();
  }, []);

  React.useEffect(() => {
    changeIconApp();
  }, [result]);

  return (
    <View style={styles.container}>
      <Text>Icon Name: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
