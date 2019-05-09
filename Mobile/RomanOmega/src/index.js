import {
    createAppContainer,
    createStackNavigator
} from "react-navigation";

import Login from './pages/login';
import CadastroUsuario from './pages/cadastrarUsuario';
import CadastroProjetos from './pages/cadastrarProjetos';
import PaginaInicial from './pages/paginaInicial';

const AuthStack = createStackNavigator({ CadastroProjetos, CadastroUsuario, Login, PaginaInicial });
  
export default createAppContainer(
    AuthStack
);

