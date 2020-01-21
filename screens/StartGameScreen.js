import React from 'react';
import {Text, View, StyleSheet, TextInput, Button} from "react-native";
import Card from "../components/Card";

const StartGameScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button onPress={() => {
                        }} title="Reset" color=""/>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={() => {
                        }} title="Confirm"  color="#f7287b"/>
                    </View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        paddingHorizontal: 15
    },
    title: {
        fontSize: 25,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
    },
    button: {
        width: '40%'
    }
});

export default StartGameScreen;
