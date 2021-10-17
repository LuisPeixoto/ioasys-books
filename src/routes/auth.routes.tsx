import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';

const App = createNativeStackNavigator();

const AuThRoutes: React.FC = () => (
  <App.Navigator
    initialRouteName="Login"
    screenOptions={{ headerShown: false }}
  >
    <App.Screen name="Login" component={Login} />
  </App.Navigator>
);

export default AuThRoutes;
