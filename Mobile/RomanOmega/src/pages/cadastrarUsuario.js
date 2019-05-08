import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

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

// import api from "../services/api";
import Axios from "axios";

export default class CadastrarUsuario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  cadastrarUsuario = async () => {
    console.warn("Entrou no metodo...");

    let usuario = {
      nome: this.state.nome,
      email: this.state.email,
      senha: this.state.password,
      idTipoUsuario: 1
    };

    await Axios.post("http://localhost:5000/api/usuarios", usuario)
      .then(data => {
        console.warn(data);
      })
      .catch(erro => {
        console.warn(erro);
      });
    // const resposta = await api.post("/usuarios", usuario);
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginBox}>
          <View style={styles.inputBoxEmail}>
            <Icon name="email" size={24} color="#FFF" />
            <TextInput
              style={styles.inputEmail}
              placeholder="Seu nome"
              placeholderTextColor="#FFFFFF"
              underlineColorAndroid="#FFFFFF"
              onChange={nome => this.setState({ nome })}
            />
          </View>

          <View style={styles.inputBoxEmail}>
            <Icon name="email" size={24} color="#FFF" />
            <TextInput
              style={styles.inputEmail}
              placeholder="Insira seu melhor e-mail"
              placeholderTextColor="#FFFFFF"
              underlineColorAndroid="#FFFFFF"
              onChange={email => this.setState({ email })}
            />
          </View>

          <View style={styles.inputBoxPass}>
            <Icon name="lock" size={24} color="#FFF" />
            <TextInput
              style={styles.inputSenha}
              placeholder="Password"
              placeholderTextColor="#FFFFFF"
              underlineColorAndroid="#FFFFFF"
              onChange={password => this.setState({ password })}
            />
          </View>

          <View style={styles.inputBoxPass}>
            <Icon name="lock" size={24} color="#FFF" />
            <TextInput
              style={styles.inputSenha}
              placeholder="Confirme sua password"
              placeholderTextColor="#FFFFFF"
              underlineColorAndroid="#FFFFFF"
              onChange={confirmPassword => this.setState({ confirmPassword })}
            />
          </View>

          <TouchableOpacity
            style={styles.btnLogin}
            onPress={this.cadastrarUsuario}
          >
            <Icon name="send" size={20} color="#000" />
            <Text style={styles.btnLoginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7B1FA2",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },

  loginBox: {
    width: "70%"
  },

  inputBoxEmail: {
    flexDirection: "row",
    alignItems: "center"
  },

  inputEmail: {
    width: "90%"
  },

  inputBoxPass: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15
    // marginBottom: 40
  },

  inputSenha: {
    width: "90%"
  },

  btnLogin: {
    marginTop: 40,
    width: 91,
    height: 35,
    backgroundColor: "#ADED70",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#620C87"
  },

  btnLoginText: {
    marginLeft: 5,
    color: "#000"
  }
});
