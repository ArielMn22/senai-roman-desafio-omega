import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    AsyncStorage
} from "react-native";

import api from '../services/api';

export default class Login extends Component{
    render(){
        return(
            <View style={styles.container}>

            </View>
        );
    };
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#7B1FA2",
        width: "100%",
        height: "100%"
    }
});