import {
    createAppContainer,
    createStackNavigator,
    createBottomTabNavigator
} from "react-navigation";

import Login from './pages/login';
import CadastrarUsuario from './pages/cadastrarUsuario';

const AuthStack = createStackNavigator({ Login });

const MainTabNavigator = createBottomTabNavigator(
    {
      Login: {
        screen: Login
      },
      CadastrarUsuario: {
        screen: CadastrarUsuario
      }
    },
    {
      tabBarOptions: {
        showLabel: false,
      //   showIcon: true,
        inactiveBackgroundColor: "#1D0097",
        activeBackgroundColor: "#2400BE"
      },
      initialRouteName: "CadastrarUsuario"
    }
  );
  
export default createAppContainer(
    // AuthStack,
    MainTabNavigator
);

