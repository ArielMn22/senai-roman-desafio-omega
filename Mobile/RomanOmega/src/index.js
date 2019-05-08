import {
    createAppContainer,
    createStackNavigator
} from "react-navigation";

import Login from './pages/login';
import Cadastro from './pages/cadastrarUsuario';

const AuthStack = createStackNavigator({ Login, Cadastro });

// const MainTabNavigator = createBottomTabNavigator(
//     {
//       Login: {
//         screen: Login
//       },
//       CadastrarUsuario: {
//         screen: CadastrarUsuario
//       }
//     },
//     {
//       tabBarOptions: {
//         showLabel: false,
//       //   showIcon: true,
//         inactiveBackgroundColor: "#1D0097",
//         activeBackgroundColor: "#2400BE"
//       },
//       initialRouteName: "CadastrarUsuario"
//     }
//   );
  
export default createAppContainer(
    AuthStack
);

