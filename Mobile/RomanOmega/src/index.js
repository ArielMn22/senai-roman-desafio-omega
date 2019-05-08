import {
    createAppContainer,
    createStackNavigator
} from "react-navigation";

import Login from './pages/login';
import Cadastro from './pages/cadastrarUsuario';

const AuthStack = createStackNavigator({ Login, Cadastro });

export default createAppContainer(
    AuthStack
);