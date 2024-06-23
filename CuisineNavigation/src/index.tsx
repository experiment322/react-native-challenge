import Categories from '@/features/Categories';
import {colors} from '@/theme';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colors.White,
  },
  appContent: {
    margin: 24,
  },
});

function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.appContent}>
        <Categories />
      </View>
    </SafeAreaView>
  );
}

export default App;
