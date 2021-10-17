import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Details';

const App = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator screenOptions={{ headerShown: false }}>
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Details" component={Details} />
  </App.Navigator>
);

export default AppRoutes;
