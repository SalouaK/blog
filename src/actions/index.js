//* if you want to use lodash look at the code in comment without highlight 
import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

//* to make a unique request for each usersIds
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
   await dispatch(fetchPosts());

//    const userIds = _.uniq(_.map(getState().posts, 'userId'));
//    userIds.forEach(id => dispatch(fetchUser(id)));

   //* to refactor the const userIds 
   _.chain(getState().posts)
   .map('userId')
   .uniq()
   .forEach(id => dispatch(fetchUser(id)))
   .value()
};


// * a function (fetchPosts) that return another fonction
export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
};

// export const fetchUser = (id) => (dispatch) => {
//     _fetchUser(id, dispatch);
// };

//* we can also write this like this 
//* export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     });
// });