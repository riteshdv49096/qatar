import { Provider } from 'react-redux';
import Dashboard from '../Dashboard';
import { create } from 'react-test-renderer';
import { Store, AnyAction } from 'redux';
import configureStore from 'redux-mock-store';

describe('Dashboard', () => {
    const initialState = { data: [], isLoading: false, error: null };
    const mockStore = configureStore();
    let store: Store<unknown, AnyAction>;
    test('should show the data in flat list', () => {
        store = mockStore(initialState);
        const tree = create(
            <Provider store={store}>
                <Dashboard navigation={undefined} />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
