import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Body from './Body';

export default function Todo(props) {
  return (
    <View style={styles.container} accessibilityLabel="tTodoComponentView">
      <Header todo={props.todo} />
      <Body todo={props.todo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
  },
});
