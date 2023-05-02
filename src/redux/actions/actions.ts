import axios from 'axios';
import {generateRandomNumber} from '../../utils/Utils';
import {
  FETCH_BLOG_POSTS,
  FETCH_BLOG_POSTS_SUCCESS,
  FETCH_BLOG_POSTS_FAILURE,
  EDIT_BLOG_POST,
  EDIT_BLOG_POST_SUCCESS,
  EDIT_BLOG_POST_FAILURE,
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from './actionTypes';
import {BASE_URL} from '../../utils/Constants';

const fetchUser = () => {
  return {
    type: FETCH_USER,
  };
};

const fetchUserSuccess = (data: any) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data,
  };
};

const fetchUserFailure = (error: any) => {
  return {
    type: FETCH_USER_FAILURE,
    error: error.message,
  };
};

/**
 * This function get the user data
 * @returns user data
 */
export const fetchUserData = () => {
  return (dispatch: any) => {
    dispatch(fetchUser());
    axios
      .get(`${BASE_URL}/users/${generateRandomNumber()}`)
      .then(res => {
        dispatch(fetchUserSuccess(res.data));
        dispatch(fetchBlogs(res.data.id));
      })
      .catch(error => {
        fetchUserFailure(error.message);
      });
  };
};

const fetchBlogPosts = () => {
  return {
    type: FETCH_BLOG_POSTS,
  };
};

const fetchBlogPostsSuccess = (data: any) => {
  return {
    type: FETCH_BLOG_POSTS_SUCCESS,
    payload: data,
  };
};

const fetchBlogPostsFailure = (error: any) => {
  return {
    type: FETCH_BLOG_POSTS_FAILURE,
    payload: error,
  };
};

/**
 * This function return the blogs from api
 * @param userId number
 * @returns 
 */
export const fetchBlogs = (userId: any) => {
  return (dispatch: any) => {
    dispatch(fetchBlogPosts());
    axios
      .get(`${BASE_URL}/users/${userId}/posts`)
      .then(res => {
        dispatch(fetchBlogPostsSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchBlogPostsFailure(error.message));
      });
  };
};

const editBlogs = () => {
  return {
    type: EDIT_BLOG_POST,
  };
};

const editBlogPostSuccess = (data: any) => {
  return {
    type: EDIT_BLOG_POST_SUCCESS,
    payload: data,
  };
};

const editBlogPostFailure = (error: any) => {
  return {
    type: EDIT_BLOG_POST_FAILURE,
    payload: error,
  };
};

/**
 * This function update the post using put method
 * 
 * @param post object
 * @returns 
 */
export const editBlogPost = (post: any) => {
  return (dispatch: any) => {
    dispatch(editBlogs());
    axios
      .put(`${BASE_URL}/posts/${post.id}`, post)
      .then(res => {
        dispatch(editBlogPostSuccess(res.data));
      })
      .catch(error => {
        dispatch(editBlogPostFailure(error.message));
      });
  };
};
