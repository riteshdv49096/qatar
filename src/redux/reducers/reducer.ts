import { combineReducers } from 'redux';
import { FETCH_BLOG_POSTS, FETCH_BLOG_POSTS_SUCCESS, FETCH_BLOG_POSTS_FAILURE, EDIT_BLOG_POST, EDIT_BLOG_POST_SUCCESS, EDIT_BLOG_POST_FAILURE, FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../actions/actionTypes';

const initialState = {
    data: [],
    error: null,
    isLoading: false,
};

const initEditBlog = {
    body: '',
    id: 0,
    title: '',
    userId: 0,
};

const initUserData = {
    email: '',
    id: 0,
    name: '',
    phone: '',
    username: '',
    website: '',
};

const fetchUserData = (state = initUserData, action: any) => {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        case FETCH_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

const editBlogReducer = (state = initEditBlog, action: any) => {
    switch (action.type) {
        case EDIT_BLOG_POST:
            return {
                ...state,
                isLoading: true,
            };
        case EDIT_BLOG_POST_SUCCESS:
            const newState = { ...state, body: action.payload.body, id: action.payload.id, title: action.payload.title, userId: action.payload.userId };
            return {
                newState,
            };
        case EDIT_BLOG_POST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

const blogReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_BLOG_POSTS:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_BLOG_POSTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        case FETCH_BLOG_POSTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    data: blogReducer,
    edit: editBlogReducer,
    userData: fetchUserData,
});

export default rootReducer;
