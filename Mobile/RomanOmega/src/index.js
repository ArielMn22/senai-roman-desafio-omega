import {
    createAppContainer,
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator
} from "react-navigation";

import Login from './pages/login';
import CadastroUsuario from './pages/cadastrarUsuario';
import CadastroProjetos from './pages/cadastrarProjetos';
import PaginaInicial from './pages/paginaInicial';
import CadastroProjetos from './pages/cadastrarProjetos'

<<<<<<< HEAD
const AuthStack = createStackNavigator({ CadastroProjetos, CadastroUsuario, Login, PaginaInicial });
  
export default createAppContainer(
    AuthStack
=======
const AuthStack = createStackNavigator({ Login, Cadastro });

const MainNavigator = createBottomTabNavigator(
    {
        CadastroProjetos,
        PaginaInicial
    },
    {
        initialRouteName: "PaginaInicial",
        swipeEnabled: true,
        tabBarOptions: {
            showLabel: true,
            inactiveBackgroundColor: "#6345B2",
            activeBackgroundColor: "#4729A7",
            activeTintColor: "#FFFFFF",
            inactiveTintColor: "#FFFFFF",
            style: {
                height: 50
            }
        }
    }
>>>>>>> 1a2a9ffe7d96de8379cf7dcdb402fa6e8143439d
);



export default createAppContainer(
    createSwitchNavigator(
        {
            MainNavigator,
            AuthStack
        },
        {
            initialRouteName: "AuthStack"
        }
    )
);