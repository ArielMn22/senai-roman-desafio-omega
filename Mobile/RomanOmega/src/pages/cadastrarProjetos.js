import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

import Axios from "axios";

export default class CadastrarUsuario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      email: "",
      senha: "",
      confirmPassword: "",
      proj: ""
      // idTema: [
      //   {
      //     id: 1,
      //     nome: "Selecione"
      //   }
      // ],
      // listaTemas: [],
      // temaSelecionado: ""
    };
  }

  listarTemas = async () => {
    Axios.get("http://192.168.3.143:5000/api/projetos").then(data => {
      this.setState({ listaTemas: data.data });
    });
  };

  componentDidMount() {
    this.listarTemas();
  }

  cadProjeto = async () => {
    let projeto = {
      nome: this.state.proj,
      idTema: 1,
      idUsuario: 1
    };

    // console.warn("usuario");
    // console.warn(usuario);
    // console.warn({usuario});
    let auth = AsyncStorage.getItem("usr-roman");

    console.warn(auth);

    const data = await Axios.post(
      "http://192.168.3.143:5000/api/projetos",
      projeto,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(data => {
      console.warn("Projeto cadastrado com sucesso!");
    });
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
          <Text style={styles.mainTitle}>Cadastrar Projetos</Text>

          <View style={styles.loginBox}>
            <View style={styles.inputBoxEmail}>
              <Icon name="email" size={24} color="#FFF" />
              <TextInput
                style={styles.inputEmail}
                placeholder="Ideia do projeto"
                placeholderTextColor="#FFFFFF"
                underlineColorAndroid="#FFFFFF"
                onChangeText={proj => this.setState({ proj })}
              />
            </View>

            {/* <Picker
              selectedValue={this.state.idTema}
              onValueChange={itemValue => this.setState({ idTema: itemValue })}
            >
              {this.state.listaTemas.map(tema => {
                <Picker.Item label={tema.nome} value={tema.id} />;
              })}
            </Picker> */}

            <View style={styles.styleBtn}>
              <TouchableOpacity
                style={styles.btnLogin}
                onPress={this.cadProjeto}
              >
                {/* <Icon name="add-box" size={20} color="#000" /> */}
                <Text style={styles.btnLoginText}>Cadastrar Projeto</Text>
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
