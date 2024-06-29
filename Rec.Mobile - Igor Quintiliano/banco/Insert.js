import * as SQLite from 'expo-sqlite';
import { create } from './Create.js';
import { Alert, View, TextInput, Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useState } from 'react';

export function Inserir() {
    const [data, setData] = useState('');
    const [peso, setPeso] = useState('');

    const insert = async () => {
        try {
            db = await create();
            let result = await db.runAsync(`INSERT INTO pesos (data, peso) VALUES (?, ?);`, data, peso);
            if (result.changes > 0) {
                Alert.alert(
                    'Sucesso',
                    'Registro de peso inserido',
                    [
                        {
                            text: 'Ok'
                        },
                    ],
                    { cancelable: false }
                );
            } else alert('Erro ao inserir registro de peso');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={{ backgroundColor: 'white', marginTop: 70, width: "80%" }}>
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
            <Button title="Salvar" onPress={() => insert()} />
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