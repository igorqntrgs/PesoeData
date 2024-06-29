import React, { useState } from 'react';
import { Alert, Button, FlatList, Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { create } from './Create.js';

export function AllPesos(){
    let [flatListItems, setFlatListItems] = useState([]);

    const getAll = async () => {
        try{
            db = await create();
            let allRows = await db.getAllAsync('SELECT * FROM pesos');
            setFlatListItems(allRows);
            console.log("[LOG] Dados recuperados da tabela pesos");
            if(allRows.length==0){
                Alert.alert(
                    'Aviso',
                    'Nenhum registro de peso encontrado',
                    [
                        {
                            text: 'Ok'
                        },
                    ],
                    { cancelable: false }
                );
            }
        } catch (error) {
            console.log(error);
        }
    }

    let listItemView = (item) => {
        return (
            <View
                key={item.id}
                style={{ backgroundColor: '#EEE', marginTop: 20, padding: 30, borderRadius: 10 }}>
                <Text style={styles.textheader}>ID</Text>
                <Text style={styles.textbottom}>{item.id}</Text>

                <Text style={styles.textheader}>Data</Text>
                <Text style={styles.textbottom}>{item.data}</Text>

                <Text style={styles.textheader}>Peso</Text>
                <Text style={styles.textbottom}>{item.peso}</Text>
            </View>
        );
    };

    return (
        <View style={{ flex: 1, width: "80%", marginTop: 10 }}>
            <Button title="Listar" onPress={() => getAll()} />
            <View style={{ flex: 1, backgroundColor: 'white'}}>
                <View style={{ flex: 1 }}>
                    <FlatList
                        style={{ marginTop: 30 }}
                        contentContainerStyle={{ paddingHorizontal: 20 }}
                        data={flatListItems}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => listItemView(item)}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textheader: {
        color: '#111',
        fontSize: 12,
        fontWeight: '700',
    },
    textbottom: {
        color: '#111',
        fontSize: 18,
    },
});
