import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import Dashboard from '../dashboard/Dashboard';
import BlogsComponent from '../blogs/BlogsComponent';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';

const Drawer = createDrawerNavigator();
const MainDrawerNavigation = () => {
    return (
        <Drawer.Navigator initialRouteName="Dashboard" drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Dashboard" component={Dashboard} />
            <Drawer.Screen name="Blogs" component={BlogsComponent} />
        </Drawer.Navigator>
    );
};

export default MainDrawerNavigation;
