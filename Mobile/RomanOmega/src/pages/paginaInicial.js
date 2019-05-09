import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import {
    View,
    Text,
    StyleSheet,
    Animated
} from 'react-native';

export default class PaginaInicial extends Component {
    static navigationOptions = {
        header: null
    };

    onHandlerStateChanged(event){

    }

    render(){

        const translateY = new Animated.Value(0);

        const AnimatedEvent = Animated.event(
            [
                {
                    nativeEvent: {
                        translationY: translateY,
                    },
                },
            ],
            { useNativeDriver: true },
        );

        return(
            <PanGestureHandler
                onGestureEvent={onHandlerStateChanged}
                onHandlerStateChange={onHandlerStateChanged}
            >
                <Animated.View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.userName}>Bruno Salles</Text>
                        <Icon name="arrow-downward" size={25} color='#000'/>
                    </View>

                    <View style={styles.main}>
                        <View style={styles.card}>
                            <View style={styles.card__header}>
                                <Text>Bruno Salles</Text>
                                <Text>Desenvolvimento</Text>
                            </View>
                            <View style={styles.card__main}>
                                <Text>
                                    Lorem ipsum dolor sit amet enucnuee euueuceue ceuceuhece ccuechuecheu
                                </Text>
                            </View>
                            <View style={styles.card__footer}>
                                <Text>Projeto: desenvolvimento de projetos</Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <View style={styles.card__header}>
                                <Text>Bruno Salles</Text>
                                <Text>Desenvolvimento</Text>
                            </View>
                            <View style={styles.card__main}>
                                <Text>
                                    Lorem ipsum dolor sit amet enucnuee euueuceue ceuceuhece ccuechuecheu
                                </Text>
                            </View>
                            <View style={styles.card__footer}>
                                <Text>Projeto: desenvolvimento de projetos</Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <View style={styles.card__header}>
                                <Text>Bruno Salles</Text>
                                <Text>Desenvolvimento</Text>
                            </View>
                            <View style={styles.card__main}>
                                <Text>
                                    Lorem ipsum dolor sit amet enucnuee euueuceue ceuceuhece ccuechuecheu
                                </Text>
                            </View>
                            <View style={styles.card__footer}>
                                <Text>Projeto: desenvolvimento de projetos</Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <View style={styles.card__header}>
                                <Text>Bruno Salles</Text>
                                <Text>Desenvolvimento</Text>
                            </View>
                            <View style={styles.card__main}>
                                <Text>
                                    Lorem ipsum dolor sit amet enucnuee euueuceue ceuceuhece ccuechuecheu
                                </Text>
                            </View>
                            <View style={styles.card__footer}>
                                <Text>Projeto: desenvolvimento de projetos</Text>
                            </View>
                        </View>
                    </View>
                </Animated.View>
            </PanGestureHandler>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        transform: [{
            translateY,
        }]
    },

    header: {
        height: 55,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderWidth: 0.4,
        borderColor: "#000",
        marginBottom: 40
    },

    userName: {
        color: '#000',
        fontSize: 16
    },

    main: {
        alignItems: 'center'
    },

    card: {
        borderRadius: 4,
        borderWidth: 0.4,
        borderColor: "#000",
        width: '80%',
        height: 300,
        marginBottom: 30
    },

    card__header: {
        width: '100%',
        height: 45,
        borderColor: '#000',
        borderBottomWidth: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },

    card__main: {
        padding: 10,
        height: 210
    },

    card__footer: {
        width: '100%',
        height: 45,
        borderTopWidth: 0.4,
        borderColor: '#000',
        justifyContent: 'center',
        paddingLeft: 10
    },
});