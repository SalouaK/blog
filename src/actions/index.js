import jsonPlaceholder from '../apis/jsonPlaceholder';

// * a function (fetchPosts) that return another fonction
export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
        type: 'FETCH_POSTS',
        playload: response.data
    });
};