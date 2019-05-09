import {
    createAppContainer,
    createStackNavigator,
    createBottomTabNavigator
} from "react-navigation";

import Login from './pages/login';
import Cadastro from './pages/cadastrarUsuario';
import PaginaInicial from './pages/paginaInicial';
import CadastroProjetos from './pages/cadastrarProjetos'

const AuthStack = createStackNavigator({ Login, Cadastro, PaginaInicial });

// const MainNavigator = createBottomTabNavigator(
//     {
//         CadastroProjetos,
//         PaginaInicial
//     },
//     {
//         initialRouteName: "PaginaInicial",
//         swipeEnabled: true,
//         tabBarOptions: {
//             showLabel: false,
//             showIcon: true,
//             inactiveBackgroundColor: "#dd99ff",
//             activeBackgroundColor: "#B727FF",
//             activeTintColor: "#FFFFFF",
//             inactiveTintColor: "#FFFFFF",
//             style: {
//                 height: 50
//             }
//         }
//     }
// );

export default createAppContainer(
    AuthStack
);