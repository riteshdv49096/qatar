import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../redux/actions/actions';
import imageOne from '../assets/image_one.jpeg';
import configureStore from '../redux/store';
import { s } from '../dashboard/Dashboard';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AllBlogs = ({ navigation }) => {
    const dispatch = useDispatch();
    const blogList = useSelector((state) => state.data.data);
    const [list, setList] = useState(blogList);
    const userId = configureStore.getState().userData.data.id;

    const handleNavigation = (item: any) => {
        navigation.navigate('EditPost', { post: item.item, handleSubmit: handleSubmit });
    };

    const handleSubmit = (item: any) => {
        const newState = blogList.map((blog: any) => {
            if (blog.id === item.id) {
                return { ...blog, body: item.body, id: item.id, title: item.title, userId: item.userId };
            }
            return blog;
        });
        setList(newState);
    };

    useEffect(() => {
        dispatch(fetchBlogs(userId));
    }, []);

    const renderItem = (item: any) => {
        return (
            <View style={s.itemView}>
                <Image source={imageOne} style={s.image} />
                <View style={s.buttonView}>
                    <TouchableOpacity onPress={() => handleNavigation(item)}>
                        <Text style={{ fontWeight: '700' }}>{item.item.title}</Text>
                        <Text style={{ fontWeight: '200' }}>{item.item.body}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    return (
        <View style={s.container}>
            {list.length === 0 ? (
                <View style={s.loader}>
                    <ActivityIndicator size="small" color="#0000ff" />
                </View>
            ) : (
                <FlatList keyExtractor={(item, index) => item.id + index.toString()} data={list} renderItem={(item) => renderItem(item)} bounces={true} showsVerticalScrollIndicator={false} />
            )}
        </View>
    );
};

export default AllBlogs;
