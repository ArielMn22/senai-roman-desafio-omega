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
  
const AuthStack = createStackNavigator({ Login, CadastroUsuario });

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