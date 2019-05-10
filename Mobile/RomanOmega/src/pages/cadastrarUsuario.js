import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";

// import api from "../services/api";
import Axios from "axios";

export default class CadastrarUsuario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      email: "",
      senha: "",
      confirmPassword: ""
    };
  }

  // cadUsuario() {
  cadUsuario = async () => {
    // console.warn("Entrou no metodo...");

    let usuario = {
      nome: this.state.nome,
      email: this.state.email,
      senha: this.state.senha,
      idTipoUsuario: 1
    };

    // console.warn("usuario");
    // console.warn(usuario);
    // console.warn({usuario});

    const data = await Axios.post(
      "http://192.168.3.143:5000/api/usuarios",
      usuario,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(data => {
      // console.warn(data.data);
      Alert.alert("Usuário cadastrado com sucesso!");
      // console.warn("Usuário cadastrado com sucesso!");
    });
    // .catch(erro => {
    //   console.warn(erro);
    // });

    this.props.navigation.navigate("Login");

    // const resposta = await api.post("/usuarios", usuario);
    // console.warn(resposta.data);
  };

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ImageBackground
        source={require("../assets/images/background_loginNew.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <Text style={styles.mainTitle}>Register</Text>

          <View style={styles.loginBox}>
            <View style={styles.inputBoxEmail}>
              <Icon name="email" size={24} color="#FFF" />
              <TextInput
                style={styles.inputEmail}
                placeholder="Seu nome"
                placeholderTextColor="#FFFFFF"
                underlineColorAndroid="#FFFFFF"
                onChangeText={nome => this.setState({ nome })}
              />
            </View>

            <View style={styles.inputBoxEmail}>
              <Icon name="email" size={24} color="#FFF" />
              <TextInput
                style={styles.inputEmail}
                placeholder="Insira seu melhor e-mail"
                placeholderTextColor="#FFFFFF"
                underlineColorAndroid="#FFFFFF"
                onChangeText={email => this.setState({ email })}
              />
            </View>

            <View style={styles.inputBoxPass}>
              <Icon name="lock" size={24} color="#FFF" />
              <TextInput
                style={styles.inputSenha}
                placeholder="Password"
                placeholderTextColor="#FFFFFF"
                underlineColorAndroid="#FFFFFF"
                onChangeText={senha => this.setState({ senha })}
              />
            </View>

            <View style={styles.inputBoxPass}>
              <Icon name="lock" size={24} color="#FFF" />
              <TextInput
                style={styles.inputSenha}
                placeholder="Confirme sua password"
                placeholderTextColor="#FFFFFF"
                underlineColorAndroid="#FFFFFF"
                onChangeText={confirmPassword =>
                  this.setState({ confirmPassword })
                }
              />
            </View>

            <View style={styles.styleBtn}>
              <TouchableOpacity
                style={styles.btnLogin}
                onPress={this.cadUsuario}
              >
                <Text style={styles.btnLoginText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },

  mainTitle: {
    fontSize: 31,
    color: "#FFF",
    marginBottom: 40
  },

  loginBox: {
    width: "70%"
  },

  inputBoxEmail: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15
  },

  inputEmail: {
    width: "90%",
    color: "#FFF"
  },

  inputBoxPass: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15
  },

  inputSenha: {
    width: "90%",
    color: "#FFF"
  },

  styleBtn: {
    alignItems: "center"
  },

  btnLogin: {
    marginTop: 40,
    width: 100,
    height: 40,
    backgroundColor: "#ADED70",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#620C87",
    marginLeft: 10
  },

  btnLoginText: {
    marginLeft: 5,
    color: "#000"
  }
});
