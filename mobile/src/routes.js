import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Main from './pages/Main';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Password from './pages/Password';
import Terms from './pages/Terms';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Main">

                <AppStack.Screen name="Main" component={Main} />
                <AppStack.Screen name="Register" component={Register} />
                <AppStack.Screen name="Contact" component={Contact} />
                <AppStack.Screen name="Password" component={Password} />
                <AppStack.Screen name="Terms" component={Terms} />

            </AppStack.Navigator>
        </NavigationContainer>
    );
}