import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { editBlogPost } from '../redux/actions/actions';

const EditPost = ({ route, navigation }) => {
    const { post, handleSubmit } = route.params;
    const [text, setText] = useState(post.body);
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();

    const handleFormSubmit = () => {
        const editBlog = { body: text, id: post.id, title: post.title, userId: post.userId };
        dispatch(editBlogPost(editBlog));
        handleSubmit(editBlog);
        navigation.goBack();
    };

    const handleEditPress = () => {
        setEdit(true);
    };

    return (
        <View style={s.container}>
            <View style={s.subContainer}>
                <TextInput editable={edit} style={s.textInput} multiline={true} numberOfLines={4} onChangeText={setText} value={text} />
                <View style={s.buttonView}>
                    <TouchableOpacity onPress={() => handleEditPress()} style={s.button}>
                        <Text>{'EDIT'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleFormSubmit()} style={s.button}>
                        <Text>{'SUBMIT'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default EditPost;

const s = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        height: 400,
        width: '100%',
        padding: 20,
    },
    textInput: {
        height: 200,
        width: '100%',
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        borderColor: 'white',
        backgroundColor: 'white',
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 8,
    },
});
