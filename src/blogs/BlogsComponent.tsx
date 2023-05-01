import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import AllBlogs from './AllBlogs';
import LatestBlogs from './LatestBlogs';
import ArchiveBlogs from './ArchiveBlogs';
const Tab = createMaterialTopTabNavigator();

const BlogsComponent = () => {
    return (
        <Tab.Navigator
            initialRouteName="All"
            screenOptions={{
                tabBarActiveTintColor: '#000000',
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { backgroundColor: 'white' },
            }}>
            <Tab.Screen name="All" component={AllBlogs} options={{ tabBarLabel: 'All' }} />
            <Tab.Screen name="Latest" component={LatestBlogs} options={{ tabBarLabel: 'Latest' }} />
            <Tab.Screen name="Archive" component={ArchiveBlogs} options={{ tabBarLabel: 'Archive' }} />
        </Tab.Navigator>
    );
};

export default BlogsComponent;
