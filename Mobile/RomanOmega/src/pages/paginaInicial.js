import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../services/api';

import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';

export default class PaginaInicial extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);

        this.state = {
            listaProjetos: []
        }
    }

    carregarProjetos = async () => {
        await api.get('/projetos')
            .then(response => {
                this.setState({ listaProjetos: response.data });
            })
            .catch(function (error) {
                console.warn(error);
            })
    }

    componentDidMount() {
        this.carregarProjetos();
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.userName}>Bruno Salles</Text>
                    <Icon name="arrow-downward" size={25} color='#000' />
                </View>

                <View style={styles.main}>
                    <FlatList
                        data={this.state.listaProjetos}
                        keyExtractor={item => item.id}
                        renderItem={this.renderizaItem}
                    />
                </View>
            </ScrollView>
            
        );
    }

    renderizaItem = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.card__header}>
                <Text>{item.usuarioNome}</Text>
                <Text>{item.temaNome}</Text>
            </View>
            <View style={styles.card__main}>
                <Text>
                    Lorem ipsum dolor sit amet enucnuee euueuceue ceuceuhece ccuechuecheu
                </Text>
            </View>
            <View style={styles.card__footer}>
                <Text>Projeto: {item.nome}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
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
        width: '70%',
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