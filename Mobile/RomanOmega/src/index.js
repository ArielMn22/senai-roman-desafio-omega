import {
    createAppContainer,
    createStackNavigator
} from "react-navigation";

import Login from './pages/login';
import Cadastro from './pages/cadastrarUsuario';
import PaginaInicial from './pages/paginaInicial';

const AuthStack = createStackNavigator({ Cadastro, Login, PaginaInicial });
  
export default createAppContainer(
    AuthStack
);

