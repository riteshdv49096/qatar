import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store';
import BlogsComponent from './src/blogs/BlogsComponent';
import EditPost from './src/dashboard/EditPost';
import MainDrawerNavigation from './src/component/MainDrawerNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <Provider store={configureStore}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Root" component={MainDrawerNavigation} options={{ headerShown: false }} />
                    <Stack.Screen name="Blogs" component={BlogsComponent} />
                    <Stack.Screen name="EditPost" component={EditPost} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
