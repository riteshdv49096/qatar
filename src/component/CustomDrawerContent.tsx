import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, SafeAreaView, Image, SectionList } from 'react-native';
import { generateRandomNumber } from '../utils/Utils';
import { fetchUserData } from '../redux/actions/actions';

function CustomDrawerContent(props) {
    const [userName, setUserName] = useState('John Doe');
    const [userId, setUserId] = useState();

    const dispatch = useDispatch();
    const name = useSelector((state) => state?.userData?.data);

    function handleOnPress(event: any) {
        if (event === 'Dashboard') {
            props.navigation.navigate('Dashboard', { screen: 'Dashboard', backButtonText: true });
        } else {
            props.navigation.navigate('Blogs', { screen: 'Blogs', backButtonText: true });
        }
    }

    function renderItemView(item: any) {
        return (
            <TouchableOpacity style={styles.sectionItems}>
                <Text style={styles.sectionItemTitle}>{item}</Text>
            </TouchableOpacity>
        );
    }

    useEffect(() => {
        dispatch(fetchUserData());
    }, []);

    function renderSectionTitles(item: any) {
        return (
            <TouchableOpacity style={styles.parentItem} onPress={() => handleOnPress(item)}>
                <Text style={styles.title}>{item}</Text>
            </TouchableOpacity>
        );
    }

    function renderMainDrawer() {
        return (
            <View style={styles.container}>
                <SectionList
                    testID="drawerMenu"
                    sections={[
                        { title: 'Dashboard', data: ['Overview', 'Calender', 'Schedule Action', 'Live Alert'] },
                        { title: 'Blogs', data: ['Blogs', 'AllBlogs', 'Archive'] },
                    ]}
                    renderItem={({ item }) => renderItemView(item)}
                    renderSectionHeader={({ section }) => renderSectionTitles(section.title)}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
        );
    }

    function renderProfileHeader() {
        let randNum = generateRandomNumber();
        return (
            <View style={styles.centered}>
                <Image source={{ uri: `https://xsgames.co/randomusers/assets/avatars/male/${randNum}.jpg` }} style={styles.logo} />
                <Text style={{ marginVertical: 10 }}>{name?.name !== undefined ? name?.name : userName}</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
                {renderProfileHeader()}
                {renderMainDrawer()}
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 100,
        flexDirection: 'row',
        paddingVertical: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 100,
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
        zIndex: 1000,
    },
    centered: {
        alignItems: 'center',
    },
    sectionItems: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 2,
    },
    sectionItemTitle: {
        marginLeft: 20,
        marginVertical: 10,
        textAlign: 'center',
        color: 'gray',
    },
    parentItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingTop: 4,
        paddingBottom: 4,
    },
    title: {
        margin: 10,
        color: 'black',
        fontWeight: '700',
        textAlign: 'center',
    },
    backButtonText: {
        marginLeft: 10,
        color: '#F0F0F0',
    },
});

export default CustomDrawerContent;
