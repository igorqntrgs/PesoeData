import { StyleSheet, View } from 'react-native';
import { Inserir } from './banco/Insert';
import { Remover } from './banco/Remove';
import { Atualizar } from './banco/Atualizar';
import { AllPesos } from './banco/AllContacts';

export default function App() {
  return (
    <View style={styles.container}>
      <Inserir />
      <Atualizar />
      <Remover />
      <AllPesos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
