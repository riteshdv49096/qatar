import React from 'react';
import { FlatList, Text, View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import imageOne from '../assets/image_one.jpeg';

const Dashboard = () => {
    const blogList = useSelector((state) => state.data.data);

    const renderItem = (item: any) => {
        return (
            <View style={s.itemView}>
                <Image source={imageOne} style={s.image} />
                <View style={s.buttonView}>
                    <Text style={{ fontWeight: '700' }}>{item.item.title}</Text>
                    <Text style={{ fontWeight: '200' }}>{item.item.body}</Text>
                </View>
            </View>
        );
    };
    return (
        <View style={s.container}>
            {blogList?.length === 0 ? (
                <View style={s.loader}>
                    <ActivityIndicator size="small" color="#0000ff" />
                </View>
            ) : (
                <FlatList testID="blogList" keyExtractor={(item, index) => item.id + index.toString()} data={blogList} renderItem={(item) => renderItem(item)} bounces={true} showsVerticalScrollIndicator={false} />
            )}
        </View>
    );
};

export default Dashboard;

export const s = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
    },
    itemView: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
        margin: 5,
        backgroundColor: 'white',
    },
    image: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonView: {
        flex: 1,
        paddingHorizontal: 10,
    },
    loader: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});
