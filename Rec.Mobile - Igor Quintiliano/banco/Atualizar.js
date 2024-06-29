import * as SQLite from 'expo-sqlite';
import { create } from './Create.js';
import { Alert, View, TextInput, Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useState } from 'react';

export function Atualizar() {
    const [id, setId] = useState('');
    const [data, setData] = useState('');
    const [peso, setPeso] = useState('');

    const update = async () => {
        try {
            db = await create();
            let result = await db.runAsync(`UPDATE pesos SET data = ?, peso = ? WHERE id = ?;`, data, peso, id);
            if (result.changes > 0) {
                Alert.alert(
                    'Sucesso',
                    'Registro de peso atualizado',
                    [
                        {
                            text: 'Ok'
                        },
                    ],
                    { cancelable: false }
                );
            } else alert('Erro ao atualizar registro de peso');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={{ backgroundColor: 'white', marginTop: 70, width: "80%" }}>
            <TextInput
                placeholder="Digite o ID"
                onChangeText={id => setId(id)}
                style={{ padding: 10 }}
            />
            <TextInput
                placeholder="Digite a Data"
                onChangeText={data => setData(data)}
                style={{ padding: 10 }}
            />
            <TextInput
                placeholder="Digite o Peso"
                onChangeText={peso => setPeso(peso)}
                keyboardType="numeric"
                style={{ padding: 10 }}
            />
            <Button title="Atualizar" onPress={() => update()} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
