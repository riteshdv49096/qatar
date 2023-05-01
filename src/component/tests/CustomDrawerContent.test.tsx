import { SectionList, Text } from 'react-native';
import { create } from 'react-test-renderer';
import { fetchUserData } from '../../redux/actions/actions';
import { userAPI } from '../../redux/actions/actions';
import { FETCH_USER, FETCH_USER_SUCCESS } from '../../redux/actions/actionTypes';
import store from '../../redux/store';

describe('validate the navigation drawer', () => {
    it('validate drawer menus', () => {
        const tree = create(
            <SectionList
                sections={[
                    { title: 'Dashboard', data: ['Overview', 'Calender', 'Schedule Action', 'Live Alert'] },
                    { title: 'Blogs', data: ['Blogs', 'AllBlogs', 'Archive'] },
                ]}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Text>{item}</Text>}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
