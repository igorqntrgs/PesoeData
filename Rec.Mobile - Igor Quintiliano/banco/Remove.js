import * as SQLite from 'expo-sqlite';
import { create } from './Create.js';
import { Alert, View, TextInput, Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useState } from 'react';

export function Remover() {
    const [id, setId] = useState('');

    const remove = async () => {
        try {
            db = await create();
            let result = await db.runAsync(`DELETE FROM pesos WHERE id = ?;`, id);
            if (result.changes > 0) {
                Alert.alert(
                    'Sucesso',
                    'Registro de peso removido',
                    [
                        {
                            text: 'Ok'
                        },
                    ],
                    { cancelable: false }
                );
            } else alert('Erro ao remover registro de peso');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={{ flex: 1, width: "80%" }}>
            <TextInput
                placeholder="Digite o ID"
                onChangeText={id => setId(id)}
                style={{ padding: 2 }}
            />
            <Button title="Deletar" onPress={() => remove()} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});
