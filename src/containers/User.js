import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Home from '../screens/Home/Home';
import Explore from '../screens/Product/Explore';
import Cart from '../screens/Product/Cart';
import Offer from '../screens/Product/Offer';
import Profile from '../screens/Account/Profile';
import BottomTab from '../components/BottomTab';

const UserTab = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTab {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Offer" component={Offer} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const UserStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default UserTab;
