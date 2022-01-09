import { StyleSheet, View } from 'react-native';
import Footer from './src/components/Footer';
import TodoList from './src/components/TodoList';
import Header from './src/components/Header';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <TodoList />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
    alignItems: 'stretch',
  },
});
