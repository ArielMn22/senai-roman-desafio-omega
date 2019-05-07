import {
    createAppContainer,
    createStackNavigator
} from "react-navigation";

import Login from './pages/login';

const AuthStack = createStackNavigator({ Login });

export default createAppContainer(
    AuthStack
);